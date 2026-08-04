/**
 * Renk modeli (yardımcı — bileşen değil)
 * ------------------------------------------------------------------
 * Renk bileşenleri (ColorArea/Field/Picker/Slider/Swatch/SwatchPicker) bu
 * modeli kullanır. İç model HSL + alpha; rgb/hsb/hex dönüşümleri burada.
 *   parseColor("#0485F7") → Color
 *   color.toString("css") / ("hex") / ("hsl")
 *   color.getChannel("hue") · color.setChannel("saturation", 50)
 */
export type ColorSpace = "rgb" | "hsl" | "hsb"
export type ColorChannel = "hue" | "saturation" | "lightness" | "brightness" | "red" | "green" | "blue" | "alpha"

export class Color {
  h: number
  s: number
  l: number
  a: number

  constructor(h: number, s: number, l: number, a = 1) {
    this.h = ((h % 360) + 360) % 360
    this.s = Math.min(100, Math.max(0, s))
    this.l = Math.min(100, Math.max(0, l))
    this.a = Math.min(1, Math.max(0, a))
  }

  /** Yeni renk (bu rengi değiştirmeden) */
  clone(): Color {
    return new Color(this.h, this.s, this.l, this.a)
  }

  toString(space: ColorSpace | "css" | "hex" = "css"): string {
    if (space === "hex") return this.toHex()
    if (space === "css") return this.a < 1 ? this.toHsla() : this.toHex()
    if (space === "hsl") return this.a < 1 ? this.toHsla() : `hsl(${Math.round(this.h)}, ${Math.round(this.s)}%, ${Math.round(this.l)}%)`
    if (space === "rgb") return this.toRgb(space === "rgb")
    if (space === "hsb") {
      const v = this.brightness()
      return `hsb(${Math.round(this.h)}, ${Math.round(this.s)}%, ${Math.round(v)}%)`
    }
    return this.toHex()
  }

  toHex(): string {
    const { r, g, b } = this.toRgbObj()
    const to2 = (n: number) => Math.round(n).toString(16).padStart(2, "0")
    return `#${to2(r)}${to2(g)}${to2(b)}`
  }

  toHsla(): string {
    return `hsla(${Math.round(this.h)}, ${Math.round(this.s)}%, ${Math.round(this.l)}%, ${this.a})`
  }

  toRgb(alpha = false): string {
    const { r, g, b } = this.toRgbObj()
    return alpha
      ? `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${this.a})`
      : `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
  }

  toRgbObj(): { r: number; g: number; b: number } {
    const h = this.h / 360
    const s = this.s / 100
    const l = this.l / 100
    if (s === 0) {
      const v = Math.round(l * 255)
      return { r: v, g: v, b: v }
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    const hue2rgb = (p2: number, q2: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t
      if (t < 1 / 2) return q2
      if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6
      return p2
    }
    return {
      r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
      g: Math.round(hue2rgb(p, q, h) * 255),
      b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
    }
  }

  /** HSB parlaklık (max rgb) — brightness kanalı için */
  brightness(): number {
    const { r, g, b } = this.toRgbObj()
    return (Math.max(r, g, b) / 255) * 100
  }

  /** Kanal değeri (0-100; hue 0-360; alpha 0-1) */
  getChannel(channel: ColorChannel): number {
    switch (channel) {
      case "hue": return this.h
      case "saturation": return this.s
      case "lightness": return this.l
      case "brightness": return this.brightness()
      case "red": return this.toRgbObj().r
      case "green": return this.toRgbObj().g
      case "blue": return this.toRgbObj().b
      case "alpha": return this.a
    }
  }

  /** Kanalı ayarla (yeni renk döner) */
  setChannel(channel: ColorChannel, value: number): Color {
    const c = this.clone()
    switch (channel) {
      case "hue": c.h = ((value % 360) + 360) % 360; break
      case "saturation": c.s = Math.min(100, Math.max(0, value)); break
      case "lightness": c.l = Math.min(100, Math.max(0, value)); break
      case "brightness": {
        // l'yi ayarla ki brightness istenen değer olsun
        const { r, g, b } = this.toRgbObj()
        const max = Math.max(r, g, b) / 255
        if (max > 0) {
          const factor = Math.min(1, Math.max(0, value / 100)) / max
          const nr = Math.min(255, r * factor)
          const ng = Math.min(255, g * factor)
          const nb = Math.min(255, b * factor)
          const conv = rgbToHsl(nr, ng, nb)
          c.h = conv.h; c.s = conv.s; c.l = conv.l
        }
        break
      }
      case "red": {
        const { g, b } = this.toRgbObj()
        const conv = rgbToHsl(Math.min(255, Math.max(0, value)), g, b)
        c.h = conv.h; c.s = conv.s; c.l = conv.l; break
      }
      case "green": {
        const { r, b } = this.toRgbObj()
        const conv = rgbToHsl(r, Math.min(255, Math.max(0, value)), b)
        c.h = conv.h; c.s = conv.s; c.l = conv.l; break
      }
      case "blue": {
        const { r, g } = this.toRgbObj()
        const conv = rgbToHsl(r, g, Math.min(255, Math.max(0, value)))
        c.h = conv.h; c.s = conv.s; c.l = conv.l; break
      }
      case "alpha": c.a = Math.min(1, Math.max(0, value)); break
    }
    return c
  }
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  let h = 0, s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break
      case gn: h = (bn - rn) / d + 2; break
      default: h = (rn - gn) / d + 4
    }
    h /= 6
  }
  return { h: h * 360, s: s * 100, l: l * 100 }
}

/** "hex", "rgb(...)", "hsl(...)", "rgba/hsla" ayrıştırır */
export function parseColor(input: string): Color {
  const s = (input || "").trim().toLowerCase()
  if (s.startsWith("#")) {
    const hex = s.slice(1)
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex
    const num = parseInt(full.slice(0, 6), 16)
    const r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255
    const a = full.length >= 8 ? parseInt(full.slice(6, 8), 16) / 255 : 1
    const { h, s: ss, l } = rgbToHsl(r, g, b)
    return new Color(h, ss, l, a)
  }
  if (s.startsWith("rgb")) {
    const m = s.match(/rgba?\(([^)]+)\)/)
    if (m) {
      const parts = m[1].split(",").map((p) => parseFloat(p))
      const { h, s: ss, l } = rgbToHsl(parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0)
      return new Color(h, ss, l, parts[3] ?? 1)
    }
  }
  if (s.startsWith("hsl")) {
    const m = s.match(/hsla?\(([^)]+)\)/)
    if (m) {
      const parts = m[1].split(",").map((p) => parseFloat(p))
      return new Color(parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0, parts[3] ?? 1)
    }
  }
  return new Color(0, 0, 0, 1)
}

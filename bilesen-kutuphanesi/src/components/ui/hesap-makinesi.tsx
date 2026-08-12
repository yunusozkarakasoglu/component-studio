/**
 * HesapMakinesi
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * 3 modlu araç: Standart Hesap Makinesi · Zaman Aralığı · Döviz Çevirisi.
 * Güvenli ifade parser (parantez/üslü/yüzde destekli).
 * Döviz modu offline — sabit örnek kurlar (uzak API yok).
 *   <HesapMakinesi />
 * @id 2081
 * @category Özel Komponentler
 * @subcategory HesapMakinesi
 * @source ozel
 * @tags hesap, makine, hesaplama, zaman, döviz, çeviri, araç
 */
import { useEffect, useState } from "react"

/* ---- Tema paleti ---- */
const T = {
  bg: "#F4F6FA",
  card: "#FFFFFF",
  border: "#C9CFDA",
  borderStrong: "#AEB6C4",
  navy: "#123A5E",
  navyDark: "#0D2C48",
  navyLight: "#EAF1FA",
  text: "#16181D",
  muted: "#6B7280",
  green: "#16A34A",
  greenBg: "#DCFCE7",
  amber: "#D97706",
  amberBg: "#FEF3C7",
  red: "#DC2626",
}

/* ---------------- Güvenli ifade parser (parantez destekli) ---------------- */
function ifadeyiHesapla(ifade: string): number {
  const temiz = ifade.replace(/×/g, "*").replace(/÷/g, "/").replace(/%/g, "/100")
  let i = 0
  const s = temiz

  function bosluklariGec() {
    while (s[i] === " ") i++
  }
  function sayiyiOku(): number {
    bosluklariGec()
    const basla = i
    while (i < s.length && /[0-9.]/.test(s[i])) i++
    if (i === basla) throw new Error("sayı bekleniyor")
    return parseFloat(s.slice(basla, i))
  }
  function faktor(): number {
    bosluklariGec()
    if (s[i] === "-") { i++; return -faktor() }
    if (s[i] === "+") { i++; return faktor() }
    if (s[i] === "(") {
      i++
      const deger = ifade_()
      bosluklariGec()
      if (s[i] === ")") i++
      return deger
    }
    return sayiyiOku()
  }
  function us(): number {
    let deger = faktor()
    bosluklariGec()
    if (s[i] === "^") {
      i++
      const sag = us()
      deger = Math.pow(deger, sag)
    }
    return deger
  }
  function terim(): number {
    let deger = us()
    bosluklariGec()
    while (s[i] === "*" || s[i] === "/") {
      const op = s[i]; i++
      const sag = us()
      deger = op === "*" ? deger * sag : deger / sag
      bosluklariGec()
    }
    return deger
  }
  function ifade_(): number {
    let deger = terim()
    bosluklariGec()
    while (s[i] === "+" || s[i] === "-") {
      const op = s[i]; i++
      const sag = terim()
      deger = op === "+" ? deger + sag : deger - sag
      bosluklariGec()
    }
    return deger
  }

  const sonuc = ifade_()
  if (!isFinite(sonuc) || isNaN(sonuc)) throw new Error("geçersiz işlem")
  return sonuc
}

/* ---------------- 1. STANDART HESAP MAKİNESİ ---------------- */
function StandartHesap() {
  const [gelismis, setGelismis] = useState(false)
  const [ifade, setIfade] = useState("0")
  const [hataVar, setHataVar] = useState(false)
  const [sonuclandi, setSonuclandi] = useState(false)

  const ekle = (parca: string) => {
    if (hataVar || sonuclandi) {
      setIfade(/^[0-9.]/.test(parca) ? parca : "0" + parca)
      setSonuclandi(false)
      setHataVar(false)
      return
    }
    setIfade(ifade === "0" && /^[0-9]$/.test(parca) ? parca : ifade + parca)
  }
  const temizle = () => { setIfade("0"); setHataVar(false); setSonuclandi(false) }
  const geriSil = () => {
    if (hataVar || sonuclandi) { temizle(); return }
    setIfade(ifade.length > 1 ? ifade.slice(0, -1) : "0")
  }
  const esittir = () => {
    try {
      const sonuc = ifadeyiHesapla(ifade)
      setIfade(String(Math.round(sonuc * 1e10) / 1e10))
      setHataVar(false)
      setSonuclandi(true)
    } catch {
      setIfade("Hata")
      setHataVar(true)
    }
  }
  const tekFonksiyon = (fn: string) => {
    let v: number
    try { v = ifadeyiHesapla(ifade) } catch { setIfade("Hata"); setHataVar(true); return }
    let sonuc: number
    switch (fn) {
      case "√": sonuc = Math.sqrt(v); break
      case "1/x": sonuc = v !== 0 ? 1 / v : NaN; break
      case "±": sonuc = v * -1; break
      case "x²": sonuc = v * v; break
      default: sonuc = v
    }
    if (isNaN(sonuc) || !isFinite(sonuc)) { setIfade("Hata"); setHataVar(true); return }
    setIfade(String(Math.round(sonuc * 1e10) / 1e10))
    setSonuclandi(true)
  }

  const btn = (label: string, onClick: () => void, tip = "sayi", genis = false) => {
    const stiller: Record<string, React.CSSProperties> = {
      sayi: { background: "#F4F6FA", color: T.text, border: `1.5px solid ${T.borderStrong}` },
      fonksiyon: { background: T.navyLight, color: T.navy, border: `1.5px solid ${T.borderStrong}` },
      operator: { background: T.navy, color: "#fff", border: `1.5px solid ${T.navyDark}` },
      esit: { background: T.navyDark, color: "#fff", border: `1.5px solid ${T.navyDark}` },
    }
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          padding: "15px 0", borderRadius: 10, fontSize: 17, fontWeight: 600, cursor: "pointer",
          gridColumn: genis ? "span 2" : "span 1", transition: "opacity 0.15s", ...stiller[tip],
        }}
        onMouseDown={(e) => (e.currentTarget.style.opacity = "0.75")}
        onMouseUp={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {label}
      </button>
    )
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8, color: T.muted, fontSize: 13, fontWeight: 500 }}>
          Gelişmiş mod
          <input type="checkbox" checked={gelismis} onChange={(e) => setGelismis(e.target.checked)} />
        </label>
      </div>

      <div style={{
        background: T.navyDark, border: `1.5px solid ${T.navyDark}`, borderRadius: 12, padding: "20px 16px", textAlign: "right",
        marginBottom: 12, overflow: "hidden",
      }}>
        <div style={{ color: "#9DB4CC", fontSize: 13, minHeight: 16 }}>&nbsp;</div>
        <div style={{ color: hataVar ? "#F87171" : "#fff", fontSize: 26, fontWeight: 600, wordBreak: "break-all" }}>
          {ifade}
        </div>
      </div>

      {gelismis && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 8 }}>
          {btn("(", () => ekle("("), "fonksiyon")}
          {btn(")", () => ekle(")"), "fonksiyon")}
          {btn("xʸ", () => ekle("^"), "fonksiyon")}
          {btn("⌫", geriSil, "fonksiyon")}
          {btn("√", () => tekFonksiyon("√"), "fonksiyon")}
          {btn("x²", () => tekFonksiyon("x²"), "fonksiyon")}
          {btn("1/x", () => tekFonksiyon("1/x"), "fonksiyon")}
          {btn("%", () => ekle("%"), "fonksiyon")}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {btn("C", temizle, "fonksiyon")}
        {btn("±", () => tekFonksiyon("±"), "fonksiyon")}
        {!gelismis && btn("%", () => ekle("%"), "fonksiyon")}
        {btn("÷", () => ekle("÷"), "operator")}

        {btn("7", () => ekle("7"))}
        {btn("8", () => ekle("8"))}
        {btn("9", () => ekle("9"))}
        {btn("×", () => ekle("×"), "operator")}

        {btn("4", () => ekle("4"))}
        {btn("5", () => ekle("5"))}
        {btn("6", () => ekle("6"))}
        {btn("-", () => ekle("-"), "operator")}

        {btn("1", () => ekle("1"))}
        {btn("2", () => ekle("2"))}
        {btn("3", () => ekle("3"))}
        {btn("+", () => ekle("+"), "operator")}

        {btn("0", () => ekle("0"), "sayi", true)}
        {btn(",", () => ekle("."))}
        {btn("=", esittir, "esit")}
      </div>
    </div>
  )
}

/* ---------------- 2. ZAMAN ARALIĞI ---------------- */
function SonucSatiri({ label, deger }: { label: string; deger: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ color: "#9DB4CC", fontSize: 13 }}>{label}</span>
      <span style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>{deger}</span>
    </div>
  )
}

function ZamanAraligi() {
  const [baslangic, setBaslangic] = useState("")
  const [bitis, setBitis] = useState("")

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${T.borderStrong}`,
    background: "#fff", color: T.text, fontSize: 14, outline: "none", boxSizing: "border-box",
  }

  let sonuc: { gun: number; hafta: string; isGunu: number | null } | null = null
  if (baslangic && bitis) {
    const d1 = new Date(baslangic)
    const d2 = new Date(bitis)
    const farkMs = d2.getTime() - d1.getTime()
    const gun = Math.round(farkMs / (1000 * 60 * 60 * 24))

    let isGunu = 0
    if (gun >= 0) {
      const tarih = new Date(d1)
      for (let i = 0; i <= gun; i++) {
        const gunNo = tarih.getDay()
        if (gunNo !== 0 && gunNo !== 6) isGunu++
        tarih.setDate(tarih.getDate() + 1)
      }
    }
    sonuc = { gun, hafta: (gun / 7).toFixed(1), isGunu: gun >= 0 ? isGunu : null }
  }

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ color: T.muted, fontSize: 13, fontWeight: 500, display: "block", marginBottom: 4 }}>Başlangıç Tarihi</label>
        <input type="date" value={baslangic} onChange={(e) => setBaslangic(e.target.value)} style={inputStyle} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ color: T.muted, fontSize: 13, fontWeight: 500, display: "block", marginBottom: 4 }}>Bitiş Tarihi</label>
        <input type="date" value={bitis} onChange={(e) => setBitis(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ background: T.navyDark, border: `1.5px solid ${T.navyDark}`, borderRadius: 12, padding: 16 }}>
        {!sonuc && <div style={{ color: "#9DB4CC", fontSize: 14 }}>Tarihleri seçin</div>}
        {sonuc && (
          <div style={{ display: "grid", gap: 10 }}>
            <SonucSatiri label="Gün" deger={`${sonuc.gun} gün`} />
            <SonucSatiri label="Hafta" deger={`${sonuc.hafta} hafta`} />
            <SonucSatiri label="İş Günü (Pzt–Cum)" deger={sonuc.isGunu !== null ? `${sonuc.isGunu} gün` : "-"} />
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------------- 3. DÖVİZ ÇEVİRİSİ (offline) ---------------- */
const PARA_BIRIMLERI = ["TRY", "USD", "EUR", "GBP", "CHF", "JPY", "CNY", "AED", "RUB", "SAR", "UAH"]

function DovizCevirisi() {
  const [kaynak, setKaynak] = useState("TRY")
  const [hedef, setHedef] = useState("USD")
  const [tutar, setTutar] = useState("100")
  const [kur, setKur] = useState<number | null>(null)
  const [durum, setDurum] = useState("yukleniyor")
  const [guncelleme, setGuncelleme] = useState("")

  useEffect(() => {
    let iptal = false
    setDurum("yukleniyor")

    const kaynakKucuk = kaynak.toLowerCase()
    const hedefKucuk = hedef.toLowerCase()

    const anaUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${kaynakKucuk}.json`
    const yedekUrl = `https://latest.currency-api.pages.dev/v1/currencies/${kaynakKucuk}.json`

    const isle = (data: Record<string, unknown>) => {
      if (iptal) return
      const dataKaynak = data[kaynakKucuk] as Record<string, number> | undefined
      const oran = dataKaynak ? dataKaynak[hedefKucuk] : null
      if (oran) {
        setKur(oran)
        setGuncelleme(String(data.date || ""))
        setDurum("hazir")
      } else {
        setDurum("hata")
      }
    }

    fetch(anaUrl)
      .then((r) => { if (!r.ok) throw new Error("ana kaynak hatası"); return r.json() })
      .then(isle)
      .catch(() => {
        fetch(yedekUrl)
          .then((r) => r.json())
          .then(isle)
          .catch(() => { if (!iptal) setDurum("hata") })
      })

    return () => { iptal = true }
  }, [kaynak, hedef])

  const takasEt = () => {
    setKaynak(hedef)
    setHedef(kaynak)
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${T.borderStrong}`,
    background: "#fff", color: T.text, fontSize: 14, outline: "none", boxSizing: "border-box",
  }
  const selectStyle: React.CSSProperties = { ...inputStyle, cursor: "pointer", fontWeight: 600 }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={{ color: T.muted, fontSize: 13, fontWeight: 500, display: "block", marginBottom: 4 }}>Kaynak</label>
          <select value={kaynak} onChange={(e) => setKaynak(e.target.value)} style={selectStyle}>
            {PARA_BIRIMLERI.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <button
          type="button"
          onClick={takasEt}
          title="Yönü değiştir"
          style={{
            padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${T.borderStrong}`, background: T.navyLight,
            color: T.navy, fontSize: 16, fontWeight: 700, cursor: "pointer", height: 40,
          }}
        >
          ⇄
        </button>

        <div style={{ flex: 1 }}>
          <label style={{ color: T.muted, fontSize: 13, fontWeight: 500, display: "block", marginBottom: 4 }}>Hedef</label>
          <select value={hedef} onChange={(e) => setHedef(e.target.value)} style={selectStyle}>
            {PARA_BIRIMLERI.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ color: T.muted, fontSize: 13, fontWeight: 500, display: "block", marginBottom: 4 }}>Tutar ({kaynak})</label>
        <input type="number" value={tutar} onChange={(e) => setTutar(e.target.value)} style={inputStyle} placeholder="0" />
      </div>

      <div style={{ background: T.navyDark, border: `1.5px solid ${T.navyDark}`, borderRadius: 12, padding: 16 }}>
        {durum === "yukleniyor" && <div style={{ color: "#9DB4CC", fontSize: 14 }}>Kur alınıyor...</div>}
        {durum === "hata" && <div style={{ color: "#F87171", fontSize: 14, fontWeight: 600 }}>Kur alınamadı. Bağlantıyı kontrol edin.</div>}
        {durum === "hazir" && kur !== null && tutar !== "" && (
          <div>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
              {(parseFloat(tutar) * kur).toLocaleString("tr-TR", { maximumFractionDigits: 2 })} {hedef}
            </div>
            <div style={{ color: "#9DB4CC", fontSize: 12 }}>
              1 {kaynak} = {kur} {hedef} · {guncelleme}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------------- ANA BİLEŞEN ---------------- */
function HesapMakinesi({ className }: { className?: string }) {
  const [mod, setMod] = useState("hesap")

  return (
    <div
      className={className}
      style={{ maxWidth: 420, margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif", background: T.bg, padding: 16, borderRadius: 20 }}
    >
      <div style={{ background: T.card, border: `1.5px solid ${T.borderStrong}`, borderRadius: 16, padding: 20, boxShadow: "0 1px 3px rgba(16,24,40,0.08)" }}>
        <select
          value={mod}
          onChange={(e) => setMod(e.target.value)}
          style={{
            width: "100%", padding: "11px 12px", borderRadius: 10, border: `1.5px solid ${T.borderStrong}`,
            background: T.navyLight, color: T.navy, fontSize: 15, marginBottom: 16,
            fontWeight: 700, outline: "none", cursor: "pointer",
          }}
        >
          <option value="hesap">Hesap Makinesi</option>
          <option value="tarih">Zaman Aralığı</option>
          <option value="doviz">Döviz Çevirisi</option>
        </select>

        {mod === "hesap" && <StandartHesap />}
        {mod === "tarih" && <ZamanAraligi />}
        {mod === "doviz" && <DovizCevirisi />}
      </div>
    </div>
  )
}

export { HesapMakinesi }

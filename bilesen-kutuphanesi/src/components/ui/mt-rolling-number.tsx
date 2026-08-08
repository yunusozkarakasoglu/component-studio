/**
 * MtRollingNumber
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yuvarlanan sayı — değer değişince yumuşak animasyonla sayar.
 *   <MtRollingNumber value={1234} />
 * @id 1509
 * @category Yükleme & İlerleme
 * @subcategory MtRollingNumber
 * @source mantine
 */
import { useEffect, useRef, useState } from "react"

interface MtRollingNumberProps {
  value?: number
  transitionDuration?: number
  prefix?: string
  suffix?: string
  decimalScale?: number
  className?: string
}

function MtRollingNumber({ value = 0, transitionDuration = 1000, prefix = "", suffix = "", decimalScale = 0, className }: MtRollingNumberProps) {
  const [display, setDisplay] = useState(value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    const from = display

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / transitionDuration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(from + (value - from) * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {display.toLocaleString("en-US", { minimumFractionDigits: decimalScale, maximumFractionDigits: decimalScale })}
      {suffix}
    </span>
  )
}

export { MtRollingNumber }
export type { MtRollingNumberProps }

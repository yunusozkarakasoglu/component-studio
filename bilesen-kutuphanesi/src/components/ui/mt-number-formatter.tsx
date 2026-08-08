/**
 * MtNumberFormatter
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Sayı biçimlendirici — value, prefix/suffix, binlik ayracı, ondalık.
 *   <MtNumberFormatter value={1234567} thousandSeparator />
 * @id 1510
 * @category Yükleme & İlerleme
 * @subcategory MtNumberFormatter
 * @source mantine
 */
import type { CSSProperties } from "react"

interface MtNumberFormatterProps {
  value?: number | string
  prefix?: string
  suffix?: string
  thousandSeparator?: boolean | string
  decimalScale?: number
  className?: string
  style?: CSSProperties
}

function MtNumberFormatter({ value = 0, prefix, suffix, thousandSeparator, decimalScale, className, style }: MtNumberFormatterProps) {
  const num = typeof value === "number" ? value : Number.parseFloat(value)
  const sep = thousandSeparator === true ? "," : typeof thousandSeparator === "string" ? thousandSeparator : ""
  let formatted = ""
  if (Number.isFinite(num)) {
    formatted = num.toLocaleString("en-US", {
      minimumFractionDigits: decimalScale ?? 0,
      maximumFractionDigits: decimalScale ?? 10,
    })
    if (sep && sep !== ",") formatted = formatted.replace(/,/g, sep)
  } else {
    formatted = String(value)
  }

  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums", ...style }}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

export { MtNumberFormatter }
export type { MtNumberFormatterProps }

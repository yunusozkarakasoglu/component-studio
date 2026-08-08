/**
 * MtTimeValue
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Saat değeri — zamanı görüntülenebilir biçimde sunar.
 *   <MtTimeValue value="14:30" />
 * @id 1594
 * @category Takvim
 * @subcategory MtTimeValue
 * @source mantine
 */
import { cn } from "@/lib/utils"

interface MtTimeValueProps {
  value?: string | Date | null
  format?: "24" | "12"
  withSeconds?: boolean
  className?: string
}

function MtTimeValue({ value, format = "24", withSeconds, className }: MtTimeValueProps) {
  if (value == null || value === "") return <span className={cn("text-muted-foreground", className)}>—</span>

  let text: string
  if (value instanceof Date) {
    text = new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit", second: withSeconds ? "2-digit" : undefined, hour12: format === "12" }).format(value)
  } else if (value.includes("T")) {
    const d = new Date(value)
    text = new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit", second: withSeconds ? "2-digit" : undefined, hour12: format === "12" }).format(d)
  } else {
    const [hh, mm = "00", ss = "00"] = value.split(":")
    const h = parseInt(hh, 10)
    if (format === "12") {
      const ap = h >= 12 ? "PM" : "AM"
      text = `${h % 12 || 12}:${mm}${withSeconds ? `:${ss}` : ""} ${ap}`
    } else {
      text = `${hh}:${mm}${withSeconds ? `:${ss}` : ""}`
    }
  }

  return <span className={cn("tabular-nums text-foreground", className)}>{text}</span>
}

export { MtTimeValue }
export type { MtTimeValueProps }

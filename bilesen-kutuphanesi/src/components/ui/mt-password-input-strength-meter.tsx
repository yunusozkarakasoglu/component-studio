/**
 * MtPasswordInputStrengthMeter
 * Şifre gücü göstergesi (saf React, Mantine kaynaklı).
 * @id 1148
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { useState } from "react"
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function strength(pw: string): number {
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s
}

const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-lime-500", "bg-emerald-500"]
const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"]

function MtPasswordInputStrengthMeter() {
  const [value, setValue] = useState("")
  const s = strength(value)

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtPasswordInput
        label="Password"
        placeholder="Type a password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < s ? colors[s] : "bg-muted"}`} />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{value ? labels[s] : "Enter a password to see strength"}</p>
    </div>
  )
}

export { MtPasswordInputStrengthMeter }

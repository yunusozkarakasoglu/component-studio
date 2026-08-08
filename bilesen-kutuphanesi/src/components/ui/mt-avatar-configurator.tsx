/**
 * MtAvatarConfigurator
 * Yapılandırılabilir avatar (saf React, Mantine kaynaklı).
 * @id 1463
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { useState } from "react"
import { MtAvatar } from "@/components/ui/mt-avatar"

const colors = ["blue", "cyan", "teal", "grape", "pink", "orange", "red", "green"]
const radii = ["xs", "sm", "md", "lg", "xl"]
const sizes = ["xs", "sm", "md", "lg", "xl"]

function MtAvatarConfigurator() {
  const [color, setColor] = useState("blue")
  const [radius, setRadius] = useState("xl")
  const [size, setSize] = useState("md")

  return (
    <div className="flex flex-col items-start gap-3">
      <MtAvatar color={color} radius={radius as never} size={size as never}>YO</MtAvatar>
      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
        <div className="flex flex-wrap gap-1.5">
          {colors.map((c) => (
            <button key={c} onClick={() => setColor(c)} className={`cursor-pointer rounded px-2 py-0.5 capitalize ${color === c ? "bg-blue-600 text-white" : "bg-muted"}`}>{c}</button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {radii.map((r) => (
            <button key={r} onClick={() => setRadius(r)} className={`cursor-pointer rounded px-2 py-0.5 capitalize ${radius === r ? "bg-blue-600 text-white" : "bg-muted"}`}>{r}</button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {sizes.map((s) => (
            <button key={s} onClick={() => setSize(s)} className={`cursor-pointer rounded px-2 py-0.5 capitalize ${size === s ? "bg-blue-600 text-white" : "bg-muted"}`}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { MtAvatarConfigurator }

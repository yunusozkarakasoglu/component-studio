/**
 * AvatarBasic
 * Usage örneği — resim + fallback (saf React, placeholder data-URI).
 * @id 157
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const src = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='62' font-size='38' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

function AvatarBasic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage alt="John Doe" src={src("#3b82f6", "JD")} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="Blue" src={src("#8b5cf6", "B")} />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
    </div>
  )
}

export { AvatarBasic }

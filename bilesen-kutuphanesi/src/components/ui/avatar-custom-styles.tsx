/**
 * AvatarCustomStyles
 * HeroUI Tailwind CSS örneği — yuvarlatılmış avatar (saf React).
 * @id 163
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const src = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='62' font-size='38' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

function AvatarCustomStyles() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage alt="John Doe" src={src("#3b82f6", "JD")} />
      <AvatarFallback className="rounded-lg">JD</AvatarFallback>
    </Avatar>
  )
}

export { AvatarCustomStyles }

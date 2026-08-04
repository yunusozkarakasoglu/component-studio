/**
 * AvatarSizes
 * HeroUI Sizes örneği — sm/md/lg (saf React).
 * @id 158
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const src = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='62' font-size='38' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage alt="Small" src={src("#3b82f6", "SM")} />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage alt="Medium" src={src("#8b5cf6", "MD")} />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage alt="Large" src={src("#ef4444", "LG")} />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}

export { AvatarSizes }

/**
 * AvatarGroup
 * HeroUI Avatar Group örneği — üst üste binen avatarlar + sayaç (saf React).
 * @id 162
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const src = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='62' font-size='34' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

const users = [
  { id: 1, bg: "#3b82f6", name: "John Doe" },
  { id: 2, bg: "#10b981", name: "Kate Wilson" },
  { id: 3, bg: "#8b5cf6", name: "Emily Chen" },
  { id: 4, bg: "#f97316", name: "Michael Brown" },
  { id: 5, bg: "#ef4444", name: "Olivia Davis" },
]

function AvatarGroup() {
  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("")
  return (
    <div className="flex flex-col gap-6">
      <div className="flex -space-x-2">
        {users.slice(0, 4).map((u) => (
          <Avatar key={u.id} className="ring-2 ring-background">
            <AvatarImage alt={u.name} src={src(u.bg, initials(u.name))} />
            <AvatarFallback>{initials(u.name)}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex -space-x-2">
        {users.slice(0, 3).map((u) => (
          <Avatar key={u.id} className="ring-2 ring-background">
            <AvatarImage alt={u.name} src={src(u.bg, initials(u.name))} />
            <AvatarFallback>{initials(u.name)}</AvatarFallback>
          </Avatar>
        ))}
        <Avatar className="ring-2 ring-background">
          <AvatarFallback className="text-xs">+{users.length - 3}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export { AvatarGroup }

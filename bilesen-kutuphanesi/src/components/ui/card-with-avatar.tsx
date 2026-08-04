/**
 * CardWithAvatar
 * HeroUI With Avatar örneği (saf React — Avatar'ı kullanır).
 * @id 192
 * @category Card
 */
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const img = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='60' font-size='30' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

function CardWithAvatar() {
  const cards = [
    { title: "Indie Hackers", members: "148 members", by: "Martha", bg: "#8b5cf6" },
    { title: "AI Builders", members: "362 members", by: "John", bg: "#3b82f6" },
  ]
  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((c) => (
        <Card key={c.title} className="w-[200px] gap-2">
          <img alt={c.title} src={img(c.bg, c.title[0])} className="aspect-square w-14 rounded-2xl object-cover" />
          <CardHeader>
            <CardTitle>{c.title}</CardTitle>
            <CardDescription>{c.members}</CardDescription>
          </CardHeader>
          <CardFooter className="gap-2">
            <Avatar className="size-5">
              <AvatarImage alt={c.by} src={img("#ef4444", c.by[0])} />
              <AvatarFallback className="text-xs">{c.by[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">By {c.by}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export { CardWithAvatar }

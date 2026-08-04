/**
 * CardWithImages
 * HeroUI With Images örneği — sadeleştirilmiş resimli kartlar (saf React, data-URI).
 * @id 193
 * @category Genel
 */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const img = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='${bg}'/><text x='200' y='160' font-size='60' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

function CardWithImages() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="relative w-[280px] min-h-[200px] overflow-hidden">
        <img alt="NEO Home Robot" src={img("#1e293b", "🤖")} className="absolute inset-0 h-full w-full object-cover" />
        <CardFooter className="relative z-10 mt-auto flex items-end justify-between text-white">
          <div>
            <div className="text-base font-medium">NEO</div>
            <div className="text-xs opacity-70">$499/m</div>
          </div>
          <Button className="bg-white text-black" size="sm" variant="tertiary">Get now</Button>
        </CardFooter>
      </Card>

      <Card className="w-[280px]" variant="transparent">
        <CardHeader>
          <CardTitle className="text-sm">Bridging the Future</CardTitle>
          <CardDescription className="text-xs">Today, 6:30 PM</CardDescription>
        </CardHeader>
        <CardContent><img alt="Robot" src={img("#f59e0b", "🤖")} className="aspect-video w-full rounded-xl object-cover" /></CardContent>
      </Card>

      <Card className="w-[280px]" variant="transparent">
        <CardHeader>
          <CardTitle className="text-sm">Avocado Hackathon</CardTitle>
          <CardDescription className="text-xs">Wed, 4:30 PM</CardDescription>
        </CardHeader>
        <CardContent><img alt="Avocado" src={img("#22c55e", "🥑")} className="aspect-video w-full rounded-xl object-cover" /></CardContent>
      </Card>
    </div>
  )
}

export { CardWithImages }

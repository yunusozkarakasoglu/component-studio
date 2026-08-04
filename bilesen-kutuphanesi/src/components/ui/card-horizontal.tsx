/**
 * CardHorizontal
 * HeroUI Horizontal Layout örneği — yatay kart (saf React, data-URI görsel).
 * @id 191
 * @category Kartlar
 */
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloseButton } from "@/components/ui/close-button"

const img = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><rect width='240' height='240' fill='#ef4444'/><text x='120' y='130' font-size='48' text-anchor='middle' fill='white' font-family='sans-serif'>🍒</text></svg>`)}`

function CardHorizontal() {
  return (
    <Card className="w-full max-w-md flex-row items-stretch">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <img alt="Cherries" src={img} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="relative flex flex-1 flex-col gap-3">
        <CardHeader className="gap-1">
          <CardTitle className="pe-8">Become an ACME Creator!</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur. Sed arcu donec.</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Only 10 spots</span>
            <span className="text-xs text-muted-foreground">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </CardFooter>
        <CloseButton className="absolute top-2 right-2" />
      </div>
    </Card>
  )
}

export { CardHorizontal }

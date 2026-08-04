/**
 * CardCustomStyles
 * HeroUI Tailwind CSS örneği — Pro kartı (saf React).
 * @id 195
 * @category Genel
 */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "@/components/ui/icons"

const PRO_FEATURES = [
  "Unlimited projects and collaborators",
  "Priority support with 24h response",
  "Advanced analytics and exports",
] as const

function CardCustomStyles() {
  return (
    <Card className="relative w-full max-w-md overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-background to-background shadow-lg">
      <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-blue-400/20 blur-3xl" />
      <CardHeader className="relative gap-3">
        <span className="w-fit rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">Recommended</span>
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Star className="size-5" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>Unlock team workflows and insights built for growing products.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <ul className="flex flex-col gap-2">
          {PRO_FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="size-4 shrink-0 text-blue-600" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative flex-col gap-2 sm:flex-row">
        <Button className="w-full">Upgrade now</Button>
        <Button className="w-full" variant="secondary">Compare plans</Button>
      </CardFooter>
    </Card>
  )
}

export { CardCustomStyles }

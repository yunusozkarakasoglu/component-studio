/**
 * CardVariants
 * Variants örneği — 4 semantik varyant (saf React).
 * @id 190
 * @category Kartlar
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function CardVariants() {
  const cards = [
    { variant: "transparent", title: "Transparent", desc: "Minimal prominence, transparent background" },
    { variant: "default", title: "Default", desc: "Standard card appearance" },
    { variant: "secondary", title: "Secondary", desc: "Medium prominence" },
    { variant: "tertiary", title: "Tertiary", desc: "Higher prominence for important content" },
  ] as const
  return (
    <div className="flex flex-col gap-4">
      {cards.map((c) => (
        <Card key={c.title} className="w-[320px]" variant={c.variant}>
          <CardHeader>
            <CardTitle>{c.title}</CardTitle>
            <CardDescription>{c.desc}</CardDescription>
          </CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">Kart içeriği</p></CardContent>
        </Card>
      ))}
    </div>
  )
}

export { CardVariants }

/**
 * CardDefault
 * HeroUI Usage örneği — temel kart (saf React).
 * @id 189
 * @category Card
 */
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleDollarSign } from "@/components/ui/icons"

function CardDefault() {
  return (
    <Card className="w-[400px]">
      <CircleDollarSign aria-label="Dolar ikonu" className="mb-2 size-6 text-blue-600" role="img" />
      <CardHeader>
        <CardTitle>Become an Acme Creator!</CardTitle>
        <CardDescription>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Creator Hub →</a>
      </CardFooter>
    </Card>
  )
}

export { CardDefault }

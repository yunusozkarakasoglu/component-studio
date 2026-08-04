/**
 * CardWithForm
 * HeroUI With Form örneği — giriş kartı (saf React, Label + input).
 * @id 194
 * @category Genel
 */
import { useState, type FormEvent } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

function CardWithForm() {
  const [msg, setMsg] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsg("Form submitted successfully!")
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-email">Email</Label>
          <input id="card-email" name="email" type="email" placeholder="email@example.com"
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-black/50" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-pass">Password</Label>
          <input id="card-pass" name="password" type="password" placeholder="••••••••"
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-black/50" />
        </div>
        <CardFooter className="mt-2 flex-col gap-2 px-0">
          <Button className="w-full" type="submit">Sign In</Button>
          <a href="#" className="text-center text-sm text-muted-foreground hover:text-foreground">Forgot password?</a>
        </CardFooter>
      </form>
      {msg && <p className="mt-2 text-sm text-emerald-600">{msg}</p>}
    </Card>
  )
}

export { CardWithForm }

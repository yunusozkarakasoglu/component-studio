/**
 * ButtonSocial
 * HeroUI Social Buttons örneği — Google/GitHub/Apple (saf React).
 * @iconify/react (CDN) YASAK — marka logoları kendi setimizden (icons-brand).
 * @id 102
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"
import { AppleIcon, GitHubIcon, GoogleIcon } from "@/components/ui/icons-brand"

function ButtonSocial() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Button className="w-full" variant="tertiary">
        <GoogleIcon className="size-5" />
        Sign in with Google
      </Button>
      <Button className="w-full" variant="tertiary">
        <GitHubIcon className="size-5" />
        Sign in with GitHub
      </Button>
      <Button className="w-full" variant="tertiary">
        <AppleIcon className="size-5" />
        Sign in with Apple
      </Button>
    </div>
  )
}

export { ButtonSocial }

/**
 * ButtonCustomVariants
 * HeroUI Adding custom variants örneği — tailwind-variants (YASAK bağımlılık)
 * yerine saf class birleştirme ile özel varyant (saf React).
 * @id 104
 * @category Butonlar & Aksiyonlar
 */
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const customVariant: Record<string, string> = {
  primary: "text-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
}

function ButtonCustomVariants({ className, radius, variant, ...props }: ButtonProps & { radius?: "full" | "lg" | "md" | "sm" }) {
  const radiusCls = { full: "rounded-full", lg: "rounded-lg", md: "rounded-md", sm: "rounded-sm" }[radius ?? "full"]
  const customCls = cn("font-semibold shadow-md", customVariant[variant ?? "primary"], radiusCls)
  return <Button variant={variant ?? "primary"} className={cn(customCls, className)} {...props} />
}

function ButtonCustomVariantsDemo() {
  return <ButtonCustomVariants>Custom Button</ButtonCustomVariants>
}

export { ButtonCustomVariants, ButtonCustomVariantsDemo }

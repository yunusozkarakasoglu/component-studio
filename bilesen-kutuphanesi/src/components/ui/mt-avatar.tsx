/**
 * MtAvatar + MtAvatarGroup
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Avatar — görsel, baş harf, gradient, varyant, grup.
 *   <MtAvatar src="…" alt="…" />
 *   <MtAvatar color="blue" radius="xl">MK</MtAvatar>
 * @id 1428
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { User } from "@/components/ui/icons"

const avatarSizes: Record<string, string> = { xs: "size-4 text-[10px]", sm: "size-6 text-xs", md: "size-8 text-sm", lg: "size-12 text-base", xl: "size-16 text-xl" }
const avatarRadii: Record<string, string> = { xs: "rounded", sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl", xl: "rounded-full" }

const filled: Record<string, string> = {
  blue: "bg-blue-600 text-white", cyan: "bg-cyan-600 text-white", teal: "bg-teal-600 text-white", green: "bg-green-600 text-white",
  lime: "bg-lime-600 text-white", yellow: "bg-yellow-500 text-white", orange: "bg-orange-600 text-white", red: "bg-red-600 text-white",
  pink: "bg-pink-600 text-white", grape: "bg-purple-600 text-white", violet: "bg-violet-600 text-white", indigo: "bg-indigo-600 text-white",
  gray: "bg-gray-600 text-white", dark: "bg-gray-800 text-white",
}
const light: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700", cyan: "bg-cyan-100 text-cyan-700", teal: "bg-teal-100 text-teal-700", green: "bg-green-100 text-green-700",
  lime: "bg-lime-100 text-lime-700", yellow: "bg-yellow-100 text-yellow-700", orange: "bg-orange-100 text-orange-700", red: "bg-red-100 text-red-700",
  pink: "bg-pink-100 text-pink-700", grape: "bg-purple-100 text-purple-700", violet: "bg-violet-100 text-violet-700", indigo: "bg-indigo-100 text-indigo-700",
  gray: "bg-gray-100 text-gray-700", dark: "bg-gray-800 text-gray-200",
}

interface MtAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  src?: string
  alt?: string
  color?: string
  radius?: "xs" | "sm" | "md" | "lg" | "xl"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "filled" | "light" | "outline" | "transparent"
  gradient?: { from: string; to: string; deg?: number }
  children?: ReactNode
}

function MtAvatar({ src, alt = "", color = "gray", radius = "sm", size = "md", variant = "filled", gradient, children, className, ...props }: MtAvatarProps) {
  const [error, setError] = useState(false)
  const gradStyle = gradient ? { backgroundImage: `linear-gradient(${gradient.deg ?? 90}deg, ${gradient.from}, ${gradient.to})` } : undefined
  const showImg = src && !error
  const content = showImg ? (
    <img src={src} alt={alt} className="size-full object-cover" onError={() => setError(true)} />
  ) : (
    children ?? <User className="size-1/2" />
  )

  return (
    <div
      data-slot="mt-avatar"
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden font-semibold",
        avatarSizes[size],
        avatarRadii[radius],
        !showImg && (gradient ? "text-white" : variant === "filled" ? filled[color] ?? filled.gray : variant === "light" ? light[color] ?? light.gray : variant === "outline" ? "border border-gray-300 text-gray-700" : "text-muted-foreground"),
        showImg && "bg-transparent",
        className
      )}
      style={gradStyle}
      {...props}
    >
      {content}
    </div>
  )
}

interface MtAvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: string
  children?: ReactNode
}

function MtAvatarGroup({ className, children, ...props }: MtAvatarGroupProps) {
  return (
    <div data-slot="mt-avatar-group" className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  )
}

export { MtAvatar, MtAvatarGroup }
export type { MtAvatarGroupProps, MtAvatarProps }

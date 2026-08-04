/**
 * Avatar
 * HeroUI avatar'dan uyarlanmış — saf React (bağımlılıksız).
 * Resim + fallback (metin/ikon) + size/color/variant.
 *   <Avatar size="lg" color="success">
 *     <AvatarImage src="..." alt="..." />
 *     <AvatarFallback>JD</AvatarFallback>
 *   </Avatar>
 * Resim yüklenene kadar / hata durumunda Fallback gösterilir; delayMs ile
 * flash önlenir. Dış kaynak kuralı: src URL'sini kullanıcı verir.
 * @id 156
 * @category Genel
 */
import { createContext, useContext, useEffect, useState, type ImgHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AvatarSize = "sm" | "md" | "lg"
type AvatarColor = "default" | "accent" | "success" | "warning" | "danger"

const avatarSizeClass: Record<AvatarSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
}

const fallbackColorClass: Record<AvatarColor, string> = {
  default: "bg-muted text-muted-foreground",
  accent: "bg-blue-100 text-blue-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
}

interface AvatarContextValue {
  imgState: "loading" | "loaded" | "error"
  setImgState: (s: "loading" | "loaded" | "error") => void
  color: AvatarColor
  variant: "default" | "soft"
}

const AvatarContext = createContext<AvatarContextValue | null>(null)

function useAvatar(): AvatarContextValue {
  const ctx = useContext(AvatarContext)
  if (!ctx) throw new Error("Avatar parçaları <Avatar> içinde kullanılmalı")
  return ctx
}

interface AvatarProps {
  size?: AvatarSize
  color?: AvatarColor
  /** soft = daha açık fallback arka planı */
  variant?: "default" | "soft"
  className?: string
  children?: ReactNode
}

function Avatar({ size = "md", color = "default", variant = "default", className, children }: AvatarProps) {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">("loading")
  return (
    <AvatarContext.Provider value={{ imgState, setImgState, color, variant }}>
      <span data-slot="avatar" data-size={size} data-color={color}
        className={cn("relative inline-flex shrink-0 overflow-hidden rounded-full align-middle", avatarSizeClass[size], className)}>
        {children}
      </span>
    </AvatarContext.Provider>
  )
}

function AvatarImage({ className, onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ctx = useAvatar()
  return (
    <img
      className={cn("aspect-square size-full object-cover", className)}
      onLoad={(e) => { ctx.setImgState("loaded"); onLoad?.(e) }}
      onError={(e) => { ctx.setImgState("error"); onError?.(e) }}
      {...props}
    />
  )
}

interface AvatarFallbackProps {
  /** Fallback görünmeden önceki bekleme (resim yükleme flash'ını önler) */
  delayMs?: number
  className?: string
  children?: ReactNode
}

function AvatarFallback({ delayMs = 0, className, children }: AvatarFallbackProps) {
  const ctx = useAvatar()
  const [visible, setVisible] = useState(delayMs === 0)
  useEffect(() => {
    if (delayMs > 0) {
      const t = setTimeout(() => setVisible(true), delayMs)
      return () => clearTimeout(t)
    }
  }, [delayMs])
  if (ctx.imgState === "loaded") return null
  if (!visible) return null
  return (
    <span
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center text-sm font-medium",
        ctx.variant === "soft" ? "bg-muted/50 text-foreground" : fallbackColorClass[ctx.color],
        className
      )}
    >
      {children}
    </span>
  )
}

export { Avatar, AvatarFallback, AvatarImage }
export type { AvatarColor, AvatarProps, AvatarSize }

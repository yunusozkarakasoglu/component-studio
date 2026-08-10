/**
 * MuiTypography
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yazı tipi — başlık/gövde/alt başlık gibi hiyerarşi.
 *   <MuiTypography variant="h1">Başlık</MuiTypography>
 * variant: h1-h6 · subtitle1/2 · body1/2 · caption · overline · button · inherit
 * component: HTML etiketi (varsayılan: variant'a göre)
 * gutterBottom: alt boşluk · noWrap: tek satır (taşma gizli) · align
 * @id 1850
 * @category Genel
 * @subcategory MuiTypography
 * @source mui
 */
import { type ReactNode, type ElementType } from "react"
import { cn } from "@/lib/utils"

interface MuiTypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline" | "button" | "inherit"
  component?: ElementType
  gutterBottom?: boolean
  noWrap?: boolean
  align?: "left" | "center" | "right" | "justify"
  className?: string
  children?: ReactNode
}

const VARIANT: Record<string, { tag: ElementType; cls: string }> = {
  h1: { tag: "h1", cls: "text-6xl font-light leading-tight tracking-tight" },
  h2: { tag: "h2", cls: "text-5xl font-light leading-tight tracking-tight" },
  h3: { tag: "h3", cls: "text-4xl font-normal leading-tight tracking-normal" },
  h4: { tag: "h4", cls: "text-3xl font-normal leading-tight tracking-normal" },
  h5: { tag: "h5", cls: "text-2xl font-normal leading-normal" },
  h6: { tag: "h6", cls: "text-xl font-medium leading-normal" },
  subtitle1: { tag: "h6", cls: "text-base font-medium leading-relaxed" },
  subtitle2: { tag: "h6", cls: "text-sm font-medium leading-normal" },
  body1: { tag: "p", cls: "text-base leading-relaxed" },
  body2: { tag: "p", cls: "text-sm leading-relaxed" },
  caption: { tag: "span", cls: "text-xs text-gray-500" },
  overline: { tag: "span", cls: "text-xs uppercase tracking-widest text-gray-500" },
  button: { tag: "span", cls: "text-sm font-medium uppercase tracking-wide" },
  inherit: { tag: "p", cls: "" },
}

const ALIGN: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
}

function MuiTypography({
  variant = "body1",
  component,
  gutterBottom = false,
  noWrap = false,
  align,
  className,
  children,
}: MuiTypographyProps) {
  const v = VARIANT[variant] ?? VARIANT.body1
  const Tag = component ?? v.tag
  return (
    <Tag
      className={cn(
        "text-gray-900",
        v.cls,
        align && ALIGN[align],
        gutterBottom && "mb-2",
        noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export { MuiTypography }
export type { MuiTypographyProps }

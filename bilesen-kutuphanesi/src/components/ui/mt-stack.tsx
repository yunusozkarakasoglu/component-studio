/**
 * MtStack
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Dikey flex düzenleyici — gap, align, justify.
 *   <MtStack gap="md">
 *     <Button>1</Button>
 *   </MtStack>
 * @id 1009
 * @category Genel
 * @subcategory MtStack
 * @source mantine
 */
import type { CSSProperties, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtStackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: string | number
  align?: CSSProperties["alignItems"]
  justify?: CSSProperties["justifyContent"]
}

function MtStack({ className, gap, align, justify, style, ...props }: MtStackProps) {
  return (
    <div
      data-slot="mt-stack"
      className={cn("flex flex-col", className)}
      style={{ gap, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  )
}

export { MtStack }
export type { MtStackProps }

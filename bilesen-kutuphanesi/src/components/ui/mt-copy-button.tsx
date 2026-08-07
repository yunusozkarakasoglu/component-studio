/**
 * MtCopyButton
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kopyalama butonu — children render prop, timeout.
 *   <MtCopyButton value="text">
 *     {({ copied, copy }) => <button onClick={copy}>{copied ? "Copied" : "Copy"}</button>}
 *   </MtCopyButton>
 * @id 1077
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCopyButton
 * @source mantine
 */
import { useState, type ReactNode } from "react"

interface MtCopyButtonProps {
  value?: string
  timeout?: number
  children?: (payload: { copied: boolean; copy: () => void }) => ReactNode
}

function MtCopyButton({ value = "", timeout = 1000, children }: MtCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(value).catch(() => {})
    setCopied(true)
    window.setTimeout(() => setCopied(false), timeout)
  }

  return (
    <span data-slot="mt-copy-button" className="contents">
      {children?.({ copied, copy })}
    </span>
  )
}

export { MtCopyButton }
export type { MtCopyButtonProps }

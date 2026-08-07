/**
 * MtFileButton
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Dosya seçici — gizli input + trigger children (render prop).
 *   <MtFileButton onChange={(files) => …} accept="image/png">
 *     {(props) => <Button {...props}>Upload</Button>}
 *   </MtFileButton>
 * multiple: çoklu dosya.
 * @id 1078
 * @category Butonlar & Aksiyonlar
 * @subcategory MtFileButton
 * @source mantine
 */
import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react"

interface MtFileButtonProps {
  onChange?: (files: File[]) => void
  accept?: string
  multiple?: boolean
  resetRef?: React.MutableRefObject<(() => void) | null>
  children?: (props: ButtonHTMLAttributes<HTMLButtonElement>) => ReactNode
}

function MtFileButton({ onChange, accept, multiple, resetRef, children }: MtFileButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    if (inputRef.current) inputRef.current.value = ""
  }

  if (resetRef) resetRef.current = reset

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          onChange?.(Array.from(e.target.files ?? []))
          reset()
        }}
      />
      {children?.({
        onClick: () => inputRef.current?.click(),
      })}
    </>
  )
}

export { MtFileButton }
export type { MtFileButtonProps }

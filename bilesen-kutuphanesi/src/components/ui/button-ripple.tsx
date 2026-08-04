/**
 * ButtonRipple
 * Ripple Effect örneği — m3-ripple (YASAK bağımlılık) yerine
 * saf CSS ripple: pointerdown'da dalga span'i eklenir, animasyon biter silinir.
 * @id 105
 * @category Butonlar & Aksiyonlar
 */
import { useState, type PointerEvent } from "react"
import { Button } from "@/components/ui/button"

interface RippleItem {
  id: number
  x: number
  y: number
  size: number
}

let rippleId = 0

function ButtonRipple() {
  const [ripples, setRipples] = useState<RippleItem[]>([])

  const addRipple = (e: PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const item: RippleItem = { id: ++rippleId, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size }
    setRipples((prev) => [...prev, item])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== item.id)), 600)
  }

  return (
    <Button
      variant="secondary"
      className="relative overflow-hidden"
      onPointerDown={(e) => addRipple(e)}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="ui-ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
      Click me
    </Button>
  )
}

export { ButtonRipple }

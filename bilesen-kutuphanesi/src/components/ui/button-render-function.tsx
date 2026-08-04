/**
 * ButtonRenderFunction
 * Render Function örneği — varsayılan DOM elementini özel render ile değiştirir (saf React).
 * @id 103
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"

function ButtonRenderFunction() {
  return (
    <Button
      render={(props, { isPressed }) => (
        <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} data-custom={isPressed ? "pressed" : "bar"}>
          Press me
        </button>
      )}
    >
      Press me
    </Button>
  )
}

export { ButtonRenderFunction }

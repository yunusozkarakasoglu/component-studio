/**
 * MtPasswordInputVisibilityToggleFocusable
 * Odaklanabilir toggle (saf React, Mantine kaynaklı).
 * @id 1147
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { useState } from "react"
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputVisibilityToggleFocusable() {
  const [visible, setVisible] = useState(false)

  return (
    <MtPasswordInput
      label="Password"
      placeholder="Toggle is focusable"
      visible={visible}
      onVisibilityChange={setVisible}
      className="max-w-sm"
    />
  )
}

export { MtPasswordInputVisibilityToggleFocusable }

/**
 * MtPasswordInputControlledVisibility
 * Kontrollü görünürlük (saf React, Mantine kaynaklı).
 * @id 1145
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { useState } from "react"
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputControlledVisibility() {
  const [visible, setVisible] = useState(false)

  return (
    <MtPasswordInput
      label="Password"
      placeholder="Controlled visibility"
      visible={visible}
      onVisibilityChange={setVisible}
      className="max-w-sm"
    />
  )
}

export { MtPasswordInputControlledVisibility }

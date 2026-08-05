/**
 * ToggleButtonControlled
 * Kontrollü örnek — durum göstergesi (saf React).
 * @id 423
 * @category Seçim
 * @subcategory ToggleButton
 */
import { useState } from "react"
import { Heart } from "@/components/ui/icons"
import { ToggleButton } from "@/components/ui/toggle-button"

function ToggleButtonControlled() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <ToggleButton isSelected={isSelected} onChange={setIsSelected}>
        {({ isSelected: selected }) => (
          <>
            <Heart className={`size-4 ${selected ? "fill-current" : ""}`} />
            {selected ? "Liked" : "Like"}
          </>
        )}
      </ToggleButton>
      <p className="text-sm text-muted-foreground">
        Status: <span className="font-medium text-foreground">{isSelected ? "Selected" : "Not selected"}</span>
      </p>
    </div>
  )
}

export { ToggleButtonControlled }

/**
 * ShadcnKbdInputGroup
 * InputGroup içinde tuş (saf React, shadcn kaynaklı).
 * InputGroup: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 648
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { Search } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"

function ShadcnKbdInputGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupSuffix>
          <Search className="size-4 text-muted-foreground" />
          <ShadcnKbd>⌘</ShadcnKbd>
          <ShadcnKbd>K</ShadcnKbd>
        </InputGroupSuffix>
      </InputGroup>
    </div>
  )
}

export { ShadcnKbdInputGroup }

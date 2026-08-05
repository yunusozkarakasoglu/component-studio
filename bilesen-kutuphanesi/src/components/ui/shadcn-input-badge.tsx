/**
 * ShadcnInputBadge
 * Label'da rozet (Beta) — basit span rozet (saf React, shadcn kaynaklı).
 * Badge bileşeni ayrı element olduğundan basit span kullanılır.
 * @id 628
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel, ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputBadge() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">Beta</span>
      </ShadcnFieldLabel>
      <ShadcnInput id="input-badge" type="url" placeholder="https://api.example.com/webhook" />
    </ShadcnField>
  )
}

export { ShadcnInputBadge }

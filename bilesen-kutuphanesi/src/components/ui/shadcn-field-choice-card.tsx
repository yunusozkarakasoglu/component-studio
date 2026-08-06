/**
 * ShadcnFieldChoiceCard
 * Seçilebilir kart — RadioGroup ile (saf React, shadcn kaynaklı).
 * RadioGroup: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 659
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import { Radio, RadioGroup } from "@/components/ui/radio-group"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLegend,
  ShadcnFieldSet,
  ShadcnFieldTitle,
} from "@/components/ui/shadcn-field"

function ShadcnFieldChoiceCard() {
  return (
    <ShadcnFieldGroup className="w-full max-w-xs">
      <ShadcnFieldSet>
        <ShadcnFieldLegend variant="label">Compute Environment</ShadcnFieldLegend>
        <ShadcnFieldDescription>
          Select the compute environment for your cluster.
        </ShadcnFieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <ShadcnField orientation="horizontal" className="rounded-md border border-border p-3">
            <div className="flex flex-1 flex-col gap-0.5">
              <ShadcnFieldTitle>Kubernetes</ShadcnFieldTitle>
              <ShadcnFieldDescription>
                Run GPU workloads on a K8s cluster.
              </ShadcnFieldDescription>
            </div>
            <Radio value="kubernetes" />
          </ShadcnField>
          <ShadcnField orientation="horizontal" className="rounded-md border border-border p-3">
            <div className="flex flex-1 flex-col gap-0.5">
              <ShadcnFieldTitle>Virtual Machine</ShadcnFieldTitle>
              <ShadcnFieldDescription>
                Access a cluster to run GPU workloads.
              </ShadcnFieldDescription>
            </div>
            <Radio value="vm" />
          </ShadcnField>
        </RadioGroup>
      </ShadcnFieldSet>
    </ShadcnFieldGroup>
  )
}

export { ShadcnFieldChoiceCard }

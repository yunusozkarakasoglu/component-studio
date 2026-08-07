/**
 * MtContainerDemo
 * Boyutlu kaplar (saf React, Mantine kaynaklı).
 * @id 1015
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import { MtContainer } from "@/components/ui/mt-container"

function MtContainerDemo() {
  const demoProps = { className: "rounded bg-blue-200 text-center text-sm" }
  return (
    <div className="flex flex-col gap-3">
      <MtContainer {...demoProps}>Default Container</MtContainer>
      <MtContainer size="xs" {...demoProps}>xs Container</MtContainer>
      <MtContainer size={480} className="rounded bg-blue-200 text-center text-sm">
        480px Container
      </MtContainer>
    </div>
  )
}

export { MtContainerDemo }

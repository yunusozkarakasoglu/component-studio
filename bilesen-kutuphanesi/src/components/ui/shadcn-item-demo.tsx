/**
 * ShadcnItemDemo
 * Temel örnek — öğe listesi (saf React, shadcn kaynaklı).
 * @id 997
 * @category Genel
 * @subcategory ShadcnItem
 * @source shadcn
 */
import { BadgeCheck, ChevronRight } from "@/components/ui/icons"
import {
  ShadcnItem,
  ShadcnItemActions,
  ShadcnItemContent,
  ShadcnItemDescription,
  ShadcnItemMedia,
  ShadcnItemTitle,
} from "@/components/ui/shadcn-item"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ShadcnItem variant="outline">
        <ShadcnItemContent>
          <ShadcnItemTitle>Basic Item</ShadcnItemTitle>
          <ShadcnItemDescription>
            A simple item with title and description.
          </ShadcnItemDescription>
        </ShadcnItemContent>
        <ShadcnItemActions>
          <ShadcnButton variant="outline" size="sm">Action</ShadcnButton>
        </ShadcnItemActions>
      </ShadcnItem>
      <ShadcnItem variant="outline">
        <ShadcnItemMedia>
          <BadgeCheck className="size-5" />
        </ShadcnItemMedia>
        <ShadcnItemContent>
          <ShadcnItemTitle>Your profile has been verified.</ShadcnItemTitle>
        </ShadcnItemContent>
        <ShadcnItemActions>
          <ChevronRight className="size-4" />
        </ShadcnItemActions>
      </ShadcnItem>
    </div>
  )
}

export { ShadcnItemDemo }

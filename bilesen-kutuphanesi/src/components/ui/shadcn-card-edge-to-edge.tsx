/**
 * ShadcnCardEdgeToEdge
 * Kenardan kenara içerik — hizmet şartları (saf React, shadcn kaynaklı).
 * @id 771
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnCard,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"

function ShadcnCardEdgeToEdge() {
  return (
    <ShadcnCard className="mx-auto w-full max-w-sm">
      <ShadcnCardHeader>
        <ShadcnCardTitle>Terms of Service</ShadcnCardTitle>
        <ShadcnCardDescription>
          Review the terms before accepting the agreement.
        </ShadcnCardDescription>
      </ShadcnCardHeader>
      <ShadcnCardContent className="mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <p>
            These terms govern your use of the workspace, including access to
            shared documents, project files, and collaboration tools.
          </p>
          <p>
            You are responsible for the content you upload and for ensuring that
            your team has the appropriate permissions to view or edit it.
          </p>
          <p>
            We may update features or limits as the service evolves. When those
            changes materially affect your workflow, we will notify your
            workspace administrators.
          </p>
          <p>
            By continuing, you agree to keep your account credentials secure and
            to follow your organization&apos;s acceptable use policies.
          </p>
        </div>
      </ShadcnCardContent>
      <ShadcnCardFooter className="justify-end gap-2">
        <ShadcnButton variant="outline">Decline</ShadcnButton>
        <ShadcnButton>Accept</ShadcnButton>
      </ShadcnCardFooter>
    </ShadcnCard>
  )
}

export { ShadcnCardEdgeToEdge }

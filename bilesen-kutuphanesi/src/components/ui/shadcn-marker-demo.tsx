/**
 * ShadcnMarkerDemo
 * Temel örnek — konuşma işaretleri (saf React, shadcn kaynaklı).
 * Spinner: kütüphanenin mevcut ShadcnSpinner'ı.
 * @id 994
 * @category Genel
 * @subcategory ShadcnMarker
 * @source shadcn
 */
import { GitBranch, Search } from "@/components/ui/icons"
import {
  ShadcnMarker,
  ShadcnMarkerContent,
  ShadcnMarkerIcon,
} from "@/components/ui/shadcn-marker"
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnMarkerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <ShadcnMarker>
        <ShadcnMarkerIcon><GitBranch className="size-3.5" /></ShadcnMarkerIcon>
        <ShadcnMarkerContent>Switched to a new branch</ShadcnMarkerContent>
      </ShadcnMarker>
      <ShadcnMarker role="status">
        <ShadcnMarkerIcon><ShadcnSpinner /></ShadcnMarkerIcon>
        <ShadcnMarkerContent>Thinking...</ShadcnMarkerContent>
      </ShadcnMarker>
      <ShadcnMarker variant="separator">
        <ShadcnMarkerContent>Conversation compacted</ShadcnMarkerContent>
      </ShadcnMarker>
      <ShadcnMarker>
        <ShadcnMarkerIcon><Search className="size-3.5" /></ShadcnMarkerIcon>
        <ShadcnMarkerContent>Explored 4 files</ShadcnMarkerContent>
      </ShadcnMarker>
    </div>
  )
}

export { ShadcnMarkerDemo }

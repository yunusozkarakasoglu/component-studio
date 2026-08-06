/**
 * ShadcnTabsRtl
 * RTL örneği — Arapça sekmeler (saf React, shadcn kaynaklı).
 * @id 840
 * @category Navigasyon
 * @subcategory ShadcnTabs
 * @source shadcn
 */
import {
  ShadcnTabs,
  ShadcnTabsContent,
  ShadcnTabsList,
  ShadcnTabsTrigger,
} from "@/components/ui/shadcn-tabs"

function ShadcnTabsRtl() {
  return (
    <ShadcnTabs defaultValue="overview" className="w-[400px]" dir="rtl">
      <ShadcnTabsList>
        <ShadcnTabsTrigger value="overview">نظرة عامة</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="analytics">التحليلات</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="reports">التقارير</ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="overview" className="text-sm">
        محتوى النظرة العامة.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="analytics" className="text-sm">
        محتوى التحليلات.
      </ShadcnTabsContent>
      <ShadcnTabsContent value="reports" className="text-sm">
        محتوى التقارير.
      </ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsRtl }

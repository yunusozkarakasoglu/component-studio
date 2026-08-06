/**
 * ShadcnTabsDemo
 * Temel örnek — proje sekmeleri (saf React, shadcn kaynaklı).
 * Card: kütüphanenin mevcut ShadcnCard'ı.
 * @id 835
 * @category Navigasyon
 * @subcategory ShadcnTabs
 * @source shadcn
 */
import {
  ShadcnCard,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"
import {
  ShadcnTabs,
  ShadcnTabsContent,
  ShadcnTabsList,
  ShadcnTabsTrigger,
} from "@/components/ui/shadcn-tabs"

function ShadcnTabsDemo() {
  return (
    <ShadcnTabs defaultValue="overview" className="w-[400px]">
      <ShadcnTabsList>
        <ShadcnTabsTrigger value="overview">Overview</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="analytics">Analytics</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="reports">Reports</ShadcnTabsTrigger>
        <ShadcnTabsTrigger value="settings">Settings</ShadcnTabsTrigger>
      </ShadcnTabsList>
      <ShadcnTabsContent value="overview">
        <ShadcnCard>
          <ShadcnCardHeader>
            <ShadcnCardTitle>Overview</ShadcnCardTitle>
            <ShadcnCardDescription>
              View your key metrics and recent project activity.
            </ShadcnCardDescription>
          </ShadcnCardHeader>
          <ShadcnCardContent className="text-sm text-muted-foreground">
            You have 12 active projects and 3 pending tasks.
          </ShadcnCardContent>
        </ShadcnCard>
      </ShadcnTabsContent>
      <ShadcnTabsContent value="analytics">
        <ShadcnCard>
          <ShadcnCardHeader>
            <ShadcnCardTitle>Analytics</ShadcnCardTitle>
            <ShadcnCardDescription>
              Track performance and user engagement metrics.
            </ShadcnCardDescription>
          </ShadcnCardHeader>
          <ShadcnCardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </ShadcnCardContent>
        </ShadcnCard>
      </ShadcnTabsContent>
      <ShadcnTabsContent value="reports">
        <ShadcnCard>
          <ShadcnCardHeader>
            <ShadcnCardTitle>Reports</ShadcnCardTitle>
            <ShadcnCardDescription>
              Access and download your project reports.
            </ShadcnCardDescription>
          </ShadcnCardHeader>
          <ShadcnCardContent className="text-sm text-muted-foreground">
            Last report generated on March 15, 2025.
          </ShadcnCardContent>
        </ShadcnCard>
      </ShadcnTabsContent>
      <ShadcnTabsContent value="settings">
        <ShadcnCard>
          <ShadcnCardHeader>
            <ShadcnCardTitle>Settings</ShadcnCardTitle>
            <ShadcnCardDescription>
              Manage your project settings and preferences.
            </ShadcnCardDescription>
          </ShadcnCardHeader>
          <ShadcnCardContent className="text-sm text-muted-foreground">
            Configure notifications, members, and integrations.
          </ShadcnCardContent>
        </ShadcnCard>
      </ShadcnTabsContent>
    </ShadcnTabs>
  )
}

export { ShadcnTabsDemo }

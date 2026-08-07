/**
 * MtTabsWithIcons
 * İkonlu sekmeler (saf React, Mantine kaynaklı).
 * @id 1397
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { Home, Settings, User } from "@/components/ui/icons"
import { MtTab, MtTabList, MtTabPanel, MtTabs } from "@/components/ui/mt-tabs"

function MtTabsWithIcons() {
  return (
    <MtTabs defaultValue="home" className="max-w-sm">
      <MtTabList>
        <MtTab value="home"><Home className="mr-1.5 size-4" />Home</MtTab>
        <MtTab value="profile"><User className="mr-1.5 size-4" />Profile</MtTab>
        <MtTab value="settings"><Settings className="mr-1.5 size-4" />Settings</MtTab>
      </MtTabList>
      <MtTabPanel value="home">Home panel</MtTabPanel>
      <MtTabPanel value="profile">Profile panel</MtTabPanel>
      <MtTabPanel value="settings">Settings panel</MtTabPanel>
    </MtTabs>
  )
}

export { MtTabsWithIcons }

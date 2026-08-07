/**
 * MtMenubarBasic
 * Basit menü çubuğu (saf React, Mantine kaynaklı).
 * @id 1110
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger } from "@/components/ui/mt-menubar"

function MtMenubarBasic() {
  return (
    <MtMenubar>
      <MtMenubarMenu id="home">
        <MtMenubarTrigger id="home">Home</MtMenubarTrigger>
        <MtMenubarDropdown id="home">
          <MtMenubarItem>Dashboard</MtMenubarItem>
          <MtMenubarItem>Activity</MtMenubarItem>
          <MtMenubarItem>Settings</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
      <MtMenubarMenu id="help">
        <MtMenubarTrigger id="help">Help</MtMenubarTrigger>
        <MtMenubarDropdown id="help">
          <MtMenubarItem>Documentation</MtMenubarItem>
          <MtMenubarItem>Support</MtMenubarItem>
          <MtMenubarItem>About</MtMenubarItem>
        </MtMenubarDropdown>
      </MtMenubarMenu>
    </MtMenubar>
  )
}

export { MtMenubarBasic }

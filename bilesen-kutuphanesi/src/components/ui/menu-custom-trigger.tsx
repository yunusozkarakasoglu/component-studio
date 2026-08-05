/**
 * MenuCustomTrigger
 * Özel trigger örneği — avatar menüsü (saf React).
 * @id 481
 * @category Overlay
 * @subcategory Menu
 */
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@/components/ui/menu"

function MenuCustomTrigger() {
  return (
    <Menu>
      <MenuTrigger>
        <Avatar size="md">
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </MenuTrigger>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="profile" textValue="Profile"><Label>Profile</Label></MenuItem>
          <MenuItem id="settings" textValue="Settings"><Label>Settings</Label></MenuItem>
          <MenuItem id="logout" textValue="Log out" variant="danger"><Label>Log out</Label></MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuCustomTrigger }

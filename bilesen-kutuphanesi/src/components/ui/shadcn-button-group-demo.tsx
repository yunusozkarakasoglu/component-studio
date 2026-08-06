/**
 * ShadcnButtonGroupDemo
 * Temel örnek — e-posta araçları + menü (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 756
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { ArrowLeft, Archive, CalendarPlus, Clock, ListFilter, MailCheck, Tag, Trash } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection, MenuSeparator } from "@/components/ui/menu"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupDemo() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeft className="size-4" />
        </ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline">Archive</ShadcnButton>
        <ShadcnButton variant="outline">Report</ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline">Snooze</ShadcnButton>
        <Menu>
          <ShadcnButton variant="outline" size="icon" aria-label="More Options">⋯</ShadcnButton>
          <MenuPopover>
            <MenuList>
              <MenuSection title="Actions">
                <MenuItem id="mark-read" textValue="Mark as Read">
                  <MailCheck className="size-4" /> Mark as Read
                </MenuItem>
                <MenuItem id="archive" textValue="Archive">
                  <Archive className="size-4" /> Archive
                </MenuItem>
              </MenuSection>
              <MenuSeparator />
              <MenuSection title="More">
                <MenuItem id="snooze" textValue="Snooze">
                  <Clock className="size-4" /> Snooze
                </MenuItem>
                <MenuItem id="calendar" textValue="Add to Calendar">
                  <CalendarPlus className="size-4" /> Add to Calendar
                </MenuItem>
                <MenuItem id="list" textValue="Add to List">
                  <ListFilter className="size-4" /> Add to List
                </MenuItem>
                <MenuItem id="label" textValue="Label As...">
                  <Tag className="size-4" /> Label As...
                </MenuItem>
              </MenuSection>
              <MenuSeparator />
              <MenuItem id="trash" textValue="Trash" variant="danger">
                <Trash className="size-4" /> Trash
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </ShadcnButtonGroup>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupDemo }

/**
 * MtAvatarGroupTooltip
 * Araç ipuçlu avatar grubu (saf React, Mantine kaynaklı).
 * @id 1461
 * @category Veri Gösterimi
 * @subcategory MtAvatar
 * @source mantine
 */
import { MtAvatar, MtAvatarGroup } from "@/components/ui/mt-avatar"
import { MtTooltip } from "@/components/ui/mt-tooltip"

const people = [
  { initials: "AY", color: "blue", name: "Alice Young" },
  { initials: "BK", color: "pink", name: "Bob Knight" },
  { initials: "CM", color: "teal", name: "Carol Miller" },
]

function MtAvatarGroupTooltip() {
  return (
    <MtAvatarGroup>
      {people.map((p) => (
        <MtTooltip key={p.name} label={p.name}>
          <MtAvatar color={p.color} radius="xl" className="-ml-2 first:ml-0 ring-2 ring-background">
            {p.initials}
          </MtAvatar>
        </MtTooltip>
      ))}
    </MtAvatarGroup>
  )
}

export { MtAvatarGroupTooltip }

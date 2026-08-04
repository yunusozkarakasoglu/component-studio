/**
 * ButtonWithIcons
 * With Icons örneği — ikonlu butonlar (saf React, kendi ikon setimiz).
 * GravityUI eşleştirmesi: Globe→Globe, Plus→Plus, Envelope→Mail, TrashBin→Trash2.
 * @id 096
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"
import { Globe, Mail, Plus, Trash2 } from "@/components/ui/icons"

function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Globe className="size-4" />
        Search
      </Button>
      <Button variant="secondary">
        <Plus className="size-4" />
        Add Member
      </Button>
      <Button variant="tertiary">
        <Mail className="size-4" />
        Email
      </Button>
      <Button variant="danger">
        <Trash2 className="size-4" />
        Delete
      </Button>
    </div>
  )
}

export { ButtonWithIcons }

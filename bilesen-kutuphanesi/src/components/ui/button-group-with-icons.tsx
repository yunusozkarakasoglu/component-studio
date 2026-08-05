/**
 * ButtonGroupWithIcons
 * İkonlu örnekler: fork/beğeni/yıldız/sabitle/hizalama (saf React).
 * @id 509
 * @category Butonlar & Aksiyonlar
 * @subcategory ButtonGroup
 */
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, ChevronDown, ChevronLeft, ChevronRight, GitFork, Image as ImageIcon, Pin, Star, ThumbsDown, ThumbsUp, Video } from "@/components/ui/icons"

function ButtonGroupWithIcons() {
  return (
    <div className="flex flex-col items-start gap-6">
      <ButtonGroup variant="tertiary">
        <Button>
          <GitFork className="size-4" />
          Fork
        </Button>
        <Button isIconOnly aria-label="More">
          <ButtonGroupSeparator />
          <ChevronDown className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button>
          <ThumbsUp className="size-4" />
          <span className="text-xs font-semibold">2.4K</span>
        </Button>
        <Button isIconOnly aria-label="Dislike">
          <ButtonGroupSeparator />
          <ThumbsDown className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button>
          <Star className="size-4" />
          Star
        </Button>
        <Button>
          <ButtonGroupSeparator />
          <Pin className="size-4" />
          Pinned
        </Button>
        <Button isIconOnly aria-label="More">
          <ButtonGroupSeparator />
          <ChevronDown className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button>
          <ChevronLeft className="size-4" />
          Previous
        </Button>
        <Button>
          <ButtonGroupSeparator />
          Next
          <ChevronRight className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button>
          <ImageIcon className="size-4" />
          Photos
        </Button>
        <Button>
          <ButtonGroupSeparator />
          <Video className="size-4" />
          Videos
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button isIconOnly aria-label="Align left">
          <AlignLeft className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Align center">
          <ButtonGroupSeparator />
          <AlignCenter className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Align right">
          <ButtonGroupSeparator />
          <AlignRight className="size-4" />
        </Button>
        <Button isIconOnly aria-label="Align justify">
          <ButtonGroupSeparator />
          <AlignJustify className="size-4" />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export { ButtonGroupWithIcons }

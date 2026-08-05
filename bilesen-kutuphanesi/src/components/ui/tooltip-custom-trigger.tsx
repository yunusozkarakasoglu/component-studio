/**
 * TooltipCustomTrigger
 * Özel trigger örnekleri: Avatar + Chip + ikon (saf React).
 * Avatar görselleri CDN yerine fallback baş harflerle gösterilir.
 * @id 458
 * @category Overlay
 * @subcategory Tooltip
 */
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Chip, ChipLabel } from "@/components/ui/chip"
import { CheckCircle, HelpCircle } from "@/components/ui/icons"
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function TooltipCustomTrigger() {
  return (
    <div className="flex items-center gap-6">
      <Tooltip delay={0}>
        <TooltipTrigger aria-label="User avatar">
          <Avatar size="sm">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent showArrow>
          <TooltipArrow />
          <div className="flex flex-col gap-0 py-1">
            <p className="font-semibold">Jane Doe</p>
            <p className="text-xs text-muted-foreground">jane@example.com</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip delay={0}>
        <TooltipTrigger aria-label="Status chip">
          <Chip color="success">
            <CheckCircle className="size-3" />
            <ChipLabel>Active</ChipLabel>
          </Chip>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <p>Jane is currently online</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delay={0}>
        <TooltipTrigger aria-label="Info icon">
          <div className="rounded-full bg-blue-100 p-2 text-blue-700">
            <HelpCircle className="size-4" />
          </div>
        </TooltipTrigger>
        <TooltipContent showArrow>
          <TooltipArrow />
          <div className="max-w-xs px-1 py-1.5">
            <p className="mb-1 font-semibold">Help Information</p>
            <p className="text-sm text-muted-foreground">
              This is a helpful tooltip with more detailed information about this feature.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { TooltipCustomTrigger }

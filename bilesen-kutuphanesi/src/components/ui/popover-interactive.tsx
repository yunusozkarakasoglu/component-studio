/**
 * PopoverInteractive
 * Etkileşimli örnek — profil kartı + Follow butonu (saf React).
 * Avatar görselleri CDN yerine fallback baş harflerle gösterilir.
 * @id 450
 * @category Overlay
 * @subcategory Popover
 */
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDialog, PopoverHeading, PopoverTrigger } from "@/components/ui/popover"

function PopoverInteractive() {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="flex items-center gap-6">
      <Popover>
        <PopoverTrigger aria-label="User profile">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-foreground">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">@sarahj</p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[320px]">
          <PopoverDialog>
            <PopoverHeading>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar size="md">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">@sarahj</p>
                  </div>
                </div>
                <Button
                  className="rounded-full"
                  size="sm"
                  variant={isFollowing ? "tertiary" : "primary"}
                  onPress={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            </PopoverHeading>
            <p className="mt-3 text-sm text-muted-foreground">
              Product designer and creative director. Building beautiful experiences that matter.
            </p>
            <div className="mt-3 flex gap-4">
              <div>
                <span className="font-semibold text-foreground">892</span>
                <span className="ms-1 text-sm text-muted-foreground">Following</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">12.5K</span>
                <span className="ms-1 text-sm text-muted-foreground">Followers</span>
              </div>
            </div>
          </PopoverDialog>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { PopoverInteractive }

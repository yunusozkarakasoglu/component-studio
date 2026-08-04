/**
 * AvatarFallback
 * HeroUI Fallback Content örneği — metin/ikon/delay/özel (saf React).
 * @id 161
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/components/ui/icons"

function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback><User className="size-5" /></AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage alt="Delayed" src="https://invalid-url.example/image.jpg" />
        <AvatarFallback delayMs={600}>NA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-500 text-white">GB</AvatarFallback>
      </Avatar>
    </div>
  )
}

export { AvatarFallbackDemo }

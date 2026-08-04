/**
 * AvatarVariants
 * HeroUI Variants örneği — letter/letter-soft/icon/icon-soft/img × 5 renk (saf React).
 * @id 160
 * @category Genel
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/components/ui/icons"

const colors = ["accent", "default", "success", "warning", "danger"] as const

const src = (bg: string, t: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='48' y='62' font-size='38' text-anchor='middle' fill='white' font-family='sans-serif'>${t}</text></svg>`)}`

const imgSrcs = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"]

function AvatarVariants() {
  const variants = [
    { label: "letter", content: "AG", type: "letter" },
    { label: "letter soft", content: "AG", type: "letter", soft: true },
    { label: "icon", content: <User className="size-5" />, type: "icon" },
    { label: "icon soft", content: <User className="size-5" />, type: "icon", soft: true },
    { label: "img", content: "", type: "img" },
  ] as const
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-24 shrink-0" />
        {colors.map((c) => <div key={c} className="w-20 shrink-0 text-center text-xs capitalize text-muted-foreground">{c}</div>)}
      </div>
      {variants.map((v) => (
        <div key={v.label} className="flex items-center gap-3">
          <div className="w-24 shrink-0 text-sm text-muted-foreground">{v.label}</div>
          {colors.map((c) => (
            <div key={c} className="flex w-20 justify-center">
              <Avatar color={c} variant={(v as any).soft ? "soft" : "default"}>
                {v.type === "img" ? (
                  <>
                    <AvatarImage alt={`Avatar ${c}`} src={src(imgSrcs[colors.indexOf(c)], c[0].toUpperCase())} />
                    <AvatarFallback>{c[0].toUpperCase()}</AvatarFallback>
                  </>
                ) : (
                  <AvatarFallback>{v.content}</AvatarFallback>
                )}
              </Avatar>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export { AvatarVariants }

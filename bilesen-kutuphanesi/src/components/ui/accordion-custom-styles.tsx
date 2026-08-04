/**
 * AccordionCustomStyles
 * Tailwind CSS örneği — CDN resimleri (iconUrl) YASAK; ikonlar kendi setimizden.
 * Eşleştirme: bell-small→Bell, compass-small→Compass, mint-collective→Sparkles.
 * @id 115
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { Bell, Compass, Sparkles } from "@/components/ui/icons"

const items = [
  { icon: <Bell />, title: "Set Up Notifications", subtitle: "Receive account activity updates", content: "Stay informed about your account activity with real-time notifications." },
  { icon: <Compass />, title: "Set up Browser Extension", subtitle: "Connect your browser to your account", content: "Enhance your browsing experience by installing our official browser extension." },
  { icon: <Sparkles />, title: "Mint Collectible", subtitle: "Create your first collectible", content: "Begin your journey into the world of digital collectibles." },
]

function AccordionCustomStyles() {
  return (
    <AccordionSimple className="w-full max-w-md rounded-2xl bg-muted/10" variant="surface" hideSeparator defaultValue={["0"]}>
      {items.map((item, i) => (
        <AccordionSimpleItem
          key={i}
          itemKey={String(i)}
          title={
            <span className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">{item.icon}</span>
              <span className="flex flex-col">
                <span className="font-medium leading-5">{item.title}</span>
                <span className="text-xs leading-6 text-muted-foreground/80">{item.subtitle}</span>
              </span>
            </span>
          }
        >
          {item.content}
        </AccordionSimpleItem>
      ))}
    </AccordionSimple>
  )
}

export { AccordionCustomStyles }

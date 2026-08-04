/**
 * Bileşen önizleme örnekleri (samples)
 * Saf React kütüphanesi — yalnızca bağımlılıksız bileşenlerin canlı önizlemeleri.
 * Katalog stüdyosu bu haritayı kullanır.
 */
import type { ReactNode } from "react"
import * as U from "@/components/ui"
import { Box, CreditCard, Earth, Receipt, RotateCcw, ShoppingBag } from "@/components/ui/icons"

export const SAMPLES: Record<string, ReactNode> = {
  "088": (
    <U.DateRangePickerSimple />
  ),
  "089": (
    <div className="h-64 w-full overflow-hidden rounded-md border border-black/25">
      <U.MillerColumns data={U.SAMPLE_DATA} />
    </div>
  ),
  "090": (
    <U.AccordionSimple className="w-full max-w-sm" variant="surface" divider={false} defaultValue={["a"]}>
      <U.AccordionSimpleItem itemKey="a" title="How do I place an order?" icon={<ShoppingBag />}>
        Browse our products, add items to your cart, and proceed to checkout.
      </U.AccordionSimpleItem>
      <U.AccordionSimpleItem itemKey="b" title="Can I modify or cancel my order?" icon={<Receipt />}>
        Yes, you can modify or cancel your order before it&apos;s shipped.
      </U.AccordionSimpleItem>
      <U.AccordionSimpleItem itemKey="c" title="What payment methods do you accept?" icon={<CreditCard />}>
        We accept all major credit cards, including Visa, Mastercard, and American Express.
      </U.AccordionSimpleItem>
      <U.AccordionSimpleItem itemKey="d" title="How much does shipping cost?" icon={<Box />}>
        Shipping costs vary based on your location and the size of your order.
      </U.AccordionSimpleItem>
      <U.AccordionSimpleItem itemKey="e" title="Do you ship internationally?" icon={<Earth />}>
        Yes, we ship to most countries. Please check our shipping rates and policies.
      </U.AccordionSimpleItem>
      <U.AccordionSimpleItem itemKey="f" title="How do I request a refund?" icon={<RotateCcw />}>
        If you&apos;re not satisfied, you can request a refund within 30 days of purchase.
      </U.AccordionSimpleItem>
    </U.AccordionSimple>
  ),
  "091": (
    <U.BreadcrumbsSimple className="rounded-lg bg-muted/50 px-3 py-2">
      <U.BreadcrumbsSimpleItem href="#">Home</U.BreadcrumbsSimpleItem>
      <U.BreadcrumbsSimpleItem href="#">Products</U.BreadcrumbsSimpleItem>
      <U.BreadcrumbsSimpleItem>Laptop</U.BreadcrumbsSimpleItem>
    </U.BreadcrumbsSimple>
  ),
  "092": <U.Button onPress={() => console.log("pressed")}>Click me</U.Button>,
  "093": <U.Spinner size="md" />,
  "094": <U.ButtonVariants />,
  "095": <U.ButtonSizes />,
  "096": <U.ButtonWithIcons />,
  "097": <U.ButtonIconOnly />,
  "098": <U.ButtonLoading />,
  "099": <U.ButtonLoadingState />,
  "100": <U.ButtonFullWidth />,
  "101": <U.ButtonDisabled />,
  "102": <U.ButtonSocial />,
  "103": <U.ButtonRenderFunction />,
  "104": <U.ButtonCustomVariantsDemo />,
  "105": <U.ButtonRipple />,
  "106": <U.AccordionBasic />,
  "107": <U.AccordionSurface />,
  "108": <U.AccordionWithoutSeparator />,
  "109": <U.AccordionMultiple />,
  "110": <U.AccordionDisabled />,
  "111": <U.AccordionControlled />,
  "112": <U.AccordionCustomIndicator />,
  "113": <U.AccordionRenderFunction />,
  "114": <U.AccordionFaq />,
  "115": <U.AccordionCustomStyles />,
  "116": <U.Alert />,
  "117": <U.CloseButton />,
  "118": <U.AlertBasic />,
  "119": <U.AlertCustomStyles />,
  "120": <U.AlertDialogDefault />,
  "121": <U.AlertDialogDefault />,
  "122": <U.AlertDialogStatuses />,
  "123": <U.AlertDialogPlacements />,
  "124": <U.AlertDialogSizes />,
  "125": <U.AlertDialogControlled />,
  "126": <U.AlertDialogCustomIcon />,
  "127": <U.AlertDialogCustomTrigger />,
  "128": <U.AlertDialogBackdropVariants />,
  "129": <U.AlertDialogCustomBackdrop />,
  "130": <U.AlertDialogDismissBehavior />,
  "131": <U.AlertDialogCloseMethods />,
  "132": <U.AlertDialogCustomAnimations />,
  "133": <U.AlertDialogCustomPortal />,
  "134": <U.AlertDialogCustomStyles />,
  "135": <U.Autocomplete items={[{id:"a",name:"Option A"},{id:"b",name:"Option B"}]} placeholder="Select one" selectionMode="single" />,
  "136": <U.Label>Etiket örneği</U.Label>,
  "137": <U.SearchField placeholder="Ara..." />,
  "138": <U.ListBox className="w-52"><U.ListBoxItem>Elma</U.ListBoxItem><U.ListBoxItem>Armut</U.ListBoxItem></U.ListBox>,
  "139": <U.TagGroup><U.Tag id="a">React</U.Tag><U.Tag id="b">Tailwind</U.Tag></U.TagGroup>,
  "140": <U.EmptyState title="Sonuç yok" description="Aramanızla eşleşen kayıt bulunamadı." />,
  "141": <U.Description>Açıklama metni</U.Description>,
  "142": <U.AutocompleteDefault />,
  "143": <U.AutocompleteVariants />,
  "144": <U.AutocompleteFullWidth />,
  "145": <U.AutocompleteWithDescription />,
  "146": <U.AutocompleteRequired />,
  "147": <U.AutocompleteDisabled />,
  "148": <U.AutocompleteWithDisabledOptions />,
  "149": <U.AutocompleteAllowsEmptyCollection />,
  "150": <U.AutocompleteMultipleSelect />,
  "151": <U.AutocompleteControlled />,
  "152": <U.AutocompleteControlledMultiple />,
  "153": <U.AutocompleteControlledOpenState />,
  "154": <U.AutocompleteAsynchronousFiltering />,
  "155": <U.AutocompleteOnSurface />,
  "156": <U.Avatar><U.AvatarFallback>JD</U.AvatarFallback></U.Avatar>,
  "157": <U.AvatarBasic />,
  "158": <U.AvatarSizes />,
  "159": <U.AvatarColors />,
  "160": <U.AvatarVariants />,
  "161": <U.AvatarFallbackDemo />,
  "162": <U.AvatarGroup />,
  "163": <U.AvatarCustomStyles />,
  "164": <U.Breadcrumbs><U.BreadcrumbsItem href="#">Home</U.BreadcrumbsItem><U.BreadcrumbsItem>Laptop</U.BreadcrumbsItem></U.Breadcrumbs>,
  "165": <U.BreadcrumbsBasic />,
  "166": <U.BreadcrumbsLevel2 />,
  "167": <U.BreadcrumbsLevel3 />,
  "168": <U.BreadcrumbsDisabled />,
  "169": <U.BreadcrumbsCustomSeparator />,
  "170": <U.BreadcrumbsRenderFunction />,
  "171": <U.BreadcrumbsCustomStyles />,
  "172": <U.Calendar />,
  "173": <U.CalendarBasic />,
  "174": <U.CalendarDisabled />,
  "175": <U.CalendarReadOnly />,
  "176": <U.CalendarDefaultValue />,
  "177": <U.CalendarControlled />,
  "178": <U.CalendarMinMaxDates />,
  "179": <U.CalendarUnavailableDates />,
  "180": <U.CalendarWeeksInMonth />,
  "181": <U.CalendarMultipleSelection />,
  "182": <U.CalendarFocusedValue />,
  "183": <U.CalendarWithIndicators />,
  "184": <U.CalendarCustomIcons />,
  "185": <U.CalendarMultipleMonths />,
  "186": <U.CalendarBooking />,
  "187": <U.CalendarCustomStyles />,
}

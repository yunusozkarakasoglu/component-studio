/**
 * ShadcnCardRtl
 * RTL örneği — Arapça giriş kartı (saf React, shadcn kaynaklı).
 * @id 773
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnCard,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnCardRtl() {
  return (
    <ShadcnCard className="w-full max-w-sm" dir="rtl">
      <ShadcnCardHeader>
        <ShadcnCardTitle>تسجيل الدخول</ShadcnCardTitle>
        <ShadcnCardDescription>أدخل بريدك الإلكتروني أدناه لتسجيل الدخول</ShadcnCardDescription>
      </ShadcnCardHeader>
      <ShadcnCardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <ShadcnLabel htmlFor="shadcn-card-rtl-email">البريد الإلكتروني</ShadcnLabel>
              <ShadcnInput id="shadcn-card-rtl-email" type="email" placeholder="m@example.com" dir="rtl" />
            </div>
            <div className="grid gap-2">
              <ShadcnLabel htmlFor="shadcn-card-rtl-password">كلمة المرور</ShadcnLabel>
              <ShadcnInput id="shadcn-card-rtl-password" type="password" dir="rtl" />
            </div>
          </div>
        </form>
      </ShadcnCardContent>
      <ShadcnCardFooter className="flex-col gap-2">
        <ShadcnButton type="submit" className="w-full">دخول</ShadcnButton>
        <ShadcnButton variant="outline" className="w-full">تسجيل الدخول عبر جوجل</ShadcnButton>
      </ShadcnCardFooter>
    </ShadcnCard>
  )
}

export { ShadcnCardRtl }

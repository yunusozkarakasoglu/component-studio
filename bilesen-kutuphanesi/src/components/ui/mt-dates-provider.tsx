/**
 * MtDatesProvider
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tarih locale sağlayıcısı — çocuk takvimlerin hafta başlangıcı ve dilini ayarlar.
 *   <MtDatesProvider locale="tr" firstDayOfWeek={1}>
 *     <MtCalendar />
 *   </MtDatesProvider>
 * @id 1587
 * @category Takvim
 * @subcategory MtDatesProvider
 * @source mantine
 */
import { createContext, useContext, type ReactNode } from "react"

interface MtDatesContextValue {
  locale: string
  firstDayOfWeek: number
}

const MtDatesContext = createContext<MtDatesContextValue>({ locale: "tr", firstDayOfWeek: 1 })

interface MtDatesProviderProps {
  locale?: string
  firstDayOfWeek?: number
  children?: ReactNode
}

function MtDatesProvider({ locale = "tr", firstDayOfWeek = 1, children }: MtDatesProviderProps) {
  return <MtDatesContext.Provider value={{ locale, firstDayOfWeek }}>{children}</MtDatesContext.Provider>
}

function useMtDates() {
  return useContext(MtDatesContext)
}

export { MtDatesProvider, useMtDates }
export type { MtDatesContextValue, MtDatesProviderProps }

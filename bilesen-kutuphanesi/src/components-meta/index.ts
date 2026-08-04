/**
 * Bileşen meta kayıtları — KOŞULLU köklü bileşenler için.
 * ------------------------------------------------------------------
 * Normal (tek köklü) bileşenler için meta GEREKMEZ — varsayılan hedef
 * branches[0]'dır. Yalnızca `cond ? <A/> : <B/>` gibi koşullu köklü
 * bileşenlerde, style'ın hangi dala gömüleceğini netleştirmek için
 * meta eklenir.
 *
 * Koşullu bileşen eklerken (bkz. component-kutuphane.md → "Koşullu köklü
 * bileşen ekleme checklist'i"):
 *   1. findRootInfo ile dalları doğrula (tests/findRootInfo.test.ts)
 *   2. Aşağıya kayıt ekle: id + preferredTarget (hangisi asıl hedefse)
 */
export interface ComponentMeta {
  id: string
  /** Style hedefi: findRootInfo().branches[] içindeki dal indeksi */
  preferredTarget: number
  /** Neden bu dal? (opsiyonel, açıklama notu) */
  note?: string
}

export const COMPONENT_META: Record<string, ComponentMeta> = {
  // ÖRNEK — koşullu köklü bileşen eklendiğinde:
  // "088": { id: "088", preferredTarget: 1, note: "Ana içerik ikinci dalda (<Button>)" },
}

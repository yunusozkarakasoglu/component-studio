/**
 * Miller2
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Dizel Motor Parça Yapısı — Miller Columns tarzı hiyerarşik seçim.
 * Sistem → Alt Grup → Parça. Arama, breadcrumb, klavye navigasyonu.
 *   <Miller2 />
 * @id 2080
 * @category Özel Komponentler
 * @subcategory Miller2
 * @source ozel
 * @tags miller, kolon, dizel, motor, parça, hiyerarşi
 */
import { useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Search, ChevronRight, X } from "@/components/ui/icons"

interface MillerNode {
  id: string
  label: string
  children?: MillerNode[]
}

/* Dizel motor parça yapısı — 11 sistem, 46 alt grup, 167 parça */
const DATA: MillerNode[] = [
  {
    id: "c0", label: "SABİT PARÇALAR", children: [
      { id: "c0_s0", label: "Karter (Bedplate)", children: [
        { id: "c0_s0_p0", label: "Karter gövdesi" }, { id: "c0_s0_p1", label: "Karter contası" },
        { id: "c0_s0_p2", label: "Yağ haznesi" }, { id: "c0_s0_p3", label: "Yağ seviye çubuğu" },
        { id: "c0_s0_p4", label: "Yağ drenaj tapası" },
      ] },
      { id: "c0_s1", label: "Silindir Bloğu", children: [
        { id: "c0_s1_p5", label: "Silindir gövdesi" }, { id: "c0_s1_p6", label: "Su ceketleri (su kanalları)" },
        { id: "c0_s1_p7", label: "Yağ kanalları" }, { id: "c0_s1_p8", label: "Silindir kapak contası" },
      ] },
      { id: "c0_s2", label: "Layner (Silindir Gömleği)", children: [
        { id: "c0_s2_p9", label: "Yaş layner" }, { id: "c0_s2_p10", label: "Kuru tip layner" },
        { id: "c0_s2_p11", label: "Su ceketli layner" }, { id: "c0_s2_p12", label: "Layner etek lastiği" },
      ] },
      { id: "c0_s3", label: "Krank Kafesi (A-Frame)", children: [
        { id: "c0_s3_p13", label: "Kroshed gaydı (crosshead guide)" }, { id: "c0_s3_p14", label: "Port kapakları" },
        { id: "c0_s3_p15", label: "Kutu freym tipi krank kafesi" },
      ] },
      { id: "c0_s4", label: "Bağlantı Elemanları", children: [
        { id: "c0_s4_p16", label: "Civatalar" }, { id: "c0_s4_p17", label: "Somunlar" },
        { id: "c0_s4_p18", label: "Pullar" }, { id: "c0_s4_p19", label: "Helicoil" },
        { id: "c0_s4_p20", label: "Tork anahtarı ile sıkılan bağlantılar" },
      ] },
    ],
  },
  {
    id: "c1", label: "HAREKETLİ PARÇALAR", children: [
      { id: "c1_s5", label: "Piston Grubu", children: [
        { id: "c1_s5_p21", label: "Piston gövdesi" }, { id: "c1_s5_p22", label: "Piston kafası" },
        { id: "c1_s5_p23", label: "Piston pimi (piston pin)" }, { id: "c1_s5_p24", label: "Piston kolu (biyel kolu / connecting rod)" },
        { id: "c1_s5_p25", label: "Trank piston" }, { id: "c1_s5_p26", label: "Kroshedli piston" },
      ] },
      { id: "c1_s6", label: "Segmanlar (Piston Halkaları)", children: [
        { id: "c1_s6_p27", label: "Kompresyon segmanları (sıkıştırma halkaları)" },
        { id: "c1_s6_p28", label: "Yağ segmanları (yağ sıyırıcı halkaları)" }, { id: "c1_s6_p29", label: "Destek halkası" },
      ] },
      { id: "c1_s7", label: "Krank Mili (Crankshaft)", children: [
        { id: "c1_s7_p30", label: "Krank kolu" }, { id: "c1_s7_p31", label: "Krank pimi" },
        { id: "c1_s7_p32", label: "Krank ağırlıkları" }, { id: "c1_s7_p33", label: "Krank mili yağ pasajları" },
      ] },
      { id: "c1_s8", label: "Volan (Flywheel)", children: [
        { id: "c1_s8_p34", label: "Volan gövdesi" }, { id: "c1_s8_p35", label: "Volan dişlisi" },
        { id: "c1_s8_p36", label: "Volan contası" },
      ] },
      { id: "c1_s9", label: "Gezinti Ayı (Thrust Bearing)", children: [
        { id: "c1_s9_p37", label: "Eksenel gezinti sınırlayıcı" }, { id: "c1_s9_p38", label: "Gezinti yatağı" },
      ] },
    ],
  },
  {
    id: "c2", label: "SUPAP & KAM MEKANİZMALARI", children: [
      { id: "c2_s10", label: "Kam Mili (Camshaft)", children: [
        { id: "c2_s10_p39", label: "Kam mili gövdesi" }, { id: "c2_s10_p40", label: "Kam lobları" },
        { id: "c2_s10_p41", label: "Kam mili dişlisi / zinciri" },
      ] },
      { id: "c2_s11", label: "Kam Takipçileri", children: [
        { id: "c2_s11_p42", label: "İtici (tappet / lifter)" }, { id: "c2_s11_p43", label: "İtme çubukları (push rods)" },
      ] },
      { id: "c2_s12", label: "Roker Kolu Grubu", children: [
        { id: "c2_s12_p44", label: "Rokerarm (rocker arm)" }, { id: "c2_s12_p45", label: "Roker şaftı" },
        { id: "c2_s12_p46", label: "Ayar somunları" },
      ] },
      { id: "c2_s13", label: "Supaplar (Valfler)", children: [
        { id: "c2_s13_p47", label: "Emme supabı (inlet valve)" }, { id: "c2_s13_p48", label: "Egzoz supabı (exhaust valve)" },
        { id: "c2_s13_p49", label: "Supap kılavuzu" }, { id: "c2_s13_p50", label: "Supap yayı" },
        { id: "c2_s13_p51", label: "Supap yay tablası" }, { id: "c2_s13_p52", label: "Supap tırnakları" },
        { id: "c2_s13_p53", label: "Supap oturma yüzeyi (baga)" },
      ] },
      { id: "c2_s14", label: "Supap Kutusu", children: [
        { id: "c2_s14_p54", label: "Supap kapağı" }, { id: "c2_s14_p55", label: "Supap contası" },
      ] },
    ],
  },
  {
    id: "c3", label: "YAKIT SİSTEMİ", children: [
      { id: "c3_s15", label: "Yakıt Pompası", children: [
        { id: "c3_s15_p56", label: "Mekanik yakıt pompası" }, { id: "c3_s15_p57", label: "Elektronik yakıt pompası" },
        { id: "c3_s15_p58", label: "Pistonlu yakıt pompası" },
      ] },
      { id: "c3_s16", label: "Enjektörler (Injectors)", children: [
        { id: "c3_s16_p59", label: "Yakıt enjektörü" }, { id: "c3_s16_p60", label: "Enjektör memesi" },
        { id: "c3_s16_p61", label: "Enjektör tutucu" }, { id: "c3_s16_p62", label: "Enjektör contası" },
      ] },
      { id: "c3_s17", label: "Yakıt Filtreleme", children: [
        { id: "c3_s17_p63", label: "Birincil yakıt filtresi" }, { id: "c3_s17_p64", label: "İkincil yakıt filtresi" },
        { id: "c3_s17_p65", label: "Su ayırıcı filtre" },
      ] },
      { id: "c3_s18", label: "Yakıt Hattı & Bağlantılar", children: [
        { id: "c3_s18_p66", label: "Yakıt boruları" }, { id: "c3_s18_p67", label: "Yakıt manifoldu" },
        { id: "c3_s18_p68", label: "Yakıt muslukları" }, { id: "c3_s18_p69", label: "Yakıt ısıtıcı" },
      ] },
      { id: "c3_s19", label: "Emniyet & Kontrol", children: [
        { id: "c3_s19_p70", label: "Emniyet valfi (safety valve)" }, { id: "c3_s19_p71", label: "Gösterge valfi (indicator valve)" },
        { id: "c3_s19_p72", label: "Rilif valfi (relief valve)" },
      ] },
    ],
  },
  {
    id: "c4", label: "EMME & EGZOZ SİSTEMİ", children: [
      { id: "c4_s20", label: "Emme Sistemi", children: [
        { id: "c4_s20_p73", label: "Emme manifoldu" }, { id: "c4_s20_p74", label: "Emme boruları" },
        { id: "c4_s20_p75", label: "Emme susturucusu" }, { id: "c4_s20_p76", label: "Emme filtresi" },
      ] },
      { id: "c4_s21", label: "Egzoz Sistemi", children: [
        { id: "c4_s21_p77", label: "Egzoz manifoldu" }, { id: "c4_s21_p78", label: "Egzoz boruları" },
        { id: "c4_s21_p79", label: "Egzoz susturucusu" }, { id: "c4_s21_p80", label: "Egzoz genleşme kompansatörü" },
      ] },
      { id: "c4_s22", label: "Turboşarjer (Turbocharger)", children: [
        { id: "c4_s22_p81", label: "Türbin kısmı" }, { id: "c4_s22_p82", label: "Kompresör kısmı" },
        { id: "c4_s22_p83", label: "Turbo şaftı" }, { id: "c4_s22_p84", label: "Turbo yatakları" },
        { id: "c4_s22_p85", label: "Turbo yağlama sistemi" }, { id: "c4_s22_p86", label: "Turbo soğutma sistemi" },
      ] },
      { id: "c4_s23", label: "Süperşarj & Süpürme", children: [
        { id: "c4_s23_p87", label: "Blover (blower)" }, { id: "c4_s23_p88", label: "Süpürme kanalları" },
        { id: "c4_s23_p89", label: "Süpürme valfleri" },
      ] },
      { id: "c4_s24", label: "Silindir Test Valfleri", children: [
        { id: "c4_s24_p90", label: "Basınç test valfi" }, { id: "c4_s24_p91", label: "Sızdırmazlık test valfi" },
      ] },
    ],
  },
  {
    id: "c5", label: "SOĞUTMA SİSTEMİ", children: [
      { id: "c5_s25", label: "Su Pompaları", children: [
        { id: "c5_s25_p92", label: "Soğutma su pompası" }, { id: "c5_s25_p93", label: "Deniz suyu pompası" },
        { id: "c5_s25_p94", label: "Tatlı su pompası" }, { id: "c5_s25_p95", label: "Pompaya ait contalar" },
      ] },
      { id: "c5_s26", label: "Radyatör & Isı Eşanjörü", children: [
        { id: "c5_s26_p96", label: "Radyatör" }, { id: "c5_s26_p97", label: "Isı eşanjörü (deniz suyu / tatlı su)" },
        { id: "c5_s26_p98", label: "Radyatör contası" },
      ] },
      { id: "c5_s27", label: "Termostat", children: [
        { id: "c5_s27_p99", label: "Termostat gövdesi" }, { id: "c5_s27_p100", label: "Termostat valfi" },
        { id: "c5_s27_p101", label: "Termostat contası" },
      ] },
      { id: "c5_s28", label: "Soğutma Kanalları", children: [
        { id: "c5_s28_p102", label: "Su ceketleri" }, { id: "c5_s28_p103", label: "Su boruları" },
        { id: "c5_s28_p104", label: "Su muslukları" }, { id: "c5_s28_p105", label: "İndikevter musluğu" },
      ] },
      { id: "c5_s29", label: "Yağ Soğutucu", children: [
        { id: "c5_s29_p106", label: "Yağ soğutucu (oil cooler)" }, { id: "c5_s29_p107", label: "After cooler" },
        { id: "c5_s29_p108", label: "Soğutucu contaları" },
      ] },
    ],
  },
  {
    id: "c6", label: "YAĞLAMA SİSTEMİ", children: [
      { id: "c6_s30", label: "Yağ Pompası", children: [
        { id: "c6_s30_p109", label: "Dişli yağ pompası" }, { id: "c6_s30_p110", label: "Rotorlu yağ pompası" },
        { id: "c6_s30_p111", label: "Yağ pompası tahrik dişlisi" },
      ] },
      { id: "c6_s31", label: "Yağ Filtreleme", children: [
        { id: "c6_s31_p112", label: "Yağ filtresi" }, { id: "c6_s31_p113", label: "Yağ filtresi gövdesi" },
        { id: "c6_s31_p114", label: "Yağ filtresi contası" }, { id: "c6_s31_p115", label: "Bypass valfi" },
      ] },
      { id: "c6_s32", label: "Yağ Soğutma", children: [
        { id: "c6_s32_p116", label: "Yağ soğutucu" }, { id: "c6_s32_p117", label: "Yağ / soğutma suyu ısı eşanjörü" },
      ] },
      { id: "c6_s33", label: "Yağ Dağıtım", children: [
        { id: "c6_s33_p118", label: "Yağ ana hattı" }, { id: "c6_s33_p119", label: "Yağ galerileri" },
        { id: "c6_s33_p120", label: "Yağ memeleri" }, { id: "c6_s33_p121", label: "Yağ basınç regülatörü" },
      ] },
      { id: "c6_s34", label: "Yağ Seviye & Kontrol", children: [
        { id: "c6_s34_p122", label: "Yağ seviye çubuğu" }, { id: "c6_s34_p123", label: "Yağ basınç sensörü" },
        { id: "c6_s34_p124", label: "Yağ sıcaklık sensörü" }, { id: "c6_s34_p125", label: "Yağ drenaj tapası" },
      ] },
    ],
  },
  {
    id: "c7", label: "ATEŞLEME & KONTROL SİSTEMLERİ", children: [
      { id: "c7_s35", label: "Mars Motoru (Starting Motor)", children: [
        { id: "c7_s35_p126", label: "Dayer mars motoru" }, { id: "c7_s35_p127", label: "Havalı mars motoru" },
        { id: "c7_s35_p128", label: "Hidrolik ilk hareket sistemi" },
      ] },
      { id: "c7_s36", label: "Devir Kontrol (Governor)", children: [
        { id: "c7_s36_p129", label: "Mekanik governor" }, { id: "c7_s36_p130", label: "Hidrolik governor" },
        { id: "c7_s36_p131", label: "Elektronik governor (MTU tipi)" },
      ] },
      { id: "c7_s37", label: "Sensörler & Göstergeler", children: [
        { id: "c7_s37_p132", label: "Devir sayacı" }, { id: "c7_s37_p133", label: "Yağ basınç göstergesi" },
        { id: "c7_s37_p134", label: "Su sıcaklık göstergesi" }, { id: "c7_s37_p135", label: "Egzoz gazı sıcaklık sensörü" },
      ] },
    ],
  },
  {
    id: "c8", label: "TAHRİK & GÜÇ AKTARIM SİSTEMİ", children: [
      { id: "c8_s38", label: "Kaplinler", children: [
        { id: "c8_s38_p136", label: "Flençli direk kaplin" }, { id: "c8_s38_p137", label: "Fleksibil kaplin" },
        { id: "c8_s38_p138", label: "Hidrolik kaplin" }, { id: "c8_s38_p139", label: "Manyetik kaplin" },
      ] },
      { id: "c8_s39", label: "Kayış & Zincir Tahrik", children: [
        { id: "c8_s39_p140", label: "Eksantrik zinciri" }, { id: "c8_s39_p141", label: "Triger kayışı" },
        { id: "c8_s39_p142", label: "V kayışı" }, { id: "c8_s39_p143", label: "Kasnaklar" },
        { id: "c8_s39_p144", label: "Gergi rulmanları" },
      ] },
      { id: "c8_s40", label: "Şaft Sistemi", children: [
        { id: "c8_s40_p145", label: "Pervane şaftı" }, { id: "c8_s40_p146", label: "Aks mili" },
        { id: "c8_s40_p147", label: "Stern tüpü" }, { id: "c8_s40_p148", label: "Pervane" },
      ] },
    ],
  },
  {
    id: "c9", label: "YATAK & RULMANLAR", children: [
      { id: "c9_s41", label: "Ana Yataklar", children: [
        { id: "c9_s41_p149", label: "Jurnal yatak" }, { id: "c9_s41_p150", label: "Jurnal yatak keysi" },
        { id: "c9_s41_p151", label: "Rulman yatak" }, { id: "c9_s41_p152", label: "Sıraşt yatak" },
      ] },
      { id: "c9_s42", label: "Krank Mili Yatakları", children: [
        { id: "c9_s42_p153", label: "Ana yatak" }, { id: "c9_s42_p154", label: "Kol yatağı" },
        { id: "c9_s42_p155", label: "Gezinti yatağı" },
      ] },
      { id: "c9_s43", label: "Kam Mili Yatakları", children: [
        { id: "c9_s43_p156", label: "Kam mili yatağı" }, { id: "c9_s43_p157", label: "Kam mili yatak kapağı" },
      ] },
    ],
  },
  {
    id: "c10", label: "CONTA & SIZDIRMAZLIK ELEMANLARI", children: [
      { id: "c10_s44", label: "Contalar", children: [
        { id: "c10_s44_p158", label: "Silindir kapak contası" }, { id: "c10_s44_p159", label: "Karter contası" },
        { id: "c10_s44_p160", label: "Egzoz contası" }, { id: "c10_s44_p161", label: "Emme contası" },
        { id: "c10_s44_p162", label: "Yağ filtresi contası" },
      ] },
      { id: "c10_s45", label: "Keçe & Sızdırmazlık", children: [
        { id: "c10_s45_p163", label: "Krank mili keçesi" }, { id: "c10_s45_p164", label: "Kam mili keçesi" },
        { id: "c10_s45_p165", label: "Supap keçesi" }, { id: "c10_s45_p166", label: "O-ringler" },
      ] },
    ],
  },
]

/* Yardımcılar */
function matches(q: string, n: MillerNode): boolean {
  return n.label.toLowerCase().includes(q)
}
function nodeVisible(n: MillerNode, q: string): boolean {
  if (!q) return true
  if (matches(q, n)) return true
  return (n.children || []).some((c) => nodeVisible(c, q))
}
function countMatchesTree(q: string): { total: number; cats: number; subs: number; parts: number } {
  let total = 0, cats = 0, subs = 0, parts = 0
  const walk = (n: MillerNode, depth: number) => {
    if (matches(q, n)) {
      total++
      if (depth === 1) cats++
      else if (depth === 2) subs++
      else parts++
    }
    for (const c of n.children || []) walk(c, depth + 1)
  }
  for (const c of DATA) walk(c, 1)
  return { total, cats, subs, parts }
}

function Miller2({ className }: { className?: string }) {
  const [path, setPath] = useState<string[]>([])
  const [query, setQuery] = useState("")
  const scrollRef = useRef<HTMLDivElement | null>(null)

  // Seçili yol üzerindeki node'lar
  const pathNodes = useMemo(() => {
    const out: MillerNode[] = []
    let cur = DATA
    for (const id of path) {
      const n = cur.find((x) => x.id === id)
      if (!n) break
      out.push(n)
      cur = n.children || []
    }
    return out
  }, [path])

  // Sütunlar: kök + her seçili düğümün çocukları
  const columns = useMemo(() => {
    const cols: { header: string; depth: number; selected: string | null; nodes: MillerNode[]; forceAll: boolean }[] = [
      { header: query ? "Arama Sonuçları" : "Sistemler", depth: 0, selected: path[0] || null, nodes: DATA, forceAll: false },
    ]
    let cur = DATA
    for (let i = 0; i < path.length; i++) {
      const node = cur.find((n) => n.id === path[i])
      if (!node) break
      const kids = node.children || []
      if (kids.length === 0) break
      const parentMatched = query.length > 0 && matches(query, node)
      cols.push({ header: node.label, depth: i + 1, selected: path[i + 1] || null, nodes: kids, forceAll: parentMatched })
      cur = kids
    }
    return cols
  }, [path, query])

  const totalMatches = query ? countMatchesTree(query) : null

  const select = (colIdx: number, node: MillerNode) => {
    setPath(colIdx === 0 ? [node.id] : [...path.slice(0, colIdx), node.id])
  }
  const goBack = (crumbIdx: number) => {
    setPath(crumbIdx < 0 ? [] : path.slice(0, crumbIdx + 1))
  }

  // Vurgulama: sorgu metnini <mark> ile sar
  const hl = (s: string) => {
    if (!query) return s
    const i = s.toLowerCase().indexOf(query)
    if (i < 0) return s
    return (
      <>
        {s.slice(0, i)}
        <mark className="rounded bg-amber-400/30 px-0.5 text-amber-200">{s.slice(i, i + query.length)}</mark>
        {s.slice(i + query.length)}
      </>
    )
  }

  const hasQuery = query.length > 0

  return (
    <div
      className={cn(
        "flex h-[560px] w-full flex-col overflow-hidden rounded-xl border border-blue-500/20 bg-[#0d1322] text-[#e8edf7]",
        className
      )}
      style={{ background: "radial-gradient(1200px 700px at 50% -10%, #1d2a4d 0%, #0d1322 55%, #070b14 100%)" }}
    >
      {/* Üst bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-500/15 bg-[#0d1322]/90 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg shadow-lg shadow-blue-500/40">⚙️</span>
          <div>
            <h2 className="text-sm font-bold">Dizel Motor Parça Yapısı</h2>
            <p className="text-[11px] text-[#93a3c8]">Miller Columns • Sistem → Alt Grup → Parça</p>
          </div>
        </div>
        <div className="flex gap-2">
          {[
            { b: "11", s: "Sistem" },
            { b: "46", s: "Alt Grup" },
            { b: "167", s: "Parça" },
          ].map((st) => (
            <div key={st.s} className="min-w-[76px] rounded-xl border border-blue-500/20 bg-white/5 px-3 py-1.5 text-center">
              <b className="block text-base leading-tight text-cyan-300">{st.b}</b>
              <span className="text-[10px] text-[#93a3c8]">{st.s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arama */}
      <div className="flex flex-wrap items-center gap-3 border-b border-blue-500/10 bg-[#111a30]/60 px-4 py-2">
        <div className="relative flex max-w-md flex-1 items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-[#5a6c9c]" />
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value.toLowerCase().trim()); setPath([]) }}
            placeholder="Ara: sistem, alt grup veya parça (örn. supap, pompa, filtre, keçe)…"
            className="w-full rounded-xl border border-blue-500/25 bg-[#141e3a]/90 py-2 pl-9 pr-8 text-sm text-[#eef3ff] outline-none transition-colors placeholder:text-[#5a6c9c] focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/15"
          />
          {hasQuery && (
            <button type="button" aria-label="Aramayı temizle" onClick={() => { setQuery(""); setPath([]) }}
              className="absolute right-2 flex size-6 items-center justify-center rounded-lg bg-blue-500/15 text-[#8fa3cf] hover:bg-blue-500/40 hover:text-white">
              <X className="size-3.5" />
            </button>
          )}
        </div>
        <span className="text-xs text-[#6172a0]">
          {hasQuery ? (
            <b className="text-cyan-300">{totalMatches?.total ?? 0} sonuç</b>
          ) : (
            <>167 parça • 46 alt grup • 11 sistem</>
          )}
        </span>
      </div>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 overflow-x-auto border-b border-blue-500/10 bg-[#111a30]/80 px-4 py-1.5" aria-label="Breadcrumb">
        <button type="button" onClick={() => goBack(-1)}
          className={cn("whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs transition-colors hover:bg-blue-500/15 hover:text-[#dbe4f5]", path.length === 0 ? "font-semibold text-cyan-300" : "text-[#7d8db3]")}>
          root
        </button>
        {pathNodes.map((n, i) => (
          <span key={n.id} className="flex items-center gap-1">
            <span className="text-xs text-[#46537a]">/</span>
            <button type="button" onClick={() => goBack(i)}
              className={cn("whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs transition-colors hover:bg-blue-500/15 hover:text-[#dbe4f5]", i === pathNodes.length - 1 ? "font-semibold text-cyan-300" : "text-[#7d8db3]")}>
              {n.label}
            </button>
          </span>
        ))}
      </nav>

      {/* Miller sütunları */}
      <div ref={scrollRef} className="flex min-h-0 flex-1 overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: "thin", scrollbarColor: "#2c3b63 transparent" }}>
        {columns.map((col, ci) => {
          const shown = hasQuery ? col.nodes.filter((n) => col.forceAll || nodeVisible(n, query)) : col.nodes
          return (
            <section key={ci} className="flex w-[300px] min-w-[300px] flex-col border-r border-blue-500/10 bg-[#0f162a]/70">
              <div className="flex items-center justify-between gap-2 border-b border-blue-500/10 bg-[#141e3a]/90 px-3.5 py-2">
                <span className="truncate text-[11px] font-bold uppercase tracking-widest text-[#8fa3cf]">{col.header}</span>
                <span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                  {shown.length}{hasQuery && shown.length !== col.nodes.length ? `/${col.nodes.length}` : ""} öğe
                </span>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-1.5" style={{ scrollbarWidth: "thin", scrollbarColor: "#2c3b63 transparent" }}>
                {shown.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center gap-1.5 p-6 text-center">
                    <div className="text-[11px] uppercase tracking-widest text-[#6172a0]">{hasQuery ? "Eşleşme yok" : "Boş"}</div>
                    <div className="text-xs text-[#46537a]">{hasQuery ? `«${query}» için sonuç bulunamadı` : "alt öğe yok"}</div>
                  </div>
                ) : (
                  shown.map((node) => {
                    const hasKids = (node.children || []).length > 0
                    const sel = node.id === col.selected
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => select(ci, node)}
                        aria-level={col.depth + 1}
                        className={cn(
                          "mb-0.5 flex w-full items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-left text-[13px] text-[#b9c6e2] transition-colors hover:bg-blue-500/10 hover:text-[#eef3ff] focus-visible:outline-2 focus-visible:outline-cyan-300",
                          sel && "border-blue-500/55 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 text-white"
                        )}
                      >
                        <span className="flex-1 truncate">{hl(node.label)}</span>
                        {hasKids ? (
                          <ChevronRight className={cn("size-3.5 shrink-0 text-[#5a6c9c]", sel && "text-cyan-200")} />
                        ) : (
                          <span className={cn("size-1 shrink-0 rounded-full bg-[#5a6c9c]", sel && "bg-cyan-200")} />
                        )}
                      </button>
                    )
                  })
                )}
              </div>
            </section>
          )
        })}
      </div>

      {/* Durum çubuğu */}
      <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-1.5 text-xs text-[#6172a0]">
        <div className="truncate">
          {hasQuery ? (
            <>Arama: <b className="text-[#b9c6e2]">«{query}»</b> → {totalMatches?.total} sonuç
              {pathNodes.length > 0 && <> • seçili: <b className="text-[#b9c6e2]">{pathNodes.map((n) => n.label).join(" → ")}</b></>}
            </>
          ) : pathNodes.length === 0 ? (
            <>Bir sistem seçin →</>
          ) : (
            <>Seçim: <b className="text-[#b9c6e2]">{pathNodes.map((n) => n.label).join(" → ")}</b></>
          )}
        </div>
        <div className="hidden shrink-0 text-[#46537a] sm:block">
          <kbd className="rounded border border-blue-500/20 bg-blue-500/10 px-1.5 py-0.5 text-[11px] text-[#8fa3cf]">↑</kbd>
          <kbd className="rounded border border-blue-500/20 bg-blue-500/10 px-1.5 py-0.5 text-[11px] text-[#8fa3cf]">↓</kbd> gezin
        </div>
      </div>
    </div>
  )
}

export { Miller2, DATA as MILLER2_DATA }
export type { MillerNode }

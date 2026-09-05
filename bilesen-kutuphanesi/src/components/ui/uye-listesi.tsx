/**
 * UyeListesi
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Yazdıkça gelen checkbox'lı üye listesi: arama kutusuna yaz → üyeleri filtrele
 * (ad + e-posta), checkbox ile seç, altta "Yeni ekle: <arama>" önerisi.
 * Başlangıç verisi MEMBERS sabiti — kendi verinle değiştirilebilir.
 *   <UyeListesi />
 * @id 2085
 * @category Özel Komponentler
 * @subcategory UyeListesi
 * @source ozel
 * @tags üye, liste, arama, checkbox, seçim, avatar, ekip, kişi
 */
import { useState } from "react"
import { Search, UserPlus } from "@/components/ui/icons"

/* ---- Sabit veri (kendi verinle değiştir) ---- */
interface Uye {
  name: string
  email: string
  initials: string
  color: string
}

const MEMBERS: Uye[] = [
  { name: "Ahmet Yılmaz", email: "ahmet@ornek.com", initials: "AY", color: "#8a4b1f" },
  { name: "Ayşe Demir", email: "ayse@ornek.com", initials: "AD", color: "#8e3fc9" },
  { name: "Derya Deniz", email: "yunusozkarakasoglu@gmail.com", initials: "DD", color: "#1f8a4c" },
  { name: "Mehmet Kaya", email: "mehmet@ornek.com", initials: "MK", color: "#1f8a8a" },
]

function UyeListesi() {
  const [query, setQuery] = useState("")
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const filtered = !query.trim()
    ? []
    : MEMBERS.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.email.toLowerCase().includes(query.toLowerCase()),
      )

  const toggleCheck = (email: string) =>
    setChecked((prev) => ({ ...prev, [email]: !prev[email] }))

  return (
    <div className="w-[340px] font-sans">
      <div className="text-xs font-semibold text-slate-600 mb-2">ÜYE LİSTESİ</div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <div className="p-2.5 border-b border-gray-100 relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ara..."
            className="w-full border border-blue-500 rounded-md pl-8 pr-2.5 py-2 text-sm outline-none"
          />
        </div>

        <ul className="max-h-64 overflow-y-auto py-1">
          {query.trim() &&
            filtered.map((m) => (
              <li
                key={m.email}
                onClick={() => toggleCheck(m.email)}
                className="flex items-center gap-2.5 px-3.5 py-2 cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={!!checked[m.email]}
                  onChange={() => toggleCheck(m.email)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 accent-blue-500"
                />
                <div
                  className="rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                  style={{ backgroundColor: m.color, width: 30, height: 30 }}
                >
                  {m.initials}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm text-gray-800">{m.name}</span>
                  <span className="text-xs text-gray-400">{m.email}</span>
                </div>
              </li>
            ))}
        </ul>

        {query.trim() && (
          <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-blue-500 text-sm cursor-pointer">
              <UserPlus className="size-3.5" />
              <span>Yeni ekle: &quot;{query}&quot;</span>
            </div>
            <span className="text-xs text-gray-400">Ekip listesine eklenir</span>
          </div>
        )}
      </div>
    </div>
  )
}

export { UyeListesi }

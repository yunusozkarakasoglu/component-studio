/**
 * ShadcnTypographyTable
 * Tablo (saf React, shadcn kaynaklı).
 * @id 978
 * @category Genel
 * @subcategory ShadcnTypography
 * @source shadcn
 */
import { ShadcnTypographyH4 } from "@/components/ui/shadcn-typography"

function ShadcnTypographyTable() {
  return (
    <div>
      <ShadcnTypographyH4>Joke Tax Rates</ShadcnTypographyH4>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold">Pun</th>
              <th className="border px-4 py-2 text-left font-bold">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">1st level of puns</td>
              <td className="border px-4 py-2">5 gold coins</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">2nd level of jokes</td>
              <td className="border px-4 py-2">10 gold coins</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">3rd level of one-liners</td>
              <td className="border px-4 py-2">20 gold coins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { ShadcnTypographyTable }

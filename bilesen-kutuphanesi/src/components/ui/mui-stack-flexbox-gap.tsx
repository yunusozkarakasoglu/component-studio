/**
 * MuiStackFlexboxGap
 * @id 1887
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStackFlexboxGap() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      {["Bir", "İki", "Üç", "Dört", "Beş", "Altı"].map((s) => (
        <div key={s} className="rounded bg-indigo-200 px-4 py-2 text-sm text-indigo-900">{s}</div>
      ))}
    </MuiStack>
  )
}

export { MuiStackFlexboxGap }

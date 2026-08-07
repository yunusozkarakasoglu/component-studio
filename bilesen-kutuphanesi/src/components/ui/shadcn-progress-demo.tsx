/**
 * ShadcnProgressDemo
 * Temel örnek — zamanlayıcıyla ilerleme (saf React, shadcn kaynaklı).
 * @id 939
 * @category Yükleme & İlerleme
 * @subcategory ShadcnProgress
 * @source shadcn
 */
import { useEffect, useState } from "react"
import { ShadcnProgress } from "@/components/ui/shadcn-progress"

function ShadcnProgressDemo() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <ShadcnProgress value={progress} className="w-[60%]" />
}

export { ShadcnProgressDemo }

/**
 * ButtonLoadingState
 * Loading State örneği — kontrollü yükleme durumu (saf React).
 * @id 099
 * @category Butonlar & Aksiyonlar
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Paperclip } from "@/components/ui/icons"

function ButtonLoadingState() {
  const [isLoading, setLoading] = useState(false)
  const handlePress = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <Button isPending={isLoading} onPress={handlePress}>
      {({ isPending }) => (
        <>
          {isPending ? <Spinner size="sm" /> : <Paperclip className="size-4" />}
          {isPending ? "Uploading..." : "Upload File"}
        </>
      )}
    </Button>
  )
}

export { ButtonLoadingState }

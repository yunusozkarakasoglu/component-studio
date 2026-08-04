/**
 * ButtonLoading
 * Loading örneği — isPending + Spinner + render prop (saf React).
 * @id 098
 * @category Butonlar & Aksiyonlar
 */
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

function ButtonLoading() {
  return (
    <Button isPending>
      {({ isPending }) => (
        <>
          {isPending ? <Spinner size="sm" /> : null}
          Uploading...
        </>
      )}
    </Button>
  )
}

export { ButtonLoading }

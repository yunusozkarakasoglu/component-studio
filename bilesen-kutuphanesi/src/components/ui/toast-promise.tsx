/**
 * ToastPromise
 * Promise örneği — yükleme/success/error otomatik (saf React).
 * @id 466
 * @category Overlay
 * @subcategory Toast
 */
import { Button } from "@/components/ui/button"
import { ToastProvider, toast } from "@/components/ui/toast"

const uploadFile = (): Promise<{ filename: string; size: number }> =>
  new Promise((resolve) => setTimeout(() => resolve({ filename: "document.pdf", size: 1024 }), 2000))

const createEvent = (): Promise<never> =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Network error. Please try again.")), 2000))

const fetchUser = (): Promise<{ name: string; email: string }> =>
  new Promise((resolve) => setTimeout(() => resolve({ email: "john@example.com", name: "John Doe" }), 2000))

function ToastPromise() {
  return (
    <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-8">
      <ToastProvider />
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        <Button
          size="sm"
          variant="secondary"
          onPress={() =>
            toast.promise(uploadFile(), {
              error: "Failed to upload file",
              loading: "Uploading file...",
              success: (data) => `File ${data.filename} uploaded (${data.size}KB)`,
            })
          }
        >
          Upload file
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onPress={() =>
            toast.promise(createEvent(), {
              error: (err) => err.message,
              loading: "Creating event...",
              success: "Event created",
            })
          }
        >
          Create event (error)
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onPress={() =>
            toast.promise(fetchUser(), {
              error: "Failed to fetch user",
              loading: "Loading user...",
              success: (data) => `Welcome back, ${data.name}!`,
            })
          }
        >
          Fetch user
        </Button>
      </div>
    </div>
  )
}

export { ToastPromise }

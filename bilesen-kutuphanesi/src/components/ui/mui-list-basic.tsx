/**
 * MuiListBasic
 * @id 2016
 * @category Veri Gösterimi
 * @subcategory MuiList
 * @source mui
 */
import { MuiList } from "@/components/ui/mui-list"
import { Inbox, Mail, Delete, Send } from "@/components/ui/icons"

function MuiListBasic() {
  return (
    <MuiList
      items={[
        { label: "Gelen Kutusu", icon: <Inbox className="size-5" />, secondary: "3 yeni mesaj" },
        { label: "Taslaklar", icon: <Mail className="size-5" />, secondary: "2 taslak" },
        { label: "Gönderilenler", icon: <Send className="size-5" />, secondary: "42 mesaj" },
        { label: "Çöp Kutusu", icon: <Delete className="size-5" />, secondary: "Boş" },
      ]}
    />
  )
}

export { MuiListBasic }

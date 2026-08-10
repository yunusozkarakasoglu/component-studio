/**
 * MuiRadioBasic
 * @id 1948
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { MuiRadioGroup } from "@/components/ui/mui-radio-group"

function MuiRadioBasic() {
  return (
    <MuiRadioGroup
      label="Cinsiyet"
      options={[
        { value: "kadin", label: "Kadın" },
        { value: "erkek", label: "Erkek" },
        { value: "diger", label: "Diğer" },
      ]}
      defaultValue="kadin"
    />
  )
}

export { MuiRadioBasic }

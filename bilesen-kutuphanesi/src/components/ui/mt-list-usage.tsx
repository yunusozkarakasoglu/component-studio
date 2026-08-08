/**
 * MtListUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1473
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListUsage() {
  return (
    <MtList className="max-w-sm">
      <MtListItem>Clone or download repository from GitHub</MtListItem>
      <MtListItem>Install dependencies with yarn</MtListItem>
      <MtListItem>To start development server run npm start command</MtListItem>
      <MtListItem>Run tests to make sure your changes do not break the build</MtListItem>
      <MtListItem>Submit a pull request once you are done</MtListItem>
    </MtList>
  )
}

export { MtListUsage }

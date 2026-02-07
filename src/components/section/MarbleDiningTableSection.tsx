import { ProductGridSection } from "@/components/ProductGridSection";
import { marbleDiningTableItems } from "@/components/collection/MarbleDiningTableCollection.data";

export const MarbleDiningTableSection = () => {
  return (
    <ProductGridSection
      title="Our Marble Dining Table Collection"
      viewMoreLink="https://www.woodensure.com/dining-table/marble-dining-table"
      items={marbleDiningTableItems}
    />
  );
};

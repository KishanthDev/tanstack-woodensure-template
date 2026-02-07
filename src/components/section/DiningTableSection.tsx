import { ProductGridSection } from "@/components/ProductGridSection";
import { diningTableItems } from "@/components/collection/DiningTableCollection.data";

export const DiningTableSection = () => {
  return (
    <ProductGridSection
      title="Our Dining Table Collection"
      viewMoreLink="https://www.woodensure.com/dining-table"
      items={diningTableItems}
    />
  );
};

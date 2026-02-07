import { ProductGridSection } from "@/components/ProductGridSection";
import { heightAdjustableItems } from "@/components/collection/HeightAdjustableCollection.data";

export const HeightAdjustableSection = () => {
  return (
    <ProductGridSection
      title="Our Height Adjustable Collection"
      viewMoreLink="https://www.woodensure.com/height-adjustable-table"
      items={heightAdjustableItems}
    />
  );
};

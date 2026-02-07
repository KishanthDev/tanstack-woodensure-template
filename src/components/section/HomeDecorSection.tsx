import { ProductGridSection } from "../ProductGridSection";
import { homeDecorItems } from "@/components/collection/HomeDecorCollection.data";

export const HomeDecorSection = () => {
  return (
    <ProductGridSection
      title="Our Home Decor Collection"
      viewMoreLink="https://www.woodensure.com/Home-Decor"
      items={homeDecorItems}
    />
  );
};
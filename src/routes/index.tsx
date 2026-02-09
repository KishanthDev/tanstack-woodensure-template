import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from '@/components/HeroSection'
import { IconStrip } from '@/components/IconStrip'
import { ShopByCategories } from '@/components/ShopByCategories'
import { SpecialCollections } from '@/components/SpecialCollections'
import { CustomizationProductsSection } from '@/components/CustomizationProductsSection'
import { StripBannerDecor } from '@/components/StripBannerDecor'
import { ReviewsSection } from '@/components/ReviewSection'
import { HomeDecorSection } from '@/components/section/HomeDecorSection'
import { DiningTableSection } from '@/components/section/DiningTableSection'
import { MarbleDiningTableSection } from '@/components/section/MarbleDiningTableSection'
import { HeightAdjustableSection } from '@/components/section/HeightAdjustableSection'
import { DeliveryBanner } from '@/components/DeliveryBanner'
import { ExclusiveDiscounts } from '@/components/ExclusiveDiscounts'
import { ShopByBudget } from '@/components/ShopByBudget'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-10">

      <HeroSection />
      <IconStrip />
      <ShopByCategories />
      <SpecialCollections />
      <CustomizationProductsSection />
      <HomeDecorSection />
      <StripBannerDecor />
      <DiningTableSection />
      <ExclusiveDiscounts/>
      <MarbleDiningTableSection />
      <DeliveryBanner/>
      <HeightAdjustableSection />
      <ShopByBudget/>
      <ReviewsSection />

    </div>
  )
}

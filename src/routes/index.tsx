import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from '@/components/HeroSection'
import { IconStrip } from '@/components/IconStrip'
import { ShopByCategories } from '@/components/ShopByCategories'
import { SpecialCollections } from '@/components/SpecialCollections'
import { CustomizationProductsSection } from '@/components/CustomizationProductsSection'
import { StripBannerDecor } from '@/components/StripBannerDecor'
import { ReviewsSection } from '@/components/ReviewSection'

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
      <StripBannerDecor />
      <ReviewsSection />

    </div>
  )
}

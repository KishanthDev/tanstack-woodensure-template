// src/routes/__root.tsx
import {
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import * as React from 'react'

import appCss from '../styles.css?url'
import { Header } from '../components/Header'
import { CategoryNavbar } from '@/components/CategoryNavbar'
import { HeroSection } from '@/components/HeroSection'
import { IconStrip } from '@/components/IconStrip'
import { ShopByCategories } from '@/components/ShopByCategories'
import { SpecialCollections } from '@/components/SpecialCollections'
import { CustomizationProductsSection } from '@/components/CustomizationProductsSection'
import { Footer } from '@/components/Footer'
import { StripBannerDecor } from '@/components/StripBannerDecor'
import ShopByBudgetSection, {  } from '@/components/ShopByBudgetSection'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <CategoryNavbar />
        <HeroSection />
        <IconStrip />
        <ShopByCategories />
        <SpecialCollections />
        <CustomizationProductsSection />
        <StripBannerDecor />
        <ShopByBudgetSection />

        <main className="mx-auto max-w-6xl px-4 py-6">
          {children}
        </main>

        <Footer />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

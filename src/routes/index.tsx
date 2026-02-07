// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white p-8 text-black">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Woodensure
          </h1>
          <p className="text-gray-600">
            Browse categories from the sidebar and use the header search to find products.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-1 text-lg font-semibold">Featured category</h2>
            <p className="text-sm text-gray-600">
              Start with Coffee &amp; Center Tables, Side Tables, Dining Tables and more.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-1 text-lg font-semibold">Tip</h2>
            <p className="text-sm text-gray-600">
              Use the dropdowns in the sidebar to quickly jump into sub‑categories.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

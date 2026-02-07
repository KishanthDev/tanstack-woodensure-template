import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/coffee-and-center-tables')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/coffee-and-center-tables"!</div>
}

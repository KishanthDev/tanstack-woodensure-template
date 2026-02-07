import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/login"!</div>
}

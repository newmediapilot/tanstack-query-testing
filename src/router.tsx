
import {createRouter, createRoute, createRootRoute, Outlet} from "@tanstack/react-router"
import { Alpha, Beta, Centauri } from "./pages"

const rootRoute = createRootRoute({ component: () => <div><Outlet /></div> })

const alphaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/alpha",
  component: Alpha
})

const betaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/beta",
  component: Beta
})

const centauriRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/centauri",
  component: Centauri
})

const routeTree = rootRoute.addChildren([alphaRoute, betaRoute, centauriRoute])

export const router = createRouter({ routeTree })

import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router"
import { PageAlpha } from "./PageAlpha"

const rootRoute = createRootRoute({
    component: () => <div><Outlet /></div>
})

const PageAlphaRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/PageAlpha",
    component: PageAlpha
})

// const PageBetaRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/PageBeta",
//     component: PageBeta
// })
//
// const PageCentauriRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/PageCentauri",
//     component: PageCentauri
// })

const routeTree = rootRoute.addChildren([
    PageAlphaRoute,
    // PageBetaRoute,
    // PageCentauriRoute
])

export const router = createRouter({ routeTree })
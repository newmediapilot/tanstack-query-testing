/**
 * Type safety on the api source
 */

export const APIRegistry = {
    "/api/phase/alpha":         { queryKey: "/api/phase/alpha",           url: "/api/phase/alpha" },
    // "/api/version/beta":        { queryKey: "/api/version/beta",          url: "/api/version/beta" },
    // "/api/codename/centauri":   { queryKey: "/api/codename/centauri",     url: "/api/codename/centauri" }
} as const

export type ApiRegistry = typeof APIRegistry
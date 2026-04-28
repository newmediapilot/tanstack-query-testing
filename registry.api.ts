/**
 * Type safety on the api source
 */

export const APIRegistry = {
    "/api/phase/alpha":         { key: "/api/phase/alpha",           url: "/api/phase/alpha" },
    "/api/version/beta":        { key: "/api/version/beta",          url: "/api/version/beta" },
    "/api/codename/centauri":   { key: "/api/codename/centauri",     url: "/api/codename/centauri" }
} as const

export type ApiRegistry = typeof APIRegistry
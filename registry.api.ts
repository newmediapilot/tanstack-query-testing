import * as RegistryApiJSON from "./registry.api.json"

export type ApiRegistryEntry = {
    key: string
    url: string
}

export const APIRegistry = RegistryApiJSON["api.registry.json"] as ApiRegistryEntry[]

export function APIRegistryQuery(query: string): ApiRegistryEntry {
    const result = APIRegistry.find((item) => item.key === query) || false;
    if (false === result) throw new Error(`APIRegistryQuery query:"${query}" not found`)
    return result;
}
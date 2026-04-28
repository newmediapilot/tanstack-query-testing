import {APIRegistry} from '../../registry.api.ts';

const {queryKey: name} = APIRegistry["/api/phase/alpha"];

const fixture = await import("./ApiPhaseAlpha.fixture.json");

export async function queryFn() {
    await new Promise((r) => setTimeout(r, 500))
    return {name, fixture};
}
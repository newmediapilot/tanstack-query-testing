import { APIRegistry } from "../../registry.api.ts";

const { queryKey: name, url } = APIRegistry["/api/phase/alpha"];

export async function queryFn() {
    const res = await fetch(`http://localhost:4321${url}`);
    const data = await res.json();
    return {
        name,
        data
    };
}
import {useQuery} from "@tanstack/react-query"
import {APIRegistry} from "../registry.api"
import {queryFn} from './queries/ApiPhaseAlpha.ts';
const {queryKey} = APIRegistry["/api/phase/alpha"]

export function PageAlpha() {
    // @ts-ignore
    const query = useQuery({ queryKey, queryFn })
    return <div>alpha {JSON.stringify(query.data)}</div>
}
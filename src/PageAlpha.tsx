import {useQuery} from "@tanstack/react-query"
import {APIRegistry} from "../registry.api"
import {queryFn} from './queries/ApiPhaseAlpha.ts';
const {queryKey} = APIRegistry["/api/phase/alpha"]

export function PageAlpha() {
    const tanstackQuery = useQuery({ queryKey, queryFn })
    return <div>alpha {JSON.stringify(tanstackQuery.data)}</div>
}
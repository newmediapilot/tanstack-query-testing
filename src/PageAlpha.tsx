import {useQuery} from "@tanstack/react-query"
import {APIRegistry} from "../registry.api"
import {queryFn} from './queries/ApiPhaseAlpha.ts';
const {queryKey} = APIRegistry["/api/phase/alpha"]

export function PageAlpha() {
    const query = useQuery({ queryKey:[queryKey,{id: 99}], queryFn })
    return <div>alpha {JSON.stringify(query.data)}</div>
}
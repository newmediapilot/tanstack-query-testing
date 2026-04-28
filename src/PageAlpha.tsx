import {useQuery} from "@tanstack/react-query";
import {APIRegistry} from '../registry.api.ts';

const apiPhaseAlpha = APIRegistry['/api/phase/alpha'];
const apiPhaseAlphaFetch = async () => ({name: apiPhaseAlpha.key, value: Math.random()});

export function PageAlpha() {
    const apiPhaseAlphaFetchQuery = useQuery({queryKey: apiPhaseAlpha.key, queryFn: apiPhaseAlphaFetch})
    return <div>alpha {JSON.stringify(apiPhaseAlphaFetchQuery.data)}</div>
}
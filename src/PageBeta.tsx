import {useQuery} from "@tanstack/react-query";
import {APIRegistry} from '../registry.api.ts';

const apiVersionBeta = APIRegistry['/api/version/beta'];
const apiVersionBetaFetch = async () => ({name: apiVersionBeta.key, value: Math.random()});

export function PageBeta() {
    const apiVersionBetaFetchQuery = useQuery({queryKey: apiVersionBeta.key, queryFn: apiVersionBetaFetch})
    return <div>alpha {JSON.stringify(apiVersionBetaFetchQuery.data)}</div>
}
import {useQuery} from "@tanstack/react-query";
import {APIRegistry} from "../registry.api";
import {queryFn} from "./queries/ApiPhaseAlpha";

const {queryKey} = APIRegistry["/api/phase/alpha"];

export function PageAlpha() {
    const query = useQuery({
        queryKey: [queryKey, {id: 99}],
        queryFn,
    });
    if (query.isLoading) {
        return <div>loading...</div>;
    } else if (query.isError) {
        return <div>error</div>;
    } else {
        return (
            <div>
                <div>alpha page</div>
                <div>status: {String(query.status)}</div>
                <div>fetching: {String(query.isFetching)}</div>
                <div>data:</div>
                <pre>{JSON.stringify(query.data, null, 2)}</pre>
            </div>
        );
    }
}
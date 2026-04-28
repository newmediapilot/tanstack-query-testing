import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const qc = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 5 * 60 * 1000,
            // https://tanstack.com/query/latest/docs/framework/react/reference/QueryClient#queryclient

            staleTime: 0,
            // https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults

            refetchOnMount: true,
            // https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults

            refetchOnWindowFocus: true,
            // https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults

            refetchOnReconnect: true,
            // https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults

            retry: 3,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            retryDelay: attemptIndex =>
                Math.min(1000 * 2 ** attemptIndex, 30000),
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            refetchInterval: false,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            refetchIntervalInBackground: false,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            notifyOnChangeProps: "all",
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            structuralSharing: true,
            // https://tanstack.com/query/latest/docs/framework/react/guides/render-optimizations

            suspense: false,
            // https://tanstack.com/query/latest/docs/framework/react/guides/suspense

            useErrorBoundary: false,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

            networkMode: "online",
            // https://tanstack.com/query/latest/docs/framework/react/guides/network-mode
        },

        mutations: {
            retry: 0,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useMutation

            retryDelay: attemptIndex =>
                Math.min(1000 * 2 ** attemptIndex, 30000),
            // https://tanstack.com/query/latest/docs/framework/react/reference/useMutation

            networkMode: "online",
            // https://tanstack.com/query/latest/docs/framework/react/guides/network-mode

            useErrorBoundary: false,
            // https://tanstack.com/query/latest/docs/framework/react/reference/useMutation
        },
    },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={qc}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
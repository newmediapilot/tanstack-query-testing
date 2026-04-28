
import { useQuery } from "@tanstack/react-query"
import { alphaQuery, betaQuery, centauriQuery } from "./queries.ts"

export function Alpha() {
  const q = useQuery({ queryKey: ["alpha"], queryFn: alphaQuery })
  return <div>alpha {JSON.stringify(q.data)}</div>
}

export function Beta() {
  const q = useQuery({ queryKey: ["beta"], queryFn: betaQuery })
  return <div>beta {JSON.stringify(q.data)}</div>
}

export function Centauri() {
  const q = useQuery({ queryKey: ["centauri"], queryFn: centauriQuery })
  return <div>centauri {JSON.stringify(q.data)}</div>
}

"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export const Provider = ({children})=>{
    const [client] = useState(new QueryClient);
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
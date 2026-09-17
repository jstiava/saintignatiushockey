'use client'

import { createContext } from "react";


export const AppContext = createContext<{
    teams: any[]
    // @ts-ignore
}>(null)

export default function AppContextProvider({
    teams,
    children
}: {
    teams: any[],
    children: any
}) {

    if (!teams) {
        return null;
    }

    return (
        <AppContext.Provider value={{
            teams
        }}>
            {children}
        </AppContext.Provider>
    );
}
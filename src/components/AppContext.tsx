'use client'

import OverplannerDate from "@/lib/OverplannerDate";
import { createContext } from "react";


export const AppContext = createContext<{
    teams: any[],
    today: OverplannerDate
    // @ts-ignore
}>(null)

export default function AppContextProvider({
    teams,
    children
}: {
    teams: any[],
    children: any
}) {

    const today = new OverplannerDate('now', 'America/Chicago');

    if (!teams) {
        return null;
    }

    return (
        <AppContext.Provider value={{
            teams,
            today
        }}>
            {children}
        </AppContext.Provider>
    );
}
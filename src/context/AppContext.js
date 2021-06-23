import React, { useEffect, useState } from "react"

export const AppContext = React.createContext()


export function AppProvider({ children }) {

    const [time, setTime] = useState("")
    const [timearr, setTimeArr] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTime(formatdate())
    }, [])
    function formatdate() {
        var d = new Date()

        var currentTime = d.getHours().toString().padStart(2,"0") + ":" + d.getMinutes().toString().padStart(2,"0") + ":" + d.getSeconds().toString().padStart(2,"0")
                return currentTime
    }
    setInterval(() => {
        setTime(formatdate())
    }, 1000)

    function updateCount() {

        setCount(prev => prev + 1)
        setTimeArr(prev => [...prev, formatdate()])
        console.log(timearr)
    }
    return (
        <AppContext.Provider value={{ time, updateCount, count, timearr }}>
            {children}

        </AppContext.Provider>
    )

}
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [dateState, setDateState] = useState(new Date());
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const intervalId = setInterval(() => {
            setDateState(new Date());
        }, 1000);
        return function cleanUp() {
            clearInterval(intervalId);
        };
    }, [])

    if (!mounted) return <>Xxx, 00 Xxx, 0000, 00:00:00 xx</>;

    return (
        <>
            {
                dateState.toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            }
        </>
    )
}

export default Clock

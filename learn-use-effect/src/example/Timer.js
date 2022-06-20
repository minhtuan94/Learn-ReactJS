import { useEffect, useState } from "react"

function Timer() {
    const [countdown, setCountdown] = useState(180)

    useEffect (()=>{
        const timer = setTimeout(() => {
            setCountdown(countdown - 1)
            console.log('.........');
        }, 1000);

        return ()=> clearTimeout(timer)
    },[countdown])

    return (
        <>
        <h1>{countdown}</h1>
        </>
    )
}

export default Timer
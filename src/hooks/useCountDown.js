import { useEffect, useState } from "react"


const useCountDown = (initiaSecond) => {
    const [second, setSecond] = useState(initiaSecond)

    useEffect(()=> {
        if(second <= 0) return
        const sub = setTimeout(()=> {
            setSecond(prev => prev - 1)
        }, 1000)

        return ()=> clearTimeout(sub)
    },[second])

    return second
}

export default useCountDown
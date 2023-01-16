import {useState, useEffect} from 'react'

export function useDebounce(value: string, delay: number = 300) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const id =  setTimeout(() => setDebounced(value), delay)

        return () => clearTimeout(id)
    }, [value, delay])

    return debounced
}
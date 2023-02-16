import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => clearTimeout(timeout);
    }, [value, delay])

    return debouncedValue;
}
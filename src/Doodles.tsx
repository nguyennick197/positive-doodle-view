import { useState, useEffect } from 'react'
import { fetchDoodles } from './api/fetchDoodles'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'

export function Doodles() {
    const [page, setPage] = useState(1)

    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
      } = useQuery({
        queryKey: ['doodles', page],
        queryFn: () => fetchDoodles({ pageParam: page }),
        keepPreviousData : true
      })

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const handleNextPage = () => {
        setPage(old => old + 1)
    }

    return (
        <div className="App">
            <div>
                hello
            </div>
            <button
                onClick={handleNextPage}
            >
                Next Page
            </button>
        </div>
    )
}
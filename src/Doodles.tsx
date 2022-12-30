import { useState, useEffect } from 'react'
import { fetchDoodles } from './api/fetchDoodles'
import {
    useQuery,
} from '@tanstack/react-query'
import { Pagination, Image } from '@mantine/core';
import './App.css'

export function Doodles() {
    const [page, setPage] = useState(1)

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
        keepPreviousData: true
    })

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const handleNextPage = () => {
        setPage(old => old + 1)
    }

    return (
        <div className="App">
            {data &&
                <div>
                    {data.map((doodle: any) => (
                        <div key={doodle.id}>
                            <Image
                                width={300}
                                src={doodle.url}
                                withPlaceholder
                                fit="contain"
                            />
                            <div style={{margin: 20}}/>
                        </div>
                    ))}
                </div>
            }
            <Pagination page={page} onChange={setPage} total={10} />
        </div>
    )
}
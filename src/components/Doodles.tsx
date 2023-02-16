import { useState, useEffect } from 'react'
import { fetchDoodles } from '../api/fetchDoodles'
import {
    useQuery,
} from '@tanstack/react-query'
import { Pagination, Image, Flex, Space, Card, Group, Text } from '@mantine/core';
import '../App.css'
import { DoodleGrid } from './DoodleGrid';
import { DoodleCard } from './DoodleCard';

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

    return (
        <div className="App">
            {data &&
                <DoodleGrid>
                    {data.data.map((doodle: any) => (
                        <DoodleCard 
                            id={doodle.id}
                            url={doodle.url}
                            tags={doodle.tags}
                        />
                    ))}
                </DoodleGrid>
            }
            <Space h="md" />
            <Flex align="center" justify="center">
                <Pagination
                    page={page}
                    onChange={setPage}
                    total={98}
                    disabled={isLoading || isFetching}
                    getItemAriaLabel={(page) => {
                        switch (page) {
                            case 'dots':
                                return 'dots element aria-label';
                            case 'prev':
                                return 'previous page button aria-label';
                            case 'next':
                                return 'next page button aria-label';
                            case 'first':
                                return 'first page button aria-label';
                            case 'last':
                                return 'last page button aria-label';
                            default:
                                return `${page} item aria-label`;
                        }
                    }}
                />
            </Flex>
        </div>
    )
}
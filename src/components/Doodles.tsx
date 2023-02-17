import { useState, useEffect, useMemo } from 'react'
import { fetchDoodles } from '../api/fetchDoodles'
import {
    useQuery,
} from '@tanstack/react-query'
import { Space, TextInput, Container } from '@mantine/core';
import '../App.css'
import { DoodleGrid } from './DoodleGrid';
import { DoodleCard } from './DoodleCard';
import { useDebounce } from '../hooks/useDebounce';
import { SearchIcon } from './SearchIcon';
import { PaginationComponent } from './PaginationComponent';

export function Doodles() {
    const [page, setPage] = useState<number | string>(1);
    const [perPage, setPerPage] = useState(8);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);

    const queryKey = page ? ['doodles', `${page}-${[perPage]}-${debouncedSearch}`] : undefined;

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: queryKey,
        queryFn: () => fetchDoodles({ pageParam: page, per_page: perPage, search: debouncedSearch }),
        keepPreviousData: true
    })

    useEffect(() => {
        setPage(1);
    }, [debouncedSearch])

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const { totalItems, totalPages } = useMemo(() => {
        if (!data || !data.total_items) return {
            totalItems: "--",
            totalPages: 1
        };
        return {
            totalPages: Math.ceil(data.total_items / perPage),
            totalItems: data.total_items
        }
    }, [data])

    return (
        <>
            <Container size={320} >
                <TextInput
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    rightSection={<SearchIcon />}
                />;
            </Container>

            {isLoading &&
                <p> Loading... </p>
            }
            {!isLoading &&
                <DoodleGrid>
                    {data.data.map((doodle: any) => (
                        <DoodleCard
                            id={doodle.id}
                            tags={doodle.tags}
                            tumblr_image_url={doodle.tumblr_image_url}
                            background_color={doodle.background_color}
                            key={doodle.id}
                        />
                    ))}
                </DoodleGrid>
            }
            <Space h={80} />
            <PaginationComponent 
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                totalItems={totalItems}
                isLoading={isLoading}
            />
        </>
    )
}
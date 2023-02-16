import { useState, useEffect, useMemo } from 'react'
import { fetchDoodles } from '../api/fetchDoodles'
import {
    useQuery,
} from '@tanstack/react-query'
import { Pagination, Flex, Space, TextInput, Container } from '@mantine/core';
import '../App.css'
import { DoodleGrid } from './DoodleGrid';
import { DoodleCard } from './DoodleCard';
import { useDebounce } from '../hooks/useDebounce';
import { SearchIcon } from './SearchIcon';

export function Doodles() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(8);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['doodles', `${page}-${[perPage]}-${debouncedSearch}`],
        queryFn: () => fetchDoodles({ pageParam: page, per_page: perPage, search: debouncedSearch }),
        keepPreviousData: true
    })

    useEffect(() => {
        setPage(1);
    }, [debouncedSearch])

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const totalPages = useMemo(() => {
        if (!data || !data.total_items) return 1;
        return Math.ceil(data.total_items / perPage);
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
            <Space h="md" />
            <Flex align="center" justify="center">
                <Pagination
                    page={page}
                    onChange={setPage}
                    total={totalPages}
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
        </>
    )
}
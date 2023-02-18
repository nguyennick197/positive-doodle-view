import { useEffect, useMemo, createContext, useContext } from 'react';
import { Space, Flex, Text } from '@mantine/core';
import { PaginationComponent } from './PaginationComponent';
import { HeaderContainer } from './HeaderContainer';
import { ContentContainer } from './ContentContainer';
import { Doodles } from './Doodles';
import { useDoodleQuery } from '../hooks/useDoodleQuery';
import { FilterContext } from '../contexts/FilterContext';
import { SearchInput } from './SearchInput';
import { TagSelect } from './TagSelect';
import '../App.css'
import { LikeButton } from './LikeButton';


export function Home() {
    const {
        page,
        perPage,
        debouncedSearch,
        tag
    } = useContext(FilterContext)

    const { data, isLoading } = useDoodleQuery({ page, perPage, debouncedSearch, tag });

    const { totalItems, totalPages } = useMemo(() => {
        if (!data || !data.total_items) return {
            totalItems: "--",
            totalPages: 1
        };
        return {
            totalPages: Math.ceil(data.total_items / perPage),
            totalItems: data.total_items
        };
    }, [data]);

    return (
        <div>
            <HeaderContainer />
            <ContentContainer>
                <Space h={30} />
                <Doodles
                    isLoading={isLoading}
                    data={data?.data}
                />
            </ContentContainer>
            <Space h={80} />
            <PaginationComponent
                totalPages={totalPages}
                totalItems={totalItems}
                isLoading={isLoading}
            />
        </div>
    )
}
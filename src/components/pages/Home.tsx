import { useMemo, useContext } from 'react';
import { Space } from '@mantine/core';
import { PaginationComponent } from '../organisms/PaginationComponent';
import { HeaderContainer } from '../organisms/HeaderContainer';
import { ContentContainer } from '../atoms/ContentContainer';
import { Doodles } from '../organisms/Doodles';
import { useDoodleQuery } from '../../hooks/useDoodleQuery';
import { FilterContext } from '../../contexts/FilterContext';
import { FilterModal } from '../organisms/FilterModal';
import '../../App.css'

export function Home() {
    const {
        page,
        perPage,
        debouncedSearch,
        tag,
        filterModalOpened,
        toggleFilterModalOpened,
        favoritesFilter
    } = useContext(FilterContext)

    const { data, isLoading } = useDoodleQuery({ page, perPage, debouncedSearch, tag, favoritesFilter });

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
            <FilterModal
                opened={filterModalOpened}
                toggleOpened={toggleFilterModalOpened}
            />

        </div>
    )
}
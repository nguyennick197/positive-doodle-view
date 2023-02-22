import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDoodles } from "../api/fetchDoodles";

type useDoodleQueryProps = {
    page: number | string;
    perPage: number;
    debouncedSearch: string | undefined;
    tag: string;
    favoritesFilter: string;
}

export const useDoodleQuery = ({
    page,
    perPage,
    debouncedSearch,
    tag,
    favoritesFilter
}: useDoodleQueryProps) => {
    const queryKey = page ? ['doodles', `${page}-${[perPage]}-${debouncedSearch}-${tag}-${favoritesFilter}`] : undefined;

    const {
        isLoading,
        data,
    } = useQuery({
        queryKey: queryKey,
        queryFn: () => fetchDoodles({ pageParam: page, per_page: perPage, search: debouncedSearch, tag: tag, favorites: favoritesFilter }),
        keepPreviousData: true
    });

    return {
        isLoading,
        data
    }
}
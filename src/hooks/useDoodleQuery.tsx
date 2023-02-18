import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDoodles } from "../api/fetchDoodles";

type useDoodleQueryProps = {
    page: number | string,
    perPage: number,
    debouncedSearch: string | undefined,
    tag: string
}

export const useDoodleQuery = ({
    page,
    perPage,
    debouncedSearch,
    tag
}: useDoodleQueryProps) => {
    const queryKey = page ? ['doodles', `${page}-${[perPage]}-${debouncedSearch}-${tag}`] : undefined;

    const {
        isLoading,
        data,
    } = useQuery({
        queryKey: queryKey,
        queryFn: () => fetchDoodles({ pageParam: page, per_page: perPage, search: debouncedSearch, tag: tag }),
        keepPreviousData: true
    });

    useEffect(() => {
        console.log("data", data)
    }, [data]);

    return {
        isLoading,
        data
    }
}
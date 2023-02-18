import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

const initialPage = new URLSearchParams(window.location.search).get("page");
const initialTag = new URLSearchParams(window.location.search).get("tag");

export const useFilters = () => {
    const [page, setPage] = useState<number | string>(initialPage || "1");
    const [perPage, setPerPage] = useState(8);
    const [search, setSearch] = useState("");
    const [tag, setTag] = useState(initialTag || "");
    const [debounceRenders, setDebounceRenders] = useState(0);
    const debouncedSearch = useDebounce(search, 1000);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        page && urlSearchParams.set('page', page as string);
        tag && urlSearchParams.set('tag', tag);
        const newUrl = `${location.pathname}?${urlSearchParams.toString()}`;
        window.history.replaceState({}, '', newUrl);
    }, [page, tag]);

    useEffect(() => {
        console.log("Debounce renders: ", debounceRenders);
        setDebounceRenders(prev => prev + 1);
        if (debounceRenders < 3) return;
        setPage(1);
    }, [debouncedSearch])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, tag]);

    return {
        page, setPage,
        perPage,
        search, setSearch,
        tag, setTag,
        debouncedSearch
    }
}
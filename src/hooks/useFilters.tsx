import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

const initialPage = new URLSearchParams(window.location.search).get("page");
const initialTag = new URLSearchParams(window.location.search).get("tag");

export const useFilters = () => {
    const [page, setPage] = useState<number | string>(initialPage || "1");
    const [perPage, setPerPage] = useState(8);
    const [search, setSearch] = useState("");
    const [tag, setTag] = useState(initialTag || "");
    const [showFavorites, setShowFavorites] = useState(false);
    const [filterModalOpened, setFilterModalOpened] = useState(false);
    const [debounceRenders, setDebounceRenders] = useState(0);
    const debouncedSearch = useDebounce(search, 1000);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        if (!page || page === 1) urlSearchParams.delete('page');
        else urlSearchParams.set('page', page as string);
        if (!tag) urlSearchParams.delete('tag');
        else urlSearchParams.set('tag', tag);
        const newUrl = `${location.pathname}?${urlSearchParams.toString()}`;
        window.history.replaceState({}, '', newUrl);
    }, [page, tag]);

    useEffect(() => {
        if (debounceRenders < 3) {
            /* 
                this is a workaround to not set the page back to 1 when the user wants to load the url with a page param
                definitely a better way to do this and will try to update later
            */
            setDebounceRenders(prev => prev + 1);
            return;
        }
        setPage(1);
    }, [debouncedSearch])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, tag]);

    const toggleFilterModalOpened = () => {
        setFilterModalOpened(prev => !prev);
    }

    const clearFilters = () => {
        setPage(1);
        setTag("");
        setSearch("");
        setShowFavorites(false);
    }

    return {
        page, setPage,
        perPage, setPerPage,
        search, setSearch,
        tag, setTag,
        debouncedSearch,
        filterModalOpened,
        toggleFilterModalOpened,
        showFavorites, setShowFavorites,
        clearFilters
    }
}
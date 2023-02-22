import { FC, PropsWithChildren, createContext, Dispatch, SetStateAction } from "react";
import { useFilters } from "../hooks/useFilters";

type FilterContextType = {
    page: string | number;
    setPage:  Dispatch<SetStateAction<string | number>>;
    tag: string;
    setTag:  Dispatch<SetStateAction<string>>;
    search: string;
    setSearch:  Dispatch<SetStateAction<string>>;
    perPage: number;
    debouncedSearch: string | undefined;
    filterModalOpened: boolean;
    toggleFilterModalOpened: () => void;
    showFavorites: boolean;
    toggleFavorites: () => void;
    clearFilters: () => void;
}

export const FilterContext = createContext<FilterContextType>({
    page: 1,
    setPage: () => {},
    tag: "",
    setTag: () => {},
    search: "",
    setSearch: () => {},
    perPage: 8,
    debouncedSearch: "",
    filterModalOpened: false,
    toggleFilterModalOpened: () => {},
    showFavorites: false,
    toggleFavorites: () => {},
    clearFilters: () => {}
});

export const FilterContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { 
        page, setPage,
        tag, setTag,
        search, setSearch, 
        perPage,
        debouncedSearch,
        filterModalOpened,
        toggleFilterModalOpened,
        showFavorites, toggleFavorites,
        clearFilters
    } = useFilters()

    return(
        <FilterContext.Provider value={{
            page, 
            setPage,
            tag,
            setTag,
            search,
            setSearch,
            perPage,
            debouncedSearch,
            filterModalOpened,
            toggleFilterModalOpened,
            showFavorites,
            toggleFavorites,
            clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
import { FC, PropsWithChildren, createContext, Dispatch, SetStateAction, useContext, useState, useEffect } from "react";
import { useFilters } from "../hooks/useFilters";
import { FavoritesContext } from "./FavoritesContext";
import { SavedDoodle } from "../utils/types";

type FilterContextType = {
    page: string | number;
    setPage: Dispatch<SetStateAction<string | number>>;
    tag: string;
    setTag: Dispatch<SetStateAction<string>>;
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    perPage: number;
    debouncedSearch: string | undefined;
    filterModalOpened: boolean;
    toggleFilterModalOpened: () => void;
    showFavorites: boolean;
    setShowFavorites: Dispatch<SetStateAction<boolean>>;
    clearFilters: () => void;
    favoritesFilter: string;
}

export const FilterContext = createContext<FilterContextType>({
    page: 1,
    setPage: () => { },
    tag: "",
    setTag: () => { },
    search: "",
    setSearch: () => { },
    perPage: 8,
    debouncedSearch: "",
    filterModalOpened: false,
    toggleFilterModalOpened: () => { },
    showFavorites: false,
    setShowFavorites: () => { },
    clearFilters: () => { },
    favoritesFilter: ""
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
        showFavorites, setShowFavorites,
        clearFilters
    } = useFilters()

    const [favoritesFilter, setFavoritesFilter] = useState<string>("");

    const { favorites } = useContext(FavoritesContext);

    useEffect(() => {
        if (!showFavorites) {
            setFavoritesFilter("");
            return;
        };
        const favIds: number[] = [];
        favorites.forEach((saved: SavedDoodle) => {
            favIds.push(saved.id);
        });
        setFavoritesFilter(favIds.join(","));
    }, [showFavorites]);

    return (
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
            setShowFavorites,
            clearFilters,
            favoritesFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}
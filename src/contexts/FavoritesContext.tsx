import { FC, PropsWithChildren, createContext } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { SavedDoodle } from "../utils/types";

type FavoritesContextType = {
    favorites: SavedDoodle[];
    addToFavorites: (id: number) => void;
    removeFromFavorites: (id: number) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addToFavorites: () => {},
    removeFromFavorites: () => {}
});

export const FavoritesContextProvider: FC<PropsWithChildren> = ({ children }) => {
    
    const { 
        favorites,
        addToFavorites,
        removeFromFavorites
    } = useFavorites()

    return(
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
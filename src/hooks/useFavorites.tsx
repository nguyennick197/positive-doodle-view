import { useState, useEffect } from "react";
import { SavedDoodle } from "../utils/types";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<SavedDoodle[]>([]);

    useEffect(() => {
        const localFavorites = localStorage.getItem("favorites");
        if (!localFavorites) return;
        const favoritesFromStorage = JSON.parse(localFavorites);
        if (favoritesFromStorage) setFavorites(favoritesFromStorage);
    }, [])

    const addToFavorites = (id: number) => {
        const newItem = {
            id,
            dateAdded: new Date()
        };
        const newFavorites = [...favorites, newItem];
        const serializedDoodles = JSON.stringify(newFavorites);
        localStorage.setItem('favorites', serializedDoodles);
        setFavorites(newFavorites);
    }

    const removeFromFavorites = (id: number) => {
        const newFavorites = favorites.filter((doodle: SavedDoodle) => doodle.id !== id);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    }

    return {
        favorites,
        addToFavorites,
        removeFromFavorites
    }

}
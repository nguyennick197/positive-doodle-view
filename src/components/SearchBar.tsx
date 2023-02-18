import { Dispatch, SetStateAction, useContext } from "react";
import { Container, TextInput } from "@mantine/core"
import { FilterContext } from "../contexts/FilterContext";

const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#9FA2A8" d="M15.5 14h-.79l-.28-.27c1.2-1.39 1.95-3.18 1.95-5.23 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c2.05 0 3.84-.75 5.23-1.95l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-7 0c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
    )
}

export const SearchBar = () => {
    const { search, setSearch } = useContext(FilterContext);
    
    return (
        <TextInput
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            //rightSection={<SearchIcon />}
        />
    )
}
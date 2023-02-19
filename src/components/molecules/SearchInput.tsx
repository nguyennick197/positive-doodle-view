import { useContext } from "react";
import { TextInput } from "@mantine/core"
import { FilterContext } from "../../contexts/FilterContext";

export const SearchInput = () => {
    const { search, setSearch } = useContext(FilterContext);
    
    return (
        <TextInput
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}
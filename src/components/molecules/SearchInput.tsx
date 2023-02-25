import { useContext } from "react";
import { TextInput } from "@mantine/core"
import { FilterContext } from "../../contexts/FilterContext";
import { SearchIcon } from "../../icons/SearchIcon";

type SearchInputProps = {
    showSearchIcon?: boolean;
    showLabel?: boolean;
}

export const SearchInput = ({
    showSearchIcon,
    showLabel
}: SearchInputProps) => {
    const { search, setSearch } = useContext(FilterContext);
    
    return (
        <TextInput
            label={showLabel && "Search"}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={showSearchIcon && <SearchIcon />}
            aria-label="Search Input"
        />
    )
}
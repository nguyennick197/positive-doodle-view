import { Dispatch, SetStateAction } from "react";
import { Container, TextInput } from "@mantine/core"
import { SearchIcon } from "./SearchIcon"

type SearchBarProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({
    search,
    setSearch
}: SearchBarProps) => {
    return (
        <TextInput
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            rightSection={<SearchIcon />}
        />
    )
}
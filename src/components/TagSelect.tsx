import { useMemo, useContext } from "react";
import { Select } from "@mantine/core";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/fetchTags";
import { FilterContext } from "../contexts/FilterContext";

export const TagSelect = () => {
    const { tag, setTag, setPage } = useContext(FilterContext);

    const { data } = useQuery(["tags"], fetchTags, {
        refetchOnWindowFocus: false
    });

    const tagSelection = useMemo(() => {
        console.log(data?.data)
        if (data?.data) {
            return data.data.map((item: any) => item.tag);
        }
        return ["doodle", "cat"];
    }, [data?.data]);

    const handleSelectChange = (value: string) => {
        setPage(1);
        setTag(value);
    }

    return (
        <Select
            placeholder="Tag"
            data={tagSelection}
            value={tag}
            onChange={handleSelectChange}
            nothingFound="No tag found"
            clearable
            searchable
        />
    )
}
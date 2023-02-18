import { useMemo, useContext } from "react";
import styled from "@emotion/styled";
import { MultiSelect } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/fetchTags";
import { FilterContext } from "../contexts/FilterContext";

const StyledSelect = styled(MultiSelect)`
    width: 200px;

    @media (max-width: 576px) {
        width: 130px;
    }

    @media (min-width: 577px and max-width: 769px) {
        width: 160px;
    }
`

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

    const handleSelectChange = (value: string[]) => {
        setPage(1);
        setTag(value[0]);
    }

    return (
        <StyledSelect
            placeholder="Tag"
            data={tagSelection}
            value={[tag]}
            onChange={handleSelectChange}
            nothingFound="No tag found"
            searchable
            styles={{ rightSection: { display: "none" } }}
            maxSelectedValues={1}
        />
    )
}
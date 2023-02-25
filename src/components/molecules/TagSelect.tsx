import { useMemo, useContext } from "react";
import styled from "@emotion/styled";
import { MultiSelect } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../api/fetchTags";
import { FilterContext } from "../../contexts/FilterContext";

const StyledSelect = styled(MultiSelect)`
    max-width: 200px;
    overflow: wrap;

    @media (min-width: 577px and max-width: 769px) {
        width: 160px;
    }
`

type TagSelectProps = {
    showLabel?: boolean;
}

export const TagSelect = ({
    showLabel
}: TagSelectProps) => {
    const { tag, setTag, setPage } = useContext(FilterContext);

    const { data } = useQuery(["tags"], fetchTags, {
        refetchOnWindowFocus: false
    });

    const tagSelection = useMemo(() => {
        if (data?.data) {
            return data.data.map((item: any) => item.tag);
        }
        return [];
    }, [data?.data]);

    const handleSelectChange = (value: string[]) => {
        setPage(1);
        if (!value[0]) {
            setTag("");
            return;
        }
        setTag(value[0]);
    }

    return (
        <StyledSelect
            placeholder="Tags"
            data={tagSelection}
            value={[tag]}
            onChange={handleSelectChange}
            nothingFound="No tag found"
            searchable
            maxSelectedValues={1}
            label={showLabel && "Tag"}
            aria-label="Tag Select"
        />
    )
}
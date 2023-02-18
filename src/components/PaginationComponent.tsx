import { useState, useEffect, useContext, Dispatch, SetStateAction} from "react";
import { Button, Text, NumberInput } from "@mantine/core";
import { useDebounce } from "../hooks/useDebounce";
import { PaginationContainer } from "./PaginationContainer";
import { FilterContext } from "../contexts/FilterContext";

type PaginationProps = {
    totalPages: number;
    totalItems: number;
    isLoading: boolean;
}

const initialPage = new URLSearchParams(window.location.search).get("page");

export const PaginationComponent = ({
    totalPages,
    totalItems,
    isLoading,
}: PaginationProps) => {
    const { page, setPage } = useContext(FilterContext);

    const [newPage, setNewPage] = useState<number | string>(initialPage || 1);

    // const debouncedPage = useDebounce(newPage, 0);

    // useEffect(() => {
    //     if (debouncedPage === undefined) return;
    //     setPage(debouncedPage);
    // }, [debouncedPage]);

    // useEffect(() => {
    //     console.log("newpage", newPage);
    // }, [newPage])

    useEffect(() => {
        setNewPage(page);
    }, [page]);

    const handleChange = (newPage: number | undefined) => {
        setPage(newPage || "");
    }

    const handlePrev = () => {
        setPage(prev => parseInt(prev as string) - 1);
    }

    const handleNext = () => {
        setPage(prev => parseInt(prev as string) + 1);
    }

    return (
        <PaginationContainer>
            <Button
                aria-label="previous page button"
                onClick={handlePrev}
                disabled={isLoading || page == 1 || page == ""}
            > ← </Button>
            <Text> Page </Text>
            <NumberInput
                value={newPage as number}
                min={1}
                max={totalPages}
                onChange={handleChange}
                hideControls
                disabled={isLoading}
                parser={(value) => {
                    if (!value) return "";
                    const newValue = parseInt(value?.replace(/[^0-9]/, ""));
                    if (!newValue) return "";
                    if (newValue > totalPages) return `${totalPages}`;
                    if (newValue < 1) return "1";
                    return `${newValue}`;
                }}
                styles={{ input: { width: 54, textAlign: 'center' } }}
            />
            <Text> of {totalPages} </Text>
            <Button
                aria-label="next page button"
                onClick={handleNext}
                disabled={isLoading || page == totalPages || page == ""}
            > → </Button>
            <Text> {totalItems.toLocaleString()} doodles </Text>
        </PaginationContainer>
    )
}
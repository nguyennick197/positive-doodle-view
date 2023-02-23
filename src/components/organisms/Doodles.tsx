import { useContext } from "react";
import { Text, Flex, Button } from "@mantine/core";
import { DoodleGrid } from "../atoms/DoodleGrid";
import { DoodleCard } from "./DoodleCard";
import { Doodle } from "../../utils/types";
import { FilterContext } from "../../contexts/FilterContext";

type DoodlesProps = {
    isLoading: boolean;
    data: Doodle[];
}

export const Doodles = ({
    isLoading,
    data,
}: DoodlesProps) => {
    const { favoritesFilter, showFavorites, clearFilters } = useContext(FilterContext)

    if (isLoading) return (
        <Flex justify="center" align="center">
            <Text c="white"> Loading... </Text>
        </Flex>
    )

    if (!data || data?.length === 0) return (
        <Flex justify="center" align="center" direction="column" gap={12}>
            <Text fz="xl" c="white" fw={500}> Sorry! No doodles found for filters. Try a different search or tag. </Text>
            <Button onClick={clearFilters} color="red">
                Clear Filters
            </Button>
        </Flex>
    )

    if (showFavorites && !favoritesFilter) return (
        <Flex justify="center" align="center" direction="column" gap={12}>
            <Text fz="xl" c="white" fw={500}> You have not favorited any doodles yet! You can favorite a doodle by on clicking the heart icon.</Text>
            <Button onClick={clearFilters} color="red">
                Clear Filters
            </Button>
        </Flex>
    )

    return (
        <DoodleGrid>
            {data.map((doodle: Doodle) => (
                <DoodleCard
                    id={doodle.id}
                    tags={doodle.tags}
                    tumblr_image_url={doodle.tumblr_image_url}
                    background_color={doodle.background_color}
                    key={doodle.id}
                />
            ))}
        </DoodleGrid>
    )
}
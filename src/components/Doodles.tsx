import { Dispatch, SetStateAction } from "react";
import { Text, Flex } from "@mantine/core";
import { DoodleGrid } from "./DoodleGrid";
import { DoodleCard } from "./DoodleCard";
import { Doodle } from "../types";

type DoodlesProps = {
    isLoading: boolean;
    data: Doodle[];
}

export const Doodles = ({
    isLoading,
    data,
}: DoodlesProps) => {
    if (isLoading) return (
        <Text> Loading... </Text>
    )

    if (!data || data?.length === 0) return (
        <Flex justify="center" align="center">
            <Text fz="xl" c="white" fw={500}> Sorry! No doodles found for these parameters. Try a different search or tag. </Text>
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
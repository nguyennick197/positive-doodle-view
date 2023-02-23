import { Space, Flex } from "@mantine/core";
import { SearchInput } from "../molecules/SearchInput";
import { TagSelect } from "../molecules/TagSelect";
import { useWindowSize } from "../../hooks/useWindowSize";
import { StickyHeader } from "../atoms/StickyHeader";
import { FavoritesSwitch } from "../molecules/FavoritesSwitch";
import { FiltersButton } from "../molecules/FiltersButton";

export const HeaderContainer = () => {
    const windowSize = useWindowSize();

    return (
        <StickyHeader>
            <Flex justify="space-between" align="center">
                <div>
                    <h1> Positive Doodles </h1>
                    <p> originally drawn by <a href="https://www.patreon.com/emmnotemma" target="_blank"> Emm Roy </a> </p>
                </div>
                {windowSize > 800 && (
                    <>
                        <SearchInput />
                        <TagSelect />
                        <Flex>
                            <FavoritesSwitch />
                            <Space w={40} />
                        </Flex>
                    </>
                )}
                {windowSize < 800 && (
                    <Flex gap={16}>
                        <FiltersButton />
                        <Space w={20} />
                    </Flex>
                )}
            </Flex>

        </StickyHeader>
    )
}
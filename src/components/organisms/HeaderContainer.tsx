import { useContext } from "react";
import { Space, Button, Flex, Switch } from "@mantine/core";
import { SearchInput } from "../molecules/SearchInput";
import { TagSelect } from "../molecules/TagSelect";
import { HeartIcon } from "../../icons/HeartIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { useWindowSize } from "../../hooks/useWindowSize";
import { StickyHeader } from "../atoms/StickyHeader";
import { FilterContext } from "../../contexts/FilterContext";
import { FavoritesSwitch } from "../molecules/FavoritesSwitch";

export const HeaderContainer = () => {
    const windowSize = useWindowSize();

    const { toggleFilterModalOpened } = useContext(FilterContext)

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
                        <Button
                            leftIcon={<SettingsIcon size="20" />}
                            onClick={toggleFilterModalOpened}
                        >
                            Filters
                        </Button>
                        {/* <Button
                            onClick={toggleFilterModalOpened}
                            color="red"
                            compact
                        >
                            Clear Filters
                        </Button> */}
                        <Space w={20} />
                    </Flex>
                )}
            </Flex>

        </StickyHeader>
    )
}
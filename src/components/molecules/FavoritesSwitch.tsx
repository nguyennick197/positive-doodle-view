import { useContext } from "react";
import { Flex, Text, Switch } from "@mantine/core"
import { ChangeEvent } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { HeartIcon } from "../../icons/HeartIcon"

type FavoritesSwitchProps = {
    showLabel?: boolean;
}

export const FavoritesSwitch = ({ 
    showLabel 
}: FavoritesSwitchProps) => {

    const { showFavorites, setShowFavorites, setPage } = useContext(FilterContext);

    const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
        setShowFavorites(event.currentTarget.checked);
        setPage(1);
    }

    return (
        <Flex gap={12}>
            {showLabel && <Text> Show Favorites </Text> }
            <Switch
                size="md"
                onLabel={<HeartIcon size="20" fill="red" />}
                offLabel={<HeartIcon size="20" fill="grey" />}
                checked={showFavorites}
                onChange={handleClick}
            />
        </Flex>
    )
}
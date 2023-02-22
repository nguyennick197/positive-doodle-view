import { useContext } from "react";
import { Flex, Text, Switch } from "@mantine/core"
import { FilterContext } from "../../contexts/FilterContext";
import { HeartIcon } from "../../icons/HeartIcon"

type FavoritesSwitchProps = {
    showLabel?: boolean;
}

export const FavoritesSwitch = ({ 
    showLabel 
}: FavoritesSwitchProps) => {

    const { showFavorites, setShowFavorites } = useContext(FilterContext);

    return (
        <Flex gap={12}>
            {showLabel && <Text> Show Favorites </Text> }
            <Switch
                size="md"
                onLabel={<HeartIcon size="20" fill="red" />}
                offLabel={<HeartIcon size="20" fill="grey" />}
                checked={showFavorites}
                onChange={(event) => setShowFavorites(event.currentTarget.checked)}
            />
        </Flex>
    )
}
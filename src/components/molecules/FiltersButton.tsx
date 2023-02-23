import { useContext, useMemo } from "react";
import { Button } from "@mantine/core";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { NotificationBadge } from "./NotificationBadge";
import { FilterContext } from "../../contexts/FilterContext";

export const FiltersButton = () => {
    const { toggleFilterModalOpened, tag, search, favoritesFilter } = useContext(FilterContext)

    const filterCount = useMemo(() => {
        let count = 0;
        if (tag) count++;
        if (search) count++;
        if (favoritesFilter) count++;
        return count;
    }, [tag, search, favoritesFilter]);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <Button
                leftIcon={<SettingsIcon size="20" />}
                onClick={toggleFilterModalOpened}
            >
                Filters
            </Button>
            {filterCount > 0 && <NotificationBadge count={filterCount} />}
        </div>
    )
}
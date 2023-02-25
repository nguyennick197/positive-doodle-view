import { useContext } from "react";
import { Modal, Button, Flex, Space, Divider } from "@mantine/core";
import styled from "@emotion/styled";
import { SearchInput } from "../molecules/SearchInput";
import { TagSelect } from "../molecules/TagSelect";
import { FavoritesSwitch } from "../molecules/FavoritesSwitch";
import { FilterContext } from "../../contexts/FilterContext";

type FilterModalProps = {
    opened: boolean;
    toggleOpened: () => void;
}

const ModalHeader = styled.div`
    position: absolute;
    top: 14px;
    left: 0;
    font-size: 32px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    width: 80%;

    p {
        margin: 8px;
    }
`

export const FilterModal = ({
    opened,
    toggleOpened
}: FilterModalProps) => {

    const { clearFilters } = useContext(FilterContext);

    return (
        <Modal
            opened={opened}
            onClose={toggleOpened}
            fullScreen
        >
            <ModalHeader>
                <p>
                    Filters
                </p>
                <Button
                    color="red"
                    onClick={clearFilters}
                    aria-label="Clear Filters Button"
                >
                    Clear Filters
                </Button>
            </ModalHeader>
            <Divider />
            <Space h={60} />
            <Flex direction="column" align="center" justify="center" gap={40}>
                <SearchInput showLabel showSearchIcon/>
                <TagSelect showLabel />
                <FavoritesSwitch showLabel />
            </Flex>
        </Modal>
    )
}
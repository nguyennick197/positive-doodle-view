import styled from "@emotion/styled";
import { Space, Button, Flex, Switch } from "@mantine/core";
import { SearchInput } from "./SearchInput";
import { TagSelect } from "./TagSelect";
import { HeartIcon } from "../icons/HeartIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { useWindowSize } from "../hooks/useWindowSize";

export const StickyHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    z-index: 10;
    height: 54px;
    background-color: white;
    border: 1px solid black;

    @media (max-width: 576px) {
        padding: 8px;
        height: 50px;
    }

    h1 {
        margin: 0;
        font-size: 32px;
        background: -webkit-linear-gradient(#d8a6c7, #3B5785);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 576px) {
            font-size: 22px;
        }
    }

    p {
        margin: 0px;
    }
`

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
                            <Switch
                                size="md"
                                onLabel={<HeartIcon size="20" fill="red" />}
                                offLabel={<HeartIcon size="20" fill="grey" />}
                            />
                            <Space w={40} />
                        </Flex>
                    </>
                )}
                {windowSize < 800 && (
                    <Flex>
                        <Button
                              leftIcon={<SettingsIcon size="20" />}
                        >
                            Filters
                        </Button>
                        <Space w={40} />

                    </Flex>
                )}
            </Flex>

        </StickyHeader>
    )
}
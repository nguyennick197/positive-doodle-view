import styled from "@emotion/styled";
import { Space, Button, Flex } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { SearchInput } from "./SearchInput";
import { TagSelect } from "./TagSelect";
import { HeartIcon } from "../icons/HeartIcon";

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
    return (
        <StickyHeader>
            <Flex justify="space-between" align="center">
                <div>
                    <h1> Positive Doodles </h1>
                    <p> originally drawn by <a href="https://www.patreon.com/emmnotemma" target="_blank"> Emm Roy </a> </p>
                </div>
                <SearchInput />
                <TagSelect />
                <Flex>
                    <Button
                        rightIcon={<HeartIcon fill="red" />}
                    >
                        Favorites
                    </Button>
                    <Space w={40} />
                </Flex>
            </Flex>

        </StickyHeader>
    )
}
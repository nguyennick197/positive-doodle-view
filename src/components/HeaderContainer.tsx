import styled from "@emotion/styled";
import { Space } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { SearchBar } from "./SearchBar";
import { TagSelect } from "./TagSelect";

export const StickyHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    z-index: 10;
    background-color: white;
    height: 54px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

        @media (max-width: 576px) {
            font-size: 13px;
        }
    }

    input {
        width: 200px;

        @media (max-width: 650px) {
            width: 100px;
        }
    }
`

export const HeaderContainer = () => {
    return (
        <StickyHeader>
            <div>
                <h1> Positive Doodles </h1>
                <p> originally drawn by <a href="https://www.patreon.com/emmnotemma" target="_blank"> Emm Roy </a> </p>
            </div>
            <SearchBar />
            <TagSelect />
            <Space />
        </StickyHeader>
    )
}
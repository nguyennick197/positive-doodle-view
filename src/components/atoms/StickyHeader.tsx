import styled from "@emotion/styled";

export const StickyHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    z-index: 10;
    height: 54px;
    background-color: white;
    border-bottom: 1px solid #ccc;

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
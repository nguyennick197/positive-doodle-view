import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px) {
        gap: 6px;
        padding: 6px;
        font-size: 14px;

        button {
            font-size: 16px;
            padding: 0;
            width: 40px;
        }

        input {
            font-size: 12px
            width: 100px;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        gap: 8px;
        padding: 15px;

        button {
            font-size: 18px;
            margin: 0 10px;
            padding: 8px 15px;
        }
    }

    @media (min-width: 769px) {
        gap: 8px;
        padding: 20px;

        button {
            font-size: 20px;
            margin: 0 15px;
            padding: 10px 20px;
        }
    }
`
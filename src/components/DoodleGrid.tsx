import styled from '@emotion/styled';

export const DoodleGrid = styled.div`
    @media screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 20px;
    }
`
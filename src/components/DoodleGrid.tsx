import styled from '@emotion/styled';

export const DoodleGrid = styled.div`
        justify-items: center;
        align-items: center;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        @media (min-width: 769px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
        }

        @media (min-width: 980px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
`
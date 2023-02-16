import styled from '@emotion/styled';

export const HeartButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease-out;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.8);
  }

  &:focus {
    outline: none;
  }

  svg {
    fill: ${props => (props.active ? 'red' : 'gray')};
    transition: fill 0.2s ease-out;

    &:hover {
      fill: ${props => (props.active ? 'red' : 'darkgray')};
    }
  }
`;

import styled from '@emotion/styled';

export const SvgButton = styled.button<{ active: boolean, isHeart?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease-out;
  padding: 0;
  margin: 0;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.8);
  }

  &:focus {
    outline: none;
  }

  ${props => (props.isHeart && (
    `svg {
      fill: ${props.active ? 'red' : 'gray'};
      transition: fill 0.2s ease-out;
  
      &:hover {
        fill: ${props.active ? 'red' : 'darkgray'};
      }
    }`
  ))}
`;

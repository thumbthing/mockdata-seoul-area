import styled from 'styled-components';

export const DetailBox = styled.div<{ mouseX: number; mouseY: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 0;
  top: ${({ mouseY }) => mouseY}px;
  left: ${({ mouseX }) => mouseX}px;
  position: absolute;
  background-color: white;
  border: 0.2px solid;
  min-width: 130px;
`;

export const DetailText = styled.h6`
  margin: 1px;
`;

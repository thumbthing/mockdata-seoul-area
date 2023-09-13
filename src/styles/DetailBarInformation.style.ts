import styled from 'styled-components';

export const DetailBox = styled.div<{ x: number; y: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 0;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: absolute;
  background-color: white;
  border: 0.2px solid;
  min-width: 130px;
`;

export const DetailText = styled.h6`
  margin: 1px;
`;

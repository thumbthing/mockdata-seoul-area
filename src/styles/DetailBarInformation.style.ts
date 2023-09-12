import styled from 'styled-components';

export const DetailBox = styled.div<{ x: number; y: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 0;
  top: ${({ x }) => x}px;
  left: ${({ y }) => y}px;
  position: absolute;
  background-color: white;
  border: 0.2px solid;
  min-width: 130px;
`;

export const DetailText = styled.h6`
  margin: 1px;
`;

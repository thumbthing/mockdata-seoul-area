import styled from 'styled-components';

export const GraphBarContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1px;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-right: 1px solid;
  max-height: 400px;
  z-index: 1;
  position: absolute;
  min-height: 315px;
  opacity: 0.75;
`;

export const GraphList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: flex-end;
  max-height: 400px;
`;

export const SingleItem = styled.li`
  list-style: none;
`;

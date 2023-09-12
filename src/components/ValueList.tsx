import React from 'react';
import styled from 'styled-components';
import { MockContext } from '../context/State.Context';
import ValueBar from './ValueBar';

const GraphList = styled.ul`
  flex-direction: column-reverse;
  padding: 1px;
  align-items: center;
  width: 1250px;
`;

const SingleItem = styled.li`
  list-style: none;
  display: inline-flex;
`;

function ValueList() {
  const { state } = MockContext();
  const { GraphData } = state;

  const List = () => {
    const result = GraphData.map((item, index) => (
      <SingleItem key={item.timestamp}>
        <ValueBar index={index} />
      </SingleItem>
    ));
    return result;
  };
  const createdList = List();

  return (
    <div>
      <GraphList>{createdList}</GraphList>
    </div>
  );
}

export default ValueList;

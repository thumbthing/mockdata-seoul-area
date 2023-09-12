import React from 'react';
import { MockContext } from '../context/State.Context';
import ValueBar from './ValueBar';
import { GraphBarContainer, GraphList, SingleItem } from '../styles/ValueList.style';

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
    <GraphBarContainer>
      <GraphList>{createdList}</GraphList>
    </GraphBarContainer>
  );
}

export default ValueList;

import React from 'react';
import styled from 'styled-components';
import { MockContext } from '../context/State.Context';

const Bar = styled.div<{ height: number }>`
  width: 10px;
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
  border: 1px solid white;
  background-color: grey;
  margin: 0.25px;
`;

interface ValueBarProps {
  index: number;
}

function ValueBar({ index }: ValueBarProps) {
  const { state } = MockContext();
  const { GraphData } = state;

  const singleData = GraphData[index];
  const caculateHeight = (valueBar: number) => {
    const height = Math.round(valueBar / 50);
    return height;
  };
  const height = caculateHeight(singleData.value_bar);

  return <Bar height={height}> </Bar>;
}

export default ValueBar;

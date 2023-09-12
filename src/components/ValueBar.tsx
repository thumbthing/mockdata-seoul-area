import React from 'react';
import styled from 'styled-components';
import { MockContext } from '../context/State.Context';

const Bar = styled.div<{ height: number; isHovered: boolean }>`
  width: 10px;
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
  border: 1px solid white;
  background-color: ${(props) => (props.isHovered ? `black` : 'grey')};
  margin: 0.25px;
`;

interface ValueBarProps {
  index: number;
}

function ValueBar({ index }: ValueBarProps) {
  const { state, setState } = MockContext();
  const { GraphData, SelectedDataKey } = state;

  const singleData = GraphData[index];
  const caculateHeight = (valueBar: number) => {
    const height = Math.round(valueBar / 50);
    return height;
  };

  const height = caculateHeight(singleData.value_bar);

  const isHovered = singleData.id === SelectedDataKey;

  const insertDatakey = (hoverdItemId: string) => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: hoverdItemId }));
  };

  const handleMouseLeave = () => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: '' }));
  };

  return (
    <Bar
      height={height}
      isHovered={isHovered}
      onMouseEnter={() => insertDatakey(singleData.id)}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => insertDatakey(singleData.id)}
    />
  );
}

export default ValueBar;

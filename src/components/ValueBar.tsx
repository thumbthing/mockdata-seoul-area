import React from 'react';
import Bar from '../styles/ValueBar.style';
import { MockContext } from '../context/State.Context';

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

  const isHovered = (singleData.id === SelectedDataKey).toString();

  const insertDatakey = (hoverdItemId: string) => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: hoverdItemId }));
  };

  const handleMouseLeave = () => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: '' }));
  };

  return (
    <Bar
      height={height}
      ishovered={isHovered}
      onMouseEnter={() => insertDatakey(singleData.id)}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => insertDatakey(singleData.id)}
    />
  );
}

export default ValueBar;

import React from 'react';
import Bar from '../styles/ValueBar.style';
import { MockContext } from '../context/State.Context';
import DetailBarInformation from './DetailBarInformation';

interface ValueBarProps {
  index: number;
}

function ValueBar({ index }: ValueBarProps) {
  const { state, setState } = MockContext();
  const { GraphData, SelectedDataKey, SelectedDataValue } = state;

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

  const insertDataValue = () => {
    setState((prevState) => ({
      ...prevState,
      SelectedDataValue: {
        timestamp: singleData.timestamp,
        id: singleData.id,
        value_area: singleData.value_area,
        value_bar: singleData.value_bar,
      },
    }));
  };

  const handleMouseLeave = () => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: '' }));
  };

  const isSelectedData = SelectedDataValue && SelectedDataValue.timestamp === singleData.timestamp;

  return (
    <>
      <Bar
        height={height}
        ishovered={isHovered}
        onMouseEnter={() => insertDatakey(singleData.id)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => insertDataValue()}
      />
      {isSelectedData && <DetailBarInformation />}
    </>
  );
}

export default ValueBar;

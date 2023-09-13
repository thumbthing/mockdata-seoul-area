import React, { useState } from 'react';
import Bar from '../styles/ValueBar.style';
import { MockContext } from '../context/State.Context';
import DetailBarInformation from './DetailBarInformation';
import MouseLocationType from '../types/mouseLocation.type';

interface ValueBarProps {
  index: number;
}

function ValueBar({ index }: ValueBarProps) {
  const { state, setState } = MockContext();
  const { GraphData, SelectedDataKey, SelectedDataValue } = state;
  const [mouseLocation, setMouseLocation] = useState<MouseLocationType | null>(null);

  const singleData = GraphData[index];
  const caculateHeight = (valueBar: number) => {
    const height = Math.round(valueBar / 75);
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

  const recieveMouseLocation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    setMouseLocation({ x, y });
  };

  const handleMouseLeave = () => {
    setState((prevState) => ({ ...prevState, SelectedDataKey: '' }));
    setMouseLocation(null);
  };

  const isSelectedData = SelectedDataValue && SelectedDataValue.timestamp === singleData.timestamp && mouseLocation;

  return (
    <>
      <Bar
        height={height}
        ishovered={isHovered}
        onMouseEnter={() => insertDatakey(singleData.id)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          insertDataValue();
          recieveMouseLocation(e);
        }}
      />
      {isSelectedData && <DetailBarInformation mouselocation={mouseLocation} />}
    </>
  );
}

export default ValueBar;

import React from 'react';
import { AxisBarContainer, LabelValue } from '../styles/AxisBar.style';
import AxisBarType from '../types/axisBar.type';

type labelType = {
  id: string;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
};

function AxisBar({ axisLabel }: AxisBarType) {
  const area: labelType = {
    id: 'area',
    first: 0,
    second: 25,
    third: 50,
    fourth: 75,
    fifth: 100,
  };
  const bar: labelType = {
    id: 'bar',
    first: 20000,
    second: 18000,
    third: 16000,
    fourth: 14000,
    fifth: 12000,
  };

  const axisBar: labelType = axisLabel === 'area' ? area : bar;

  const AxisValue = (
    <LabelValue styleLabel={axisBar.id}>
      <h6>{axisBar.first}</h6>
      <h6>{axisBar.second}</h6>
      <h6>{axisBar.third}</h6>
      <h6>{axisBar.fourth}</h6>
      <h6>{axisBar.fifth}</h6>
    </LabelValue>
  );

  const AxisLine = (
    <svg width="10" height="500">
      <rect width="1" height="500" fill="black" />
    </svg>
  );

  return (
    <AxisBarContainer>
      {axisBar.id === 'area' ? AxisLine : AxisValue}
      {axisBar.id === 'area' ? AxisValue : AxisLine}
    </AxisBarContainer>
  );
}

export default AxisBar;

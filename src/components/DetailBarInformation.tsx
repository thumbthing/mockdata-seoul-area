import React from 'react';
import { MockContext } from '../context/State.Context';
import { DetailBox, DetailText } from '../styles/DetailBarInformation.style';
import MouseLocationType from '../types/mouseLocation.type';

interface DetailBarInformationProps {
  mouselocation: MouseLocationType | null;
}

function DetailBarInformation({ mouselocation }: DetailBarInformationProps) {
  const { state } = MockContext();
  const { SelectedDataValue } = state;

  const mouseX = mouselocation?.x || 0;
  const mouseY = mouselocation?.y || 0;

  return (
    <DetailBox mouseX={mouseX} mouseY={mouseY}>
      <DetailText>Data : {SelectedDataValue.timestamp}</DetailText>
      <DetailText>area : {SelectedDataValue.id}</DetailText>
      <DetailText>Value 1 : {SelectedDataValue.value_bar}</DetailText>
      <DetailText>Value 2 : {SelectedDataValue.value_area}</DetailText>
    </DetailBox>
  );
}

export default DetailBarInformation;

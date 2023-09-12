import React from 'react';
import { MockContext } from '../context/State.Context';

function DetailBarInformation() {
  const { state } = MockContext();
  const { SelectedDataValue } = state;

  return (
    <div>
      <h6>Data : {SelectedDataValue.timestamp}</h6>
      <h6>area : {SelectedDataValue.id}</h6>
      <h6>Value 1 : {SelectedDataValue.value_bar}</h6>
      <h6>Value 2 : {SelectedDataValue.value_area}</h6>
    </div>
  );
}

export default DetailBarInformation;

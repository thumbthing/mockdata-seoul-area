import React, { useEffect } from 'react';
import { MockContext } from '../context/State.Context';
import { FunctionContext } from '../context/Service.context';
import errorHandler from '../utils/errorHandler';

function GraphPage() {
  const { state, setState } = MockContext();
  const { getData, dataParser, getFilteredData } = FunctionContext();
  const { GraphData, SelectedDataKey, SelectedDataValue } = state;

  const handleClick = async () => {
    try {
      const mockData = await getData();
      if (mockData) {
        const rawData = mockData.data.response;
        const parsedData = await dataParser(rawData);
        setState((prevState) => ({ ...prevState, GraphData: parsedData }));
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    console.log('GraphDate : ', GraphData);
    console.log('SelectedDataKey : ', SelectedDataKey);
    console.log('SelectedValue : ', SelectedDataValue);
    console.log('fn : 1 ', getData);
    console.log('fn : 2 ', dataParser);
    console.log('fn : 3 ', getFilteredData);
  }, []);

  useEffect(() => {
    console.log('GraphData from mock : ', GraphData);
  }, [GraphData]);

  return (
    <>
      <div>GraphPage</div>
      <div>
        <button type="button" onClick={handleClick}>
          get data
        </button>
      </div>
    </>
  );
}

export default GraphPage;

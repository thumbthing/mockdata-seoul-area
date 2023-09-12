import React, { useEffect } from 'react';
import { MockContext } from '../context/State.Context';
import { FunctionContext } from '../context/Service.context';
import errorHandler from '../utils/errorHandler';
import ValueList from '../components/ValueList';
import Canvas from '../components/Canvas';
import Container from '../styles/Container.style';

function GraphPage() {
  const { state, setState } = MockContext();
  const { getData, dataParser } = FunctionContext();
  const { GraphData } = state;
  // const { SelectedDataKey } = state;
  // const { SelectedDataValue } = state;

  const requestData = async () => {
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
    if (GraphData.length === 0) {
      setTimeout(() => requestData(), 2000);
    }
  }, [GraphData]);

  useEffect(() => {
    console.log('GraphData from mock : ', GraphData);
  }, [GraphData]);

  return (
    <>
      <div>GraphPage</div>
      <div>
        <button type="button" onClick={requestData}>
          get data
        </button>
      </div>
      <Container>
        <ValueList />
        <Canvas />
      </Container>
    </>
  );
}

export default GraphPage;

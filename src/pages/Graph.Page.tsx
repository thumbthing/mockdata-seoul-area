import React, { useEffect } from 'react';
import { MockContext } from '../context/State.Context';
import { FunctionContext } from '../context/Service.context';
import ValueList from '../components/ValueList';
import Canvas from '../components/CanvasChart';
import { Container, GraphBox } from '../styles/Container.style';
import AxisBar from '../components/AxisBar';
import errorHandler from '../utils/errorHandler';

function GraphPage() {
  const { state, setState } = MockContext();
  const { requestData } = FunctionContext();
  const { GraphData } = state;

  const handleResponse = async () => {
    try {
      const graphData = await requestData();
      if (graphData) {
        setState((prevState) => ({ ...prevState, GraphData: graphData }));
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (GraphData.length === 0) {
      setTimeout(() => handleResponse(), 2000);
    }
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
        <GraphBox>
          <AxisBar axisLabel="bar" />
          <ValueList />
          <AxisBar axisLabel="area" />
        </GraphBox>
        <Canvas />
      </Container>
    </>
  );
}

export default GraphPage;

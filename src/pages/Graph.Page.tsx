import React, { useEffect, useState } from 'react';
import { MockContext } from '../context/State.Context';
import { FunctionContext } from '../context/Service.context';
import ValueList from '../components/ValueList';
import Canvas from '../components/CanvasChart';
import { Container, GraphBox } from '../styles/Container.style';
import AxisBar from '../components/AxisBar';
import errorHandler from '../utils/errorHandler';
import { Spinner } from '../styles/Loading.style';

function GraphPage() {
  const { state, setState } = MockContext();
  const { requestData } = FunctionContext();
  const { GraphData } = state;

  const [isLoading, setIsLoading] = useState(true);

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
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const clearTimer = (timer: NodeJS.Timeout) => {
      clearTimeout(timer);
    };

    return () => {
      clearTimer(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (GraphData.length === 0) {
      setTimeout(() => handleResponse(), 2000);
    }
  }, [GraphData]);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AxisBar axisLabel="bar" />
          <GraphBox>
            <ValueList />
            <Canvas />
          </GraphBox>
          <AxisBar axisLabel="area" />
        </>
      )}
    </Container>
  );
}

export default GraphPage;

import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, ErrorContainer } from '../styles/Error.page.style';

function ErrorPage() {
  const [second, setSecond] = useState(5);

  const navigate = useNavigate();

  const redirectToGraphPage = useCallback(() => {
    setTimeout(() => {
      navigate('/graph');
    }, 5000);
  }, []);

  const timer = useCallback(() => {
    setTimeout(() => {
      setSecond(second - 1);
    }, 1000);
  }, [second]);

  useEffect(() => {
    timer();
    redirectToGraphPage();
  }, [second]);

  return (
    <ErrorContainer>
      <Box>
        <h1>잘못된 경로로 접속하셨습니다</h1>
      </Box>
      <Box>
        <h3>잠시만 기다려 주세요</h3>
        <h3>{second}초 후에 Graph 페이지로 이동합니다</h3>
      </Box>
    </ErrorContainer>
  );
}

export default ErrorPage;

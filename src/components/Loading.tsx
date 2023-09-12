import React from 'react';
import { LoadingOverlay, Spinner } from '../styles/Loading.style';

function Loading() {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
}

export default Loading;

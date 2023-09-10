import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { MockProvider } from './context/State.Context';
import { ServiceProvider } from './context/Service.context';

function App() {
  return (
    <BrowserRouter>
      <MockProvider>
        <ServiceProvider>
          <Router />
        </ServiceProvider>
      </MockProvider>
    </BrowserRouter>
  );
}

export default App;

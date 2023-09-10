import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    import('./mocks/browser').then((worker) => {
      worker.default.start();
    });
  }
  return Promise.resolve();
}

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/graph') {
      window.location.pathname = '/graph/';
      return null;
    }

    import('./mocks/browser').then((worker) => {
      worker.default.start({
        serviceWorker: {
          url: '/mockServiceWorker.js',
        },
      });
    });
  }
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

prepare()
  .then(() => main())
  .then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });

reportWebVitals();

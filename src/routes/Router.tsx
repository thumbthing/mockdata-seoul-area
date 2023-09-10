import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routePath from './routePath';
import GraphPage from '../pages/Graph.Page';
import ErrorPage from '../pages/Error.Page';

const Path = {
  home: routePath.home.path,
  graph: routePath.graph.path,
  error: routePath.error.path,
  errorReplace: '*',
};

const Router = () => {
  const routeList = [
    {
      path: Path.home,
      element: <Navigate to={Path.graph} />,
      replace: true,
    },
    {
      path: Path.graph,
      element: <GraphPage />,
    },
    {
      path: Path.error,
      element: <ErrorPage />,
    },
    {
      path: Path.errorReplace,
      element: <Navigate to={Path.error} />,
    },
  ];

  const routes = useRoutes(routeList);

  return routes;
};

export default Router;

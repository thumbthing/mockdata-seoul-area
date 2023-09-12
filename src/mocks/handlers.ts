import { rest } from 'msw';
import mockData from './mockData.json';

const handlers = [
  rest.get('http://localhost:4000/graph_mockdata', (req, res, ctx) => {
    const data = mockData;

    return res(ctx.status(200), ctx.json(data));
  }),
];

export default handlers;

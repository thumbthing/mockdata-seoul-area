import { rest } from 'msw';
import mockData from './mockData.json';
import jsonType from '../types/json.type';

const handlers = [
  rest.get<jsonType[]>('/graph', (req, res, ctx) => {
    const data = mockData;

    return res(ctx.status(200), ctx.json(data));
  }),
];

export default handlers;

import errorHandler from '../utils/errorHandler';
import httpInstance from './httpInstance';
import mockData from '../mocks/mockData.json';

export const getMockData = async () => {
  try {
    const response = await httpInstance.get('/graph_mockdata');
    if (response?.status !== 200) {
      throw new Error('fail to get data from server.....');
    }
    return response;
  } catch (error) {
    errorHandler(error);
    return null;
  }
};

export const getData = async () => {
  try {
    const jsonData = JSON.stringify(mockData);
    const response = new Response(jsonData, {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    errorHandler(error);
    return null;
  }
};

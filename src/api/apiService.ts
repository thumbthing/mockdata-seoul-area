import errorHandler from '../utils/errorHandler';
import httpInstance from './httpInstance';

const getData = async () => {
  try {
    const response = await httpInstance.get('/graph');
    if (response?.status !== 200) {
      throw new Error('fail to get data from server.....');
    }
    return response;
  } catch (error) {
    errorHandler(error);
    return null;
  }
};

export default getData;

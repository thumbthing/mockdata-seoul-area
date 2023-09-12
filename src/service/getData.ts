import { getData, getMockData } from '../api/apiService';
import dataParser from '../utils/dataParser';
import errorHandler from '../utils/errorHandler';

const requestData = async () => {
  try {
    const mockServerData = await getMockData();
    if (mockServerData) {
      const { response } = mockServerData.data.response;
      const parsedData = await dataParser(response);
      return parsedData;
    }
  } catch (error) {
    console.log('mock server is dead....', error);
    try {
      const jsonData = await getData();

      if (jsonData) {
        console.log('there is a data inside json');

        const responseData = await jsonData.json();
        const rawData = await responseData.response;
        const parsedData = await dataParser(rawData);

        return parsedData;
      }
    } catch (responseError) {
      errorHandler(responseError);
      return null;
    }
  }
  return null;
};

export default requestData;

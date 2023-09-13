import { getData } from '../api/apiService';
import dataParser from '../utils/dataParser';
import errorHandler from '../utils/errorHandler';

const requestData = async () => {
  try {
    const jsonData = await getData();

    if (jsonData) {
      console.log('there is a data inside json');

      const responseData = await jsonData.json();
      const rawData = await responseData.response;
      const parsedData = await dataParser(rawData);

      return parsedData;
    }
    return null;
  } catch (responseError) {
    errorHandler(responseError);
    return null;
  }
};
// };

export default requestData;

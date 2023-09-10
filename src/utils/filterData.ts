import { GraphDataType } from '../types/state.type';

const getFiltedData = (data: GraphDataType[]) => {
  const result = data.filter((item) => item.id === '강남구');
  return result;
};

export default getFiltedData;

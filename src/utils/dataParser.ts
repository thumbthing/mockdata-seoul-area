import { GraphDataType } from '../types/state.type';

const dataParser = (rawData: Record<string, GraphDataType>) => {
  const ParsedData: GraphDataType[] = [];

  Object.keys(rawData).forEach((timestamp) => {
    const data = rawData[timestamp];
    const parsedObj = {
      timestamp,
      id: data.id,
      value_area: data.value_area,
      value_bar: data.value_bar,
    };
    ParsedData.push(parsedObj);
  });

  return ParsedData;
};

export default dataParser;

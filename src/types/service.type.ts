import { AxiosResponse } from 'axios';
import { GraphDataType } from './state.type';

export interface serviceType {
  getData: () => Promise<AxiosResponse | null>;
  /* eslint-disable no-unused-vars */
  dataParser: (rawData: Record<string, GraphDataType>) => GraphDataType[];
  /* eslint-disable no-unused-vars */
  getFiltedData: (data: GraphDataType[]) => GraphDataType[];
}

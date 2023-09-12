import { GraphDataType } from './state.type';

export interface serviceType {
  requestData: () => Promise<GraphDataType[] | null>;
  /* eslint-disable no-unused-vars */
  getFilteredData: (data: GraphDataType[]) => GraphDataType[];
}

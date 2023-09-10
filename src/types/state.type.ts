export type GraphDataType = {
  timestamp: string;
  id: string;
  value_area: number;
  value_bar: number;
};

export type SelectedDataId = string;

export type StateType = {
  GraphData: GraphDataType[];
  SelectedDataKey: SelectedDataId;
  SelectedDataValue: GraphDataType;
};

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { StateType } from '../types/state.type';

const defaultState: StateType = {
  GraphData: [],
  SelectedDataKey: '',
  SelectedDataValue: {
    key: {
      id: '',
      value_area: 0,
      value_bar: 0,
    },
  },
};

const StateContext = createContext<
  { state: StateType; setState: React.Dispatch<React.SetStateAction<StateType>> } | undefined
>(undefined);

export const MockContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useMock must be used within a MockProvider');
  }
  return context;
};

export function MockProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StateType>(defaultState);
  const memorizedState = useMemo(() => ({ state, setState }), [state]);

  return <StateContext.Provider value={memorizedState}>{children}</StateContext.Provider>;
}

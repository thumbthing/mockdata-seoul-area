import React, { ReactNode, createContext, useContext } from 'react';
import getData from '../api/apiService';
import dataParser from '../utils/dataParser';
import getFiltedData from '../utils/filterData';
import { serviceType } from '../types/service.type';

const defaultFunction: serviceType = {
  getData,
  dataParser,
  getFiltedData,
};

const ServiceContext = createContext<serviceType>(defaultFunction);

export const FunctionContext = () => useContext(ServiceContext);

export function ServiceProvider({ children }: { children: ReactNode }) {
  return <ServiceContext.Provider value={defaultFunction}>{children}</ServiceContext.Provider>;
}

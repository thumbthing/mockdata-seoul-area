import React, { ReactNode, createContext, useContext } from 'react';
import requestData from '../service/getData';
import getFilteredData from '../utils/filterData';
import { serviceType } from '../types/service.type';

const defaultFunction: serviceType = {
  requestData,
  getFilteredData,
};

const ServiceContext = createContext<serviceType>(defaultFunction);

export const FunctionContext = () => useContext(ServiceContext);

export function ServiceProvider({ children }: { children: ReactNode }) {
  return <ServiceContext.Provider value={defaultFunction}>{children}</ServiceContext.Provider>;
}

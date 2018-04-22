import {AppState} from "./models";


export const getInterfaces = (state: AppState) => state.sysInfo.interfaces;
export const getMemory = (state: AppState) => state.sysInfo.memory;
export const getError = (state: AppState) => state.sysInfo.error;


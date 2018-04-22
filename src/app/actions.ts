
import {Action} from "@ngrx/store";
import {Memory, NetInterface} from "./models";

export const FETCH_MEMORY = '[Memory] FETCH';
export const GOT_MEMORY = '[Memory COMPLETE]';
export const ERROR_MEMORY = '[Memory] ERROR';

export const FETCH_NETINTERFACES = '[NetInterfaces] FETCH';
export const GOT_NETINTERFACES = '[NetInterfaces COMPLETE]';
export const ERROR_NETINTERFACES = '[NetInterfaces] ERROR';

export const fetchMemory = () => ({type: FETCH_MEMORY});

export class FetchMemory implements Action {
  readonly type = FETCH_MEMORY;
}

export class GotMemory implements Action {
  readonly  type = GOT_MEMORY;
  constructor(public payload: Memory) {}
}

export class ErrorMemory implements Action {
  readonly  type = ERROR_MEMORY;
  constructor(public payload: string) {}
}

export const fetchNetInterfaces = () => ({type: FETCH_NETINTERFACES});

export class FetchNetInterfaces implements Action {
  readonly type = FETCH_NETINTERFACES;
}

export class GotNetInterfaces implements Action {
  readonly  type = GOT_NETINTERFACES;
  constructor(public payload: NetInterface[]) {}
}

export class ErrorNetInterfaces implements Action {
  readonly  type = ERROR_NETINTERFACES;
  constructor(public payload: string) {}
}

export type  All = GotMemory | ErrorMemory | GotNetInterfaces | ErrorNetInterfaces
  | FetchNetInterfaces | FetchMemory;

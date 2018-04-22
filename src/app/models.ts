
export interface NetInterface {
  iface: string;
  ip4: string;
  ip6: string;
  mac: string;
  internal: boolean;
}

export interface Memory {
  total: number;
  free: number;
  used: number;
  active: number;
  available: number;
  buffcache: number;
  swaptotal: number;
  swapused: number;
  swapfree: number;
}

export interface SysInfoState {
  interfaces: NetInterface[];
  memory: Memory | {};
  loading: boolean;
  error: string;
}

export interface AppState {
  sysInfo: SysInfoState;
}

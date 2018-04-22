
import {SysInfoState} from './models';
import * as SysInfoActions from './actions';

export type Action = SysInfoActions.All;

const defaultState: SysInfoState = {
  interfaces: [],
  memory: {},
  loading: false,
  error: ''
};

export function SysInfoReducer(state = defaultState, action: Action) {
  console.log( state, action);

  switch (action.type) {
    case SysInfoActions.FETCH_NETINTERFACES:
      return { ... state, loading: true, error: ''};

    case SysInfoActions.GOT_NETINTERFACES:
      return { ... state, interfaces: action.payload, loading: false};

    case SysInfoActions.ERROR_NETINTERFACES:
      return { ... state, error: action.payload };

    case SysInfoActions.FETCH_MEMORY:
      return { ... state, loading: true, error: ''};

    case SysInfoActions.GOT_MEMORY:
      return { ... state, memory: { ... action.payload}};

    case SysInfoActions.ERROR_MEMORY:
      return { ... state, error: action.payload };

    default:
      return state;
  }
}

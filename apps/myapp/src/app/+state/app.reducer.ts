import {App} from './app.interfaces';
import {AppAction} from './app.actions';

export function appReducer(state: App, action: AppAction): App {
  switch (action.type) {
    case 'SOME_ACTION': {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}

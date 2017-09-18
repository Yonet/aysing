import { appReducer } from './app.reducer';
import { appInitialState } from './app.init';
import { App } from './app.interfaces';
import { SomeAction } from './app.actions';

describe('appReducer', () => {
  it('should work', () => {
    const state: App = {};
    const action: SomeAction = {type: 'SOME_ACTION', payload: {}};
    const actual = appReducer(state, action);
    expect(actual).toEqual({});
  });
});

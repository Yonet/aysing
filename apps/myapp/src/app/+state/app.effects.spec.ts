import {Actions} from '@ngrx/effects';
import {readAll, hot} from '@nrwl/nx/testing';
import {AppEffects} from './app.effects';
import {of} from 'rxjs/observable/of';

describe('AppEffects', () => {
  describe('someEffect', () => {
    it('should work', async () => {
      const actions = new Actions(hot('-a-|', {a: {type: 'SOME_ACTION'}}));
      const effects = new AppEffects(actions);

      expect(await readAll(effects.someEffect)).toEqual([
        {type: 'OTHER_ACTION'}
      ]);
    });
  });
});

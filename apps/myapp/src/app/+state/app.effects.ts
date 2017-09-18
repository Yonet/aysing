import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppEffects {
  @Effect() someEffect = this.actions.ofType('SOME_ACTION').switchMap((a) => {
    // process the action
    return of({type: 'OTHER_ACTION'});
  });

  constructor(private actions: Actions) {}
}

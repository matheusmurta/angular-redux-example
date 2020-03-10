import { EquipamentService } from './../services/equipament.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import {
  map,
  switchMap,
  mergeMap,
  catchError,
} from 'rxjs/operators';
import * as Action from './equipament.actions';

@Injectable()
export class EquipamentEffects {
  constructor(private api: EquipamentService, private actions$: Actions) { }

  @Effect()
  loadAction$ = this.actions$.pipe(
    ofType<Action.LoadAction>(Action.EquipamentActionTypes.LOAD),
    switchMap(payload =>
      this.api.load().pipe(
        map(res => new Action.LoadActionSuccess({ equipament: res })),
        catchError(error => this.handleError(error)))
    ));

  @Effect()
  createAction$ = this.actions$.pipe(
    ofType<Action.CreateAction>(Action.EquipamentActionTypes.CREATE),
    map(action => action.payload),
    mergeMap(payload =>
      this.api.create(payload.equipament).pipe(
        map(res => new Action.CreateActionSuccess({ equipament: res })),
        catchError(error => this.handleError(error)))
    ));

  @Effect()
  updateAction$ = this.actions$
    .ofType<Action.UpdateAction>(Action.EquipamentActionTypes.UPDATE)
    .map(action => action.payload)
    .mergeMap(payload =>
      this.api.update(payload.equipament).pipe(
        map(res => new Action.UpdateActionSuccess({ equipament: res })),
        catchError(error => this.handleError(error)))
    );

  @Effect()
  removeAction$ = this.actions$
    .ofType<Action.RemoveAction>(Action.EquipamentActionTypes.REMOVE)
    .map(action => action.payload)
    .mergeMap(payload =>
      this.api.remove(payload.id).pipe(
        map(res => new Action.RemoveActionSuccess({ id: res })),
        catchError(error => this.handleError(error)))
    );

  private handleError(error) {
    return of(new Action.ErrorAction(error));
  }
}

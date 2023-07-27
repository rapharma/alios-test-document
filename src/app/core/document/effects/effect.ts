import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CpfService } from '../../services/cpf.service';
import * as CpfActions from '../actions/action';

@Injectable()
export class CpfEffects {
  constructor(
    private actions$: Actions,
    private cpfService: CpfService
  ) {}
  
  verifyCpf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CpfActions.verifyCpf),
      tap(action => console.log('Action received:', action)),
      switchMap(action => this.cpfService.verifyCpf(action.cpf).pipe(
        map(cpf => CpfActions.verifyCpfSuccess({ payload: cpf })),
        catchError((error) => {
          console.error('Error:', error);
          return of(CpfActions.verifyCpfFailure({ error }));
        })
      ))
    )
  );
  


}

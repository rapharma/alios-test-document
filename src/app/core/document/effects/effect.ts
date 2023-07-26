import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { checkCpf, checkCpfFailure, checkCpfSuccess } from '../actions/actions';
import { CpfService } from '../../services/cpf.service';

@Injectable()
export class CpfEffects {
    constructor(private actions$: Actions, private cpfService: CpfService) {}

    checkCpf$ = createEffect(() =>
        this.actions$.pipe(
        ofType(checkCpf),
        mergeMap((action) =>
            this.cpfService.checkCpf(action.cpf).pipe(
            map((result: { name: string; status: string; }) => checkCpfSuccess(result)),
            catchError(() => of(checkCpfFailure({ error: 'Failed to check CPF.' })))
            )
        )
        )
    );

}

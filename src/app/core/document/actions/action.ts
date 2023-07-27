import { createAction, props } from '@ngrx/store';
import { CpfState } from '../store/cpf';

export const verifyCpf = createAction(
    '[CPF] Verify',
    props<{ cpf: string }>()
);

export const verifyCpfSuccess = createAction(
    '[CPF] Verify Success',
    props<{ payload: CpfState }>()
);
  
export const verifyCpfFailure = createAction(
    '[CPF] Verify Failure',
    props<{ error: string }>()
);
import { createAction, props } from '@ngrx/store';
import { PersonState } from '../models/person';

export const verifyCpf = createAction(
    '[CPF] Verify',
    props<{ cpf: string }>()
);

export const verifyCpfSuccess = createAction(
    '[CPF] Verify Success',
    props<{ payload: PersonState }>()
);
  
export const verifyCpfFailure = createAction(
    '[CPF] Verify Failure',
    props<{ error: string }>()
);
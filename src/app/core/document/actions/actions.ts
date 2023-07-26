import { createAction, props } from '@ngrx/store';

export const checkCpf = createAction('[CPF] Check CPF', props<{ cpf: string }>());
export const checkCpfSuccess = createAction('[CPF] Check CPF Success', props<{ name: string; status: string }>());
export const checkCpfFailure = createAction('[CPF] Check CPF Failure', props<{ error: string }>());

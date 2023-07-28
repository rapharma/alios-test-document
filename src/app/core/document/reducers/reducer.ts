import { createReducer, on } from '@ngrx/store';
import * as CpfActions from '../actions/action';
import { AppState } from '../models/app-state';

export const initialState: AppState = {
  person: {
    name: '',
    status: '',
    app_account: '',
    bank_account: '',
    loading: false,
    error: null,
  }
}

export const cpfReducer = createReducer(
  initialState.person,
  on(CpfActions.verifyCpf, state => ({ ...state, loading: true, error: null })),
  on(CpfActions.verifyCpfSuccess, (state, { payload }) => ({ ...state, ...payload, loading: false })),
  on(CpfActions.verifyCpfFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

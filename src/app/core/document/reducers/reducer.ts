import { Action, createReducer, on } from '@ngrx/store';
import { checkCpf, checkCpfFailure, checkCpfSuccess } from '../actions/actions';
import { CpfState } from '../store/cpf';

export const initialState: CpfState = {
  name: '',
  status: '',
  loading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(checkCpf, (state: CpfState) => ({ ...state, loading: true, error: null })),
  on(checkCpfSuccess, (state: CpfState, { name, status }) => ({ ...state, name, status, loading: false })),
  on(checkCpfFailure, (state: CpfState, { error }) => ({ ...state, error, loading: false }))
);

export function cpfReducer(state: CpfState | undefined, action: Action) {
  return reducer(state, action);
}

import { createReducer, on } from '@ngrx/store';
import { googleLogin, googleLogout } from './user.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  user: null
};

const _userReducer = createReducer(
  initialState,
  on(googleLogin, (state, { user }) => ({ ...state, user: user })),
  on(googleLogout, (state) => ({ ...state, user: null }))
);

export function userReducer(state: AppState | undefined, action: any) {
  console.log(state,"h  urmi33h")
  return _userReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { User } from '../models/user';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  user: User | null,
  isAuthenticated:boolean,
}


export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialUsersState: UsersState = {
  user:null,
  isAuthenticated:false,
}

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.buildUserSession, (state) => ({ ...state })),
  on(UsersActions.buildUserSessionSuccess, (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: true
  })),
  on(UsersActions.buildUserSessionFailure, (state, action) => ({
    ...state,
    user: null,
    isAuthenticated: false
  }))
);



export function usersReducer(state: UsersState | undefined, action: Action) {


  return reducer(state, action);
}

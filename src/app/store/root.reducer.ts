import {AppState} from '../types/app-state/app-state.interface';

import {HomeActions, HomeActionsUnion} from './home.actions';

export function rootReducer(state: AppState = {}, action: HomeActionsUnion): AppState {

  if (action.type === HomeActions.FetchPicturesSuccess) {
    return {
      ...state,
      homeState: {
        pictures: action.pictures
      }
    };
  }

  return state;
}

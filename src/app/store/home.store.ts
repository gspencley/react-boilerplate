import { Dispatch } from 'react';
import { Action } from 'redux';

import { FetchPictures } from './home.actions';

export function fetchPictures(dispatch: Dispatch<Action>) {
  dispatch(new FetchPictures());
}

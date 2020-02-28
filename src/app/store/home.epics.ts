import { Action } from 'redux';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import {filter, map, mergeMap, take, tap} from 'rxjs/operators';

import { downloadPictures } from '../shared/picture/services/picture.service';

import { FetchPicturesSuccess, HomeActions } from './home.actions';

const fetchPictures$ = (actions$: Observable<Action>): Observable<Action> =>
  actions$.pipe(
    filter(action => action.type === HomeActions.FetchPictures),
    mergeMap(() => downloadPictures().pipe(map(pictures => new FetchPicturesSuccess(pictures))))
  );

const sayHello$ = (action$: Observable<Action>): Observable<Action> =>
  action$.pipe(
    tap(() => console.log('Hello')),
    take(1)
  );

export default combineEpics(fetchPictures$, sayHello$);

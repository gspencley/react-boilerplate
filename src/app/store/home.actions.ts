import { Action } from 'redux';

import { Picture } from '../shared/picture/types/picture.interface';

export enum HomeActions {
  FetchPictures = 'Home-FetchPictures',
  FetchPicturesSuccess = 'Home-FetchPicturesSuccess',
  FetchPicturesFailure = 'Home-FetchPicturesFailure'
}

export class FetchPictures implements Action {
  public readonly type = HomeActions.FetchPictures;
}

export class FetchPicturesSuccess implements Action {
  public readonly type = HomeActions.FetchPicturesSuccess;
  constructor(public pictures: Picture[]) {}
}

export type HomeActionsUnion = FetchPictures | FetchPicturesSuccess;

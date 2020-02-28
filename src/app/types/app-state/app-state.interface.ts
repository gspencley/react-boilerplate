import {Picture} from '../../shared/picture/types/picture.interface';

export interface AppState {
  homeState?: {
    pictures: Picture[];
  }
}

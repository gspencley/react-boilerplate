import { Observable } from 'rxjs';

import { get } from '../../http/services/http.service';
import { Picture } from '../types/picture.interface';

export function downloadPictures(): Observable<Picture[]> {
  return get<Picture[]>('/pictures');
}

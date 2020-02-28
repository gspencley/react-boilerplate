import axios from 'axios';
import { from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

const apiRoot = 'http://localhost:3001';

export function get<T>(url: string): Observable<T> {
  return from(axios.get<T>(getUrl(url))).pipe(
    map(response => response.data),
    take(1)
  );
}

function getUrl(url: string): string {
  return `${apiRoot}${url}`;
}

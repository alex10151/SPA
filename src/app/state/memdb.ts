import { Observable } from 'rxjs';
import { Item } from './store';

interface IdCacheMissError {
  id: string;
  type: 'cache miss error';
}
interface IdDeletedError {
  id: string;
  type: 'id deleted error';
}

export interface DatabaseCache<T> {
  create(model: T): Observable<number>;
  // get$ : Item observable of given id, next: updated value, complete: deleted / not existed
  get$(id: string): Observable<Item<T>>;
}

import { ModelType, DBItem, ModelOf, ItemOf, DBModel } from '../model';
import { Observable } from 'rxjs';

export interface DBError<T extends ModelType, ErrorType> {
  error: ErrorType;
  type: T;
}

export interface DubplicateIdError<T extends ModelType> {
  type: T;
  error: 'duplicate id error';
  id: string;
}

export interface IdNotFoundError<T extends ModelType> {
  type: T;
  error: 'id not found';
  id: string;
}

export function apiMap(type: ModelType) {
  switch (type) {
    case 'Patient':
      return 'patients';
    case 'Study':
      return 'studies';
    case 'Protocol':
      return 'protocols';
    case 'Scan':
      return 'scans';
    case 'Recon':
      return 'recons';
  }
}

export interface DB {
  create(model: DBModel): Observable<string>;
  get$<K extends ModelType>(type: K, id: string): Observable<ItemOf<K>>;
  getType$<K extends ModelType>(type: K): Observable<ItemOf<K>[]>;
  getAll$(): Observable<DBItem[]>;
  update(item: DBItem): Observable<never>;
  delete(item: DBItem): Observable<never>;
}

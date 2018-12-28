import { Injectable } from '@angular/core';
import { DB } from '../db';
import { ModelType, DBModel, DBItem, ModelOf, ItemOf } from '../../model';
import { Observable, of, Subject, Subscription, concat } from 'rxjs';
import { StoreByArray, EqOp, Item } from '../../store';
import {
  first,
  map,
  switchMap,
  filter,
  exhaustMap,
  mapTo
} from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { DbDebugService } from '../debug/db-debug.service';

interface TypedId {
  type: ModelType;
  id: string;
}

interface IdCacheMissError<T> {
  type: T;
  error: 'id cache miss';
  id: string;
}

const eqTypeId: EqOp<TypedId> = (x: TypedId) => (y: TypedId) =>
  x.id === y.id && x.type === y.type;

@Injectable({
  providedIn: 'root'
})
export class DBCacheService {
  private cache: StoreByArray<TypedId, DBItem>;
  // private initOp: Observable<never>;
  constructor(private db: DbDebugService) {
    this.cache = new StoreByArray<TypedId, DBItem>(eqTypeId);
    this.reloadAll();
  }
  currentItems(): DBItem[] {
    return this.cache.currentState();
  }
  reloadAll() {
    this.db
      .getAll$()
      .pipe(
        first(),
        exhaustMap(items => this.cache.setState(items))
      )
      .subscribe();
  }
  create<K extends ModelType>(model: ModelOf<K>): Observable<string> {
    // return this.db.create(model).pipe(
    //   first(),
    //   switchMap(id => this.fetch(model.type, id)),
    //   map(item => item.id)
    // );
    return new Observable<string>(obs => {
      const id = uuid();
      this.cache.insert({ ...(model as object), id } as ItemOf<K>);
      obs.next(id);
      obs.complete();
    });
  }
  fetch<K extends ModelType>(type: K, id: string): Observable<ItemOf<K>> {
    return new Observable<ItemOf<K>>(obs => {
      this.db.get$(type, id).subscribe(
        item => {
          this.cache.insert(item);
          obs.next(item);
        },
        obs.error,
        obs.complete
      );
    });
  }
  get$<K extends ModelType>(type: K, id: string): Observable<ItemOf<K>> {
    return this.cache.get$({ type, id }) as Observable<ItemOf<K>>;
  }
  ofType$<K extends ModelType>(type: K): Observable<ItemOf<K>[]> {
    return this.cache.state$.pipe(
      map(state => state.filter(item => item.type === type) as ItemOf<K>[])
    );
  }
  get all$() {
    return this.cache.state$;
  }
  update(...item: DBItem[]) {
    return this.cache.update(...item);
  }
  delete(item: DBItem) {
    return this.cache.remove(item);
  }
}

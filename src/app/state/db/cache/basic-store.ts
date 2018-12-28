import { DB } from '../db';
import { DBModel, ModelType, ItemOf, ModelOf } from '../../model';
import {
  concatMap,
  map,
  filter,
  switchMap,
  first,
  share
} from 'rxjs/operators';
import { noop, Observable, empty, of } from 'rxjs';
import { Store, Item, StoreByArray, WithId } from '../../store';
import { DBCacheService } from './db-cache.service';
import { v4 as uuid } from 'uuid';

export class BasicItemStore<K extends ModelType> {
  private store: StoreByArray<WithId, ItemOf<K>>;
  constructor(public dbc: DBCacheService, private type: K) {
    this.store = new StoreByArray<WithId, ItemOf<K>>();
  }
  create(model: ModelOf<K>): Observable<string> {
    // return this.dbc.create(model);
    return new Observable<string>(obs => {
      const id = uuid();
      this.store
        .insert({ id, ...(model as object) } as ItemOf<K>)
        .subscribe(noop, obs.error, () => obs.next(id));
    }).pipe(first());
  }
  currentItems(): ItemOf<K>[] {
    // return this.dbc.currentItems().filter(v => v.type === this.type) as ItemOf<
    // K
    // >[];
    return this.store.currentState();
  }
  item$(id: string): Observable<ItemOf<K>> {
    // return this.dbc.get$<K>(this.type, id);
    return this.store.get$({ id });
  }
  get items$(): Observable<ItemOf<K>[]> {
    // return this.dbc.ofType$(this.type);
    return this.store.state$;
  }
  update(...item: ItemOf<K>[]) {
    // return this.dbc.update(...item);
    return this.store.update(...item);
  }
  delete(item: ItemOf<K>) {
    return this.store.remove(item);
  }
  // getFromCache(id: string): T | undefined {
  //   return this.store.currentState().find(x => x.id === id);
  // }
  // Remove item from cache, won't affect database;
  // release(model: T) {
  //   removeFromStore(this.store, model.id);
  // }
  // clear() {
  //   this.currentItems.forEach(i => this.release(i));
  // }
  // private readFromDB(type: ModelType, id: string) {
  //   return this.dbc
  //     .get<T>(type, id)
  //     .pipe(map(p => updateToStore(this.store, p)));
  // }
  // filter(
  //   type: ModelType,
  //   fn: (item: T) => boolean,
  //   slice?: { offset: number; limit: number }
  // ) {
  //   this.dbc
  //     .filter(type, fn, slice)
  //     .subscribe(items => setStoreToValue(this.store, items));
  // }
  // loadFromDB(type: ModelType, id: string) {
  //   this.readFromDB(type, id).subscribe(noop, err =>
  //     console.error(`Failed to reload patiend with id: ${id}.`, err)
  //   );
  // }
  // reloadFromDB(model: T) {
  //   this.readFromDB(model.type, model.id).subscribe(noop, err =>
  //     console.error(`Failed to reload patiend with id: ${model.id}.`, err)
  //   );
  // }
  // refresh() {
  //   this.currentItems.forEach(x => this.reloadFromDB(x));
  // }
  // delete(model: T) {
  //   this.dbc
  //     .delete<T>(model.type, model.id)
  //     .pipe(map(() => this.release(model)))
  //     .subscribe(noop, err =>
  //       console.error(`Failed to delete patient with id: ${model.id}.`, err)
  //     );
  // }
}

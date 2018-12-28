import { Injectable } from '@angular/core';
import { DBModel, ModelType, DBItem, ModelOf, ItemOf } from '../../model';
import { v4 as uuid } from 'uuid';
import { DB } from '../db';
import { Observable, never, noop } from 'rxjs';
import {
  map,
  shareReplay,
  filter,
  concatMap,
  first,
  tap
} from 'rxjs/operators';
import {
  DebugInitState,
  DebugDatabaseRandomInitializationParameters
} from '../../../database-services/db-debug.repository';
import { StoreByArray, Item } from '../../store';

interface TypedId {
  type: ModelType;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbDebugService implements DB {
  // store: { 'Patient': Patient[], 'Study': Study[], 'Protocol': Protocol[], 'Scan': Scan[], 'Recon': Recon[] };
  store: StoreByArray<{ type: ModelType; id: string }, DBItem>;
  constructor() {
    this.store = new StoreByArray((x: TypedId) => (y: TypedId) =>
      x.id === y.id && x.type === y.type
    );
  }
  create(item: DBModel) {
    return new Observable<string>(obs => {
      const id = uuid();
      // TODO: update typescript to solve this any trick
      this.store.insert({ ...item, id }).subscribe(noop, obs.error, () => {
        obs.next(id);
        obs.complete();
      });
    });
  }

  delete(item: DBItem) {
    return this.store.remove(item);
  }

  // filter<K extends ModelType>(type: K, fn: (item: ItemOf<K>) => boolean) {
  //   return this.store.state$.pipe(
  //     map(
  //       items =>
  //         items.filter(item => item.type === type) as ItemOf<K>[]
  //     ),
  //     map(items => items.filter(fn)),
  //     first(),
  //     shareReplay(1)
  //   );
  // }
  get$<K extends ModelType>(type: K, id: string) {
    return this.getType$(type).pipe(
      filter(results => results.length > 0),
      map(results => results[0])
    );
  }
  getType$<K extends ModelType>(type: K): Observable<ItemOf<K>[]> {
    return this.getAll$().pipe(
      map(items => items.filter(x => x.type === type) as ItemOf<K>[])
    );
  }
  getAll$() {
    return this.store.state$.pipe(first());
  }
  update(item: DBItem) {
    return this.store.update(item);
  }
  setToInitState() {
    // return this.store.setState(DebugInitState);
  }
  setToRandomInitState(spec: DebugDatabaseRandomInitializationParameters) {
    // return randomInitState(spec).pipe(
    // concatMap(state => this.store.setState(state))
    // );
  }
}

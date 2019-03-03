import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Items} from '../../models/items.model';
import {AngularFireDatabase} from '@angular/fire/database';
import {distinctUntilChanged, map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class ItemService {
    constructor(private  db: AngularFireDatabase) {
    }

    load(offset: number, limit: number): Observable<Items> {
        return this.db.list('/v0/topstories')
            .valueChanges()
            .pipe(
                map(
                    (ids) => ids.slice(offset, offset + limit),
                ),
                distinctUntilChanged(_.isEqual),
                map((ids: any[]) => ids.map(id => this.db.object('/v0/item/' + id).valueChanges())),
                map((items: any) => {
                    return {offset, limit, total: limit, results: items};
                }),
            );
    }
}

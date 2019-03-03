import {Injectable} from '@angular/core';
import {ItemService} from '../item/item.service';

@Injectable({
    providedIn: 'root',
})
export class ItemMockService extends ItemService {

    // load(offset?: number, limit?: number): Observable<Items> {
    //     const results: Item[] = _.range(offset, offset + limit).map(index => ({
    //         id: index,
    //         title: `Item ${index + 1}`,
    //         url: `http://www.example.com/item${index}`,
    //         by: `demo`,
    //         time: new Date().getTime() / 1000,
    //         score: index,
    //     }));
    //     return of({
    //         offset,
    //         limit,
    //         total: offset + limit,
    //         results,
    //     });
    // }
}

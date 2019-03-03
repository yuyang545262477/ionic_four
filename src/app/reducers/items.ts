import {EntityState} from '@ngrx/entity';
import {Item} from '../models/item.model';

export interface State extends EntityState<Item> {
    loading: boolean
    error: any
}

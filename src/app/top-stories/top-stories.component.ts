import {Component, OnDestroy, OnInit} from '@angular/core';
import {Items} from '../models/items.model';
import {Subscription} from 'rxjs';
import {ItemService} from '../services/item/item.service';

@Component({
    selector: 'app-top-stories',
    templateUrl: './top-stories.component.html',
    styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit, OnDestroy {
    items: Items;
    private subscription: Subscription;

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.subscription = this.itemService.load(0, 10).subscribe(
            (items) => {
                this.items = items;
            },
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }


}

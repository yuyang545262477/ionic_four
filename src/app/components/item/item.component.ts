import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() item: Item;

    constructor() {
    }

    ngOnInit() {
    }


}

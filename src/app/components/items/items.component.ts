@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

    @Input() items: Items;

    constructor() {
    }

    ngOnInit() {
    }

}

import {Component, Input, OnInit} from '@angular/core';

import {Items} from '../../models/items.model';

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {PipesModule} from '../pipes/pipes.module';
import {ItemsComponent} from './items/items.component';

@NgModule({
    declarations: [ItemComponent, ItemsComponent],
    imports: [
        CommonModule,
        PipesModule,
    ],
    exports: [ItemsComponent, ItemComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {
}

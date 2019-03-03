import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopStoriesRoutingModule} from './top-stories-routing.module';
import {TopStoriesComponent} from './top-stories.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
    declarations: [TopStoriesComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        TopStoriesRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopStoriesModule {
}

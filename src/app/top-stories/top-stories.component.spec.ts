import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TopStoriesComponent} from './top-stories.component';
import {TestUtils} from '../testing/test-utils';
import {ItemComponent} from '../components/item/item.component';
import {ItemsComponent} from '../components/items/items.component';
import {TimeAgoPipe} from '../pipes/time-ago.pipe';
import {ItemService} from '../services/item/item.service';
import {ItemMockService} from '../services/item-mock/item-mock.service';
import {By} from '@angular/platform-browser';

let component: TopStoriesComponent;
let fixture: ComponentFixture<TopStoriesComponent>;

describe('top stories page', () => {
    beforeEach(
        async(() => TestUtils.beforeEachCompiler(
            [TopStoriesComponent, ItemsComponent, ItemComponent, TimeAgoPipe],
            [{provide: ItemService, useClass: ItemMockService}],
            ).then((compiled) => {
                fixture = compiled.fixture;
                component = compiled.instance;
            }),
        ),
    );

    it('should display a list of 10 items', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let debugElements = fixture.debugElement.queryAll(By.css('h2'));
            expect(debugElements.length).toBe(10);
            expect(debugElements[0].nativeElement.textContent).toContain('Item 1');
            expect(debugElements[1].nativeElement.textContent).toContain('Item 2');
        });
    }));
});

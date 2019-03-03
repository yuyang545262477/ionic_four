import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

export class TestUtils {
    static beforeEachCompiler(components: any[], providers: any[] = []): Promise<{ fixture: any, instance: any }> {
        return TestUtils.configureIonicTestingModule(components, providers)
            .compileComponents().then(() => {
                const fixture: ComponentFixture<any> = TestBed.createComponent(components[0]);
                return {
                    fixture,
                    instance: fixture.componentInstance,
                };
            });
    }

    static configureIonicTestingModule(components: Array<any>, providers: Array<any> = []): typeof TestBed {
        return TestBed.configureTestingModule({
            declarations: [...components],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [...providers],
            imports: [FormsModule, IonicModule],
        });
    }
}

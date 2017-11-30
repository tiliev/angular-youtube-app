import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { IgxGridModule } from 'igniteui-js-blocks/grid/grid.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        IgxGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

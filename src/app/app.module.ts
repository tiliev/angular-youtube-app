import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IgxGridModule } from 'igniteui-js-blocks/grid/grid.component';
import { CryptoStatsComponent } from './crypto-stats/crypto-stats.component';
import { CryptoVideosComponent } from './crypto-videos/crypto-videos.component';
import { CryptoPopularityComponent } from './crypto-popularity/crypto-popularity.component';

import { YouTubeSearchInjecatbles } from './services/you-tube-search.injectable';

@NgModule({
    declarations: [
        AppComponent,
        CryptoStatsComponent,
        CryptoVideosComponent,
        CryptoPopularityComponent
    ],
    imports: [
        BrowserModule,
        IgxGridModule,
        HttpModule
    ],
    providers: [ YouTubeSearchInjecatbles ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component, Input } from '@angular/core';
import { Cryptocurrency } from '../model/cryptocurrency.model';

@Component({
    selector: 'app-crypto-stats',
    templateUrl: './crypto-stats.component.html',
    styleUrls: ['./crypto-stats.component.css']
})
export class CryptoStatsComponent {
    @Input() cryptocurrencies: Cryptocurrency[];

    constructor() {
    }
}

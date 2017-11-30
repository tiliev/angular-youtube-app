import { Component, OnInit } from '@angular/core';

import { Cryptocurrency } from '../model/cryptocurrency.model';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    data: Array<Cryptocurrency>;

    constructor() {
        this.data = new Array<Cryptocurrency>();
        this.data.push(new Cryptocurrency(1, "Bitcoin", "BTC", "/assets/images/bitcoin.svg"));
        this.data.push(new Cryptocurrency(2, "Ethereum", "ETH", "/assets/images/ethereum.png"));
        this.data.push(new Cryptocurrency(3, "Litecoin", "LTC", "/assets/images/litecoin.png"));
        this.data.push(new Cryptocurrency(4, "Zcash", "ZEC", "/assets/images/zcash.png"));
    }

    ngOnInit() {

    }
}

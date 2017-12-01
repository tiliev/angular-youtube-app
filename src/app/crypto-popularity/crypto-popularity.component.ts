import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switch';

import { Cryptocurrency } from '../model/cryptocurrency.model';
import { YouTubeSearchService } from '../services/you-tube-search.service';
import { Video } from '../model/video.model';

@Component({
    selector: 'app-crypto-popularity',
    templateUrl: './crypto-popularity.component.html',
    styleUrls: ['./crypto-popularity.component.css']
})
export class CryptoPopularityComponent implements OnInit {
    bitcoin: Cryptocurrency = new Cryptocurrency(1, "Bitcoin", "BTC", "/assets/images/bitcoin.svg");
    ethereum: Cryptocurrency = new Cryptocurrency(2, "Ethereum", "ETH", "/assets/images/ethereum.png");
    litecoin: Cryptocurrency = new Cryptocurrency(3, "Litecoin", "LTC", "/assets/images/litecoin.png");
    zcash: Cryptocurrency = new Cryptocurrency(4, "Zcash", "ZEC", "/assets/images/zcash.png");

    cryptocurrencies: Cryptocurrency[];

    videos: Video[];

    youTubeQuery: string;
    youTubeMaxResults: number;
    youTubeOrder: string;
    youTubeType: string;

    searchIntervalSeconds: number;
    searchBeforeSeconds: number;

    constructor(private youtube: YouTubeSearchService) {
        this.cryptocurrencies = [this.bitcoin, this.ethereum, this.litecoin, this.zcash];

        this.youTubeQuery = `${this.bitcoin.name}%7C${this.ethereum.name}%7C${this.litecoin.name}%7C${this.zcash.name}%7C`;
        this.youTubeMaxResults = 50;
        this.youTubeOrder = "date";
        this.youTubeType = "video";

        this.searchIntervalSeconds = 3;
        this.searchBeforeSeconds = 3600;
    }

    ngOnInit() {
        //Observable.interval(this.searchIntervalSeconds * 1000)
        //    .startWith(1) // start after 1 millisecond
        //    .map(() => {
        //        let currentDate: Date = new Date();
        //        let currentDateSeconds: number = currentDate.getSeconds();

        //        let afterDate: Date = new Date(currentDate);
        //        let beforeDate: Date = new Date(currentDate);

        //        afterDate.setSeconds(currentDateSeconds - this.searchBeforeSeconds - this.searchIntervalSeconds);
        //        beforeDate.setSeconds(currentDateSeconds - this.searchBeforeSeconds);

        //        return this.youtube.search(this.youTubeQuery, 50, this.youTubeOrder, afterDate, beforeDate, this.youTubeType);
        //    })
        //    .switch()
        //    .subscribe(
        //    (results: Video[]) => {
        //        for (var i = 0; i < results.length; i++) {
        //            for (var j = 0; j < this.cryptocurrencies.length; j++) {
        //                if (results[i].title.toLowerCase().indexOf(this.cryptocurrencies[j].name.toLowerCase()) !== -1) {
        //                    this.cryptocurrencies[j].videosCount++;
        //                }
        //            }
        //        }

        //        console.log(results);
        //    },
        //    (err: any) => {
        //        console.log(err);
        //    });
    }
}

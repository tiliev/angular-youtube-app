import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Video } from "../model/video.model";

@Component({
    selector: 'app-crypto-videos',
    templateUrl: './crypto-videos.component.html',
    styleUrls: ['./crypto-videos.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CryptoVideosComponent {
    @Input() videos: Video[];

    constructor() { }

    ngOnInit() {
    }
}

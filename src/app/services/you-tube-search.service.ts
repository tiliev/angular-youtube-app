import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Video } from '../model/video.model';

export const YOUTUBE_API_KEY: string = "AIzaSyDwuXHhzPjSSiksBfVs0qhl0ig7VP62nLY";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {

    constructor(private http: Http,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string) {
    }

    search(query: string,
        maxResults: number,
        order: string,
        publishedAfter: Date,
        publishedBefore: Date,
        type: string): Observable<Video[]> {
        let params: string = [
            `part=snippet`,
            `q=${query}`,
            `maxResults=${maxResults}`,
            `order=${order}`,
            `publishedAfter=${publishedAfter.toISOString()}`,
            `publishedBefore=${publishedBefore.toISOString()}`,
            `type=${type}`,
            `key=${this.apiKey}`
        ].join("&");
        
        let queryUrl = `${this.apiUrl}?${params}`;
        console.log(queryUrl);
        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new Video(item.id.videoId,
                        item.snippet.title,
                        item.snippet.description,
                        item.snippet.thumbnails.medium.url);
                })
            })
    }
}

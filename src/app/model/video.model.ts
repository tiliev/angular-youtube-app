export class Video {
    videoUrl: string;

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public thumbnailUrl: string) {
        this.videoUrl = `https://www.youtube.com/watch?v=${this.id}`;
    }
}

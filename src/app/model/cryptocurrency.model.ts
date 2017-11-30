export class Cryptocurrency {
    constructor(public id: number,
        public name: string,
        public abbr: string,
        public imageUrl: string,
        public videosCount: number = 0) {
    }
}

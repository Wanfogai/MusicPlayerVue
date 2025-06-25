export class TrackModel{
    constructor(Cover:string, TrackName:string, TrackAuthor:string)
    {
        this.cover = Cover;
        this.trackName = TrackName;
        this.trackAuthor = TrackAuthor;
    }
    cover:string;
    trackName:string;
    trackAuthor:string;
}
export default class GalleryPhoto {
    constructor(
        public id?: string,
        public isOpen?: boolean,
        public top?: number,
        public left?: number,
        public width?: number,
        public height?: number,
        public scale?: number,
        public borderRadius?: number,
        public originalTop?: number,
        public originalLeft?: number,
        public originalWidth?: number,
        public originalHeight?: number
    ) { }
}
export type GiphyRawGif = {
    id: string;
    title: string;
    images: {
        downsized_medium: {
            url: string;
        };
    };
};
export type GiphyApiResponse = {
    data: GiphyRawGif[];  // The API wraps the array in a 'data' property
}
export type GifData = {
    id: string;
    title: string;
    url: string;
}
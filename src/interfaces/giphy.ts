

export interface GifImage {
    downsized_medium: {
        url: string;
    };
}

export interface GifData {
    id: string;
    title: string;
    images: GifImage;
}

export interface GiphyApiResponse {
    data: GifData[];
}

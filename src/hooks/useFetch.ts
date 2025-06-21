import { useEffect, useState } from 'react';
import type { GifData, GiphyRawGif } from '../interfaces';

type ErrorType = Error | null;

// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const API_KEY = "V5gt8NTf0sqgTTokkvsccTwSK8heGFYN"

export const useFetch = (category: string) => {
    const [images, setImages] = useState<GifData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const fetchData = async () => {

            try {

                const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;
                const resp = await fetch(url);

                if (!resp.ok) throw new Error('Fallo en la peticion');

                const { data } = await resp.json();

                const gifs: GifData[] = data.map((img: GiphyRawGif) => ({
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }));

                setImages(gifs);
            } catch (error) {
                setError(error as Error);

            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [category]);

    return {
        images,
        loading,
        error
    }

}
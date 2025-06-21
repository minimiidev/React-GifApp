import { Icon } from '@iconify/react';
import { useRef } from 'react';

interface Props {
    id: string;
    title: string;
    url: string;
}


export const GifCard = ({ id, title, url }: Props) => {
    const imgRef = useRef<HTMLImageElement>(null);

    // TODO: ATOMIZAR ??
    const downloadGif = () => {

        const gif = imgRef.current;
        if (!gif) return;

        const a = document.createElement('a');
        a.href = gif.src;
        a.click();
    }


    return (
        <div id={id} className="relative flex flex-col shadow-md border border-slate-300 w-full hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
            <Icon icon="material-symbols:download-sharp" width="24" height="24" className="top-2 right-2 absolute text-white hover:text-blue-500"
                onClick={downloadGif}
            />

            <img ref={imgRef} src={url} alt={title} className="w-full h-full min-h-[200px] object-cover" />

            <h4 className="bg-white p-2 font-medium uppercase">{title}</h4>
        </div>
    )
}



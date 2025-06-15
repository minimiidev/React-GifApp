
interface Props {
    id: string;
    title: string;
    url: string;
}

export const GifCard = ({ id, title, url }: Props) => {
    return (
        <div id={id} className="flex flex-col shadow-md border border-slate-300 w-full hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
            <img src={url} alt={title} className="w-full h-full min-h-[200px] object-cover" />

            <h4 className="bg-white p-2 font-medium uppercase">{title}</h4>
        </div>
    )
}

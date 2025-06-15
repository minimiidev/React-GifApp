import { useFetch } from "../../hooks";
import { GifCard } from "./GifCard"

interface Props {
    category: string;
}

export const GifList = ({ category }: Props) => {

    const { error, images, loading } = useFetch(category)

    return (
        <div className="flex flex-col py-3 w-full">
            <h4 className="mb-5 pb-2 border-gray-400 border-b font-light text-2xl uppercase">{category}</h4>

            {loading && <h2 className="bg-sky-500 py-10 text-white uppercase">Loading...</h2>}

            {error && <h2>{error.message}</h2>}

            <div className="gap-4 grid grid-cols-3 lg:grid-cols-5">

                {
                    images.map(({ id, title, url }) => (
                        <GifCard key={id} id={id} title={title} url={url} />
                    ))
                }
            </div>
        </div>
    )
}


import { useState } from "react";
import { useFetch } from "../../hooks";
import { GifCard } from "./GifCard"
import { Icon } from "@iconify/react";

interface Props {
    category: string;
}

export const GifList = ({ category }: Props) => {
    const [favorite, setFavorite] = useState<boolean>(false)

    const { error, images, loading } = useFetch(category)

    return (
        <section className="flex flex-col py-3 w-full">

            <div className="flex justify-between items-center mb-5 pb-2 border-gray-400 border-b">
                <h4 className="font-light text-2xl uppercase">{category}</h4>

                {/* TODO: BOTON DE FAVORITOS */}
                <div className="flex gap-2">
                    <div onClick={() => setFavorite(!favorite)}>
                        {favorite ?
                            <Icon icon="uil:favorite" width="24" height="24" className="text-yellow-500" />
                            :
                            <Icon icon="uim:favorite" width="24" height="24" className="text-yellow-500" />}
                    </div>

                    <Icon icon="oui:save" width="24" height="24" className="text-green-500" />
                    <Icon icon="mi:delete" width="24" height="24" className="text-red-500" />
                </div>
            </div>

            {loading && <h2 className="bg-sky-500 py-10 text-white uppercase">Loading...</h2>}

            {error && <h2>{error.message}</h2>}

            <div className="gap-4 grid grid-cols-3 lg:grid-cols-5">

                {
                    images.map(({ id, title, url }) => (
                        <GifCard key={id} id={id} title={title} url={url} />
                    ))
                }
            </div>
        </section>
    )
}



interface Props {
    id?: string;
    title?: string;
    url?: string;
}

export const GifCard = ({ id, title, url }: Props) => {
    return (
        <div id={id}>
            <img src={url} alt={title} />

            <h4>{title}</h4>
        </div>
    )
}

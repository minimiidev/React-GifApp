import { GifCard } from "./GifCard"

interface Props {
    data: object[]
}

export const GiftList = ({ data = [] }: Props) => {
    return (
        data.map(d => (
            <GifCard {...d} />
        ))
    )
}

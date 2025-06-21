import { render, screen } from "@testing-library/react";
import { GifList } from "../../src/components";
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');

describe("Pruebas en <GifList />", () => {
    const category = "NBA";

    test("Debe mostrar el loading inicialmente", () => {
        (useFetch as jest.Mock).mockReturnValue({
            images: [],
            loading: true
        })

        render(<GifList category={category} />)
        // screen.debug();

        expect(screen.getByText("Loading...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    })

    test("Debe mostrar items cuando se cargan las imagenes", () => {
        const gifs = [{ id: "ABC", title: "ABC", url: "https://abc.com" }];

        (useFetch as jest.Mock).mockReturnValue({
            images: gifs,
            loading: false
        })

        render(<GifList category={category} />)
        // screen.debug();

        expect(screen.getAllByRole("img").length).toBe(gifs.length);

    })
})
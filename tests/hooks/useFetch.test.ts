import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks"


describe("Pruebas en useFetch", () => {
    const category = "nba";

    test("Debe regresar el estado inicial", () => {

        const { result } = renderHook(() => useFetch(category));

        const { images, loading } = result.current;

        expect(images.length).toBe(0);
        expect(loading).toBe(true);
    })

    test("Debe regresar un arreglo de imagenes y loading en false", async () => {

        const { result } = renderHook(() => useFetch(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, loading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(loading).toBe(false);

    })
})
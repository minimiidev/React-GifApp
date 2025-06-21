import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";


describe("Pruebas en App", () => {
    const category = "NBA";

    test("Agregar una nueva categoria", () => {
        const categories = [category];

        render(<App />)

        const input = screen.getByRole("textbox") as HTMLInputElement;
        const form = screen.getByRole("form") as HTMLFormElement;

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(categories.length).toBe(1);
    })

    test("No debe agregar la categoria si ya existe", () => {
        const categories = [category];

        render(<App />)

        const input = screen.getByRole("textbox") as HTMLInputElement;
        const form = screen.getByRole("form") as HTMLFormElement;

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(categories.includes(category)).toBeTruthy();

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(categories.length).toBe(categories.length);
    })
})
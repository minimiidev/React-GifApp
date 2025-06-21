import { fireEvent, render, screen } from "@testing-library/react"
import { SearchForm } from "../../src/components"

const category = "NBA"

describe("Pruebas en <SearchForm />", () => {

    test("Debe cambiar el valor en el input", () => {
        render(<SearchForm onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input, { target: { value: category } })
        // screen.debug();

        expect(input.value).toBe(category);
    })

    test("Debe llamar onNewCategory si el input tiene un valor", () => {
        const onNewCategory = jest.fn();

        render(<SearchForm onNewCategory={onNewCategory} />)

        const input = screen.getByRole("textbox") as HTMLInputElement;
        const form = screen.getByRole("form") as HTMLFormElement;

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(category);

    })

    test("NO debe llamar onNewCategory si el input esta vacio", () => {
        const onNewCategory = jest.fn();

        render(<SearchForm onNewCategory={onNewCategory} />)

        const input = screen.getByRole("textbox") as HTMLInputElement;
        const form = screen.getByRole("form") as HTMLFormElement;

        fireEvent.input(input, { target: { value: "" } });
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    })
})
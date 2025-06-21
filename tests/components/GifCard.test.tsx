import { render, screen } from '@testing-library/react'
import { GifCard } from '../../src/components/gifs/GifCard';

const id = "1";
const title = "Test gif";
const url = "https://test.com/gif.gif";

describe('Pruebas en <GifCard />', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifCard id={id} title={title} url={url} />);

        expect(container).toMatchSnapshot();
    })

    test("Debe de mostrar img con URL y ALT indicado", () => {
        render(<GifCard id={id} title={title} url={url} />);
        // screen.debug();
        // expect((screen.getByRole('img') as HTMLImageElement).src).toBe(url);
        // expect((screen.getByRole('img') as HTMLImageElement).alt).toBe(title);
        const { src, alt } = screen.getByRole('img') as HTMLImageElement;
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test("Debe de mostrar el titulo en el componente", () => {
        render(<GifCard id={id} title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })

})
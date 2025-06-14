import { useState, type FormEvent } from "react"
// TODO: VALIDAR CON ZOD

interface Props {
    onNewCategory: (e: string) => void;
}

export const SearchForm = ({ onNewCategory }: Props) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: MAS VALIDACIONES ??
        const trimmedValue = inputValue.trim();
        if (trimmedValue.length <= 1) return;

        onNewCategory(trimmedValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" placeholder="Search for a GIF"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}

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
        const category = inputValue.trim();
        if (category.length <= 1) return;

        onNewCategory(category);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-10 w-full">
            <input type="text" name="search" id="search" placeholder="Search for a GIF"
                className="bg-white hover:bg-gray-100 focus:bg-gray-300 p-2 border-2 border-gray-400 border-r-0 border-r-transparent focus:border-blue-500 outline-0 w-full transition-all duration-300 ease-in-out"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" className="bg-blue-500 p-2 w-[100px] font-medium text-white">Search</button>
        </form>
    )
}

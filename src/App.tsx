import { useState } from "react"
import { SearchForm } from "./components"

function App() {
  const [categories, setCategories] = useState(["NBA", "MLB"])

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories((prevCategories) => [category, ...prevCategories]);
  };
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=5&q=${search}`
  return (
    <>
      <h1>Search a GIF</h1>

      <SearchForm
        // onSearch={setCategories}
        //* EMITIR FUNCION AL PADRE
        onNewCategory={(value: string) => addCategory(value)}
      />

      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  )
}

export default App

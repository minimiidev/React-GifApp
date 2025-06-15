import { useState } from "react";
import { SearchForm, GifList } from "./components"

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  }


  return (
    <section className="m-auto mt-10 container">
      <h1 className="mb-10 font-extralight text-3xl uppercase tracking-widest">Search a GIF</h1>

      <SearchForm
        // onSearch={setCategories}
        //* EMITIR FUNCION AL PADRE
        onNewCategory={(value: string) => addCategory(value)}
      />

      {/* //* LISTADO DE CATEGORIAS */}
      {categories.map((category) => (<GifList key={category} category={category} />))}

    </section>
  )
}

export default App

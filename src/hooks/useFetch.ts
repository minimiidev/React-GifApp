import { useEffect, useState } from "react"

type Data<T> = T | null;
type ErrorType = Error | null;

interface Props<T> {
    data: Data<T>,
    loading: boolean,
    error: ErrorType
}

export const useFetch = <T>(url: string): Props<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const resp = await fetch(url);

                if (!resp.ok) throw new Error("Error en la peticion");

                const jsonData: T = await resp.json();
                setData(jsonData);
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false);
            }
        }

        fetchData()

    }, [url])

    return { data, loading, error }
}
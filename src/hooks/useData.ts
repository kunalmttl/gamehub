import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react"

interface fetchResponse<T>
{
        count: number;
        results: T[];
}

const useData = <T>(endpoint : string) => {

        const [Data, setData] = useState<T[]>([])
        const [error, setError] = useState('')
        const [isLoading, setLoading] = useState(false)

        useEffect(() => 
                {
                const controller = new AbortController();

                // just before calling api, set loading to true
                setLoading(true);

                apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal})
                        .then(res => {
                                setData(res.data.results)
                                setLoading(false);             // After getting the data, set loading to false
                        })
                        .catch(error => 
                                {
                                if (error instanceof CanceledError) return;
                                setError(error.message)
                                setLoading(false);             // If there is an error, set loading to false
                                })

                return () => controller.abort();
                }, [endpoint])

        return { Data, error, isLoading };
}

export default useData;
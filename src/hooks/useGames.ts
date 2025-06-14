import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react"

export interface Platform
{
        id: number;
        name: string;
        slug: string;   
}

export interface Game 
{
        id: number;
        name: string;
        background_image: string;
        parent_platforms: { platform: Platform }[];
        metacritic: number;
}

interface fetchGamesResponse 
{
        count: number;
        results: Game[];
}


const useGames = () => {

        const [games, setGames] = useState<Game[]>([])
        const [error, setError] = useState('')
        const [isLoading, setLoading] = useState(false)

        useEffect(() => 
                {
                const controller = new AbortController();

                // just before calling api, set loading to true
                setLoading(true);

                apiClient.get<fetchGamesResponse>('/games', {signal: controller.signal})
                        .then(res => {
                                setGames(res.data.results)
                                setLoading(false);             // After getting the data, set loading to false
                        })
                        .catch(error => 
                                {
                                if (error instanceof CanceledError) return;
                                setError(error.message)
                                setLoading(false);             // If there is an error, set loading to false
                                })

                return () => controller.abort();
                }, [])

        return { games, error, isLoading };

}
export default useGames;
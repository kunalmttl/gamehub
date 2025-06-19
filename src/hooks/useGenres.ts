import genres from "@/data/genres";

export interface Genre
{
        id: number;
        name: string;
        image_background: string;
}


const useGenres = () => ({Data: genres, isLoading: false, error: null});
        
export default useGenres;
// import {Text} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { Genre } from '@/hooks/useGenres';
import type { Platform } from '@/hooks/usePlatforms';

interface Props
{
        selectedGenre: Genre | null;
        selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => 
{
        const { Data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
        const skeletons = [1, 2, 3, 4, 5, 6];
        
        return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <SimpleGrid columns = {{sm : 1, md : 2, lg : 3, xl: 5}}  padding = {75} gap = {18}>
                {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}> 
                        <GameCardSkeleton/>
                </GameCardContainer>)}
                {Data.map(game => 
                <GameCardContainer key={game.id}>
                        <GameCard game = {game} ></GameCard>
                </GameCardContainer>)}
        </SimpleGrid>
        </>

)

}

export default GameGrid

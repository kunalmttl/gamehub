// import {Text} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => 
{
        const { games, error, isLoading } = useGames();
        const skeletons = [1, 2, 3, 4, 5, 6];
        
        return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <SimpleGrid columns = {{sm : 1, md : 2, lg : 3, xl: 5}}  padding = {75} gap = {18}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
                {games.map(game => <GameCard key={game.id} game = {game} ></GameCard>)}
        </SimpleGrid>
        </>

)

}

export default GameGrid

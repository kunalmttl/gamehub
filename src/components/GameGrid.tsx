// import {Text} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => 
{
        const { games, error } = useGames();

        return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <SimpleGrid columns = {{sm : 1, md : 2, lg : 3, xl: 5}}  padding = {75} gap = {18}>
        {games.map(game => <GameCard key={game.id} game = {game} ></GameCard>)}
        </SimpleGrid>
        </>

)

}

export default GameGrid

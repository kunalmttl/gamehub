// import {Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => 
{
        const { games, error } = useGames();

        return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
        </>

)

}

export default GameGrid

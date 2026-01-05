import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react'

interface GameHeadingProps {
        gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {

        const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading marginLeft={75} marginBottom={5} fontSize="4xl" fontWeight="bold" as ="h1">
        {heading.trim() || 'All Games' }
    </Heading>  
  )
}

export default GameHeading

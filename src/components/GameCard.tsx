import type { Game } from '../hooks/useGames'
import { Card, CardBody, HStack } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageURL from '@/services/image-url';
import Emojis from './Emojis';

interface GameCardProps 
{
  game: Game
}

const GameCard = ({game} : GameCardProps) => 
{
  return (
      <Card.Root>
        <Image
          src={getCroppedImageURL (game.background_image)}
          alt={game.name}
          borderTopRadius="md"
          objectFit="cover"
          height="200px"/>
        <CardBody gap="1">
                <HStack justify={'space-between'} mb="2">
                  <Card.Title mb="2" textStyle="sm"> {game.name} <Emojis rating={game.rating_top}></Emojis></Card.Title>
                  <CriticScore score={game.metacritic}/>
                </HStack>
                <HStack justify={'space-around'} mb="2">
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                </HStack>
        </CardBody>
      </Card.Root>
  )
}

export default GameCard

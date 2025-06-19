
import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/image-url";
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface selectedGenre{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre} : selectedGenre) => {
        const {Data, isLoading, error} = useGenres();

        if (error) return <p style={{ color: 'red' }}>{error}</p>;
        if (isLoading) return <Spinner/>;
  
  return (
    <Heading size="2xl"> Genres
    <List.Root as="ul">
        {Data.map(genre => (
          <ListItem as= "ul" key={genre.id} padding={2}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
            <Button fontWeight = {genre.id === selectedGenre?.id ? 'bold' : 'normal'} rounded = "2xl" variant = "ghost" size = "2xs" fontSize='xs' onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
          </ListItem>
        ))}
    </List.Root>
    </Heading>
  )
}

export default GenreList

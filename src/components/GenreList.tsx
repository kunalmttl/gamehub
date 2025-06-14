
import useGenres from "@/hooks/useGenres";
import getCroppedImageURL from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
        const {Data, isLoading, error} = useGenres();

        if (error) return <p style={{ color: 'red' }}>{error}</p>;
        if (isLoading) return <Spinner/>;
  
  return (
    <List.Root as="ul">
        {Data.map(genre => (
          <ListItem as= "ul" key={genre.id} padding={2}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)} />
            <Text fontSize='xs'>
              {genre.name}
            </Text>
          </HStack>
          </ListItem>
        ))}
    </List.Root>
  )
}

export default GenreList

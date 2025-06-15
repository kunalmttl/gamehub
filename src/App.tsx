// rfce
import { Grid, GridItem } from "@chakra-ui/react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenres"

function App() 
{
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
  <div>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Grid 
          templateAreas={{
            base :  `"nav" "main"`,
            lg : `"nav nav" "aside main"`}}
          templateColumns={{
            base: '1fr',
            lg: '125px 1fr'
          }}>

          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre = {selectedGenre} onSelectGenre={(Genre) => setSelectedGenre(Genre)}></GenreList>
          </GridItem>
          <GridItem area="main">
            <GameGrid selectedGenre={selectedGenre}></GameGrid>
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  </div> 
)};

export default App

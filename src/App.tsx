import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import type { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery
{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}


function App() 
{
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            <GenreList selectedGenre = {gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
          </GridItem>
          <GridItem area="main">
              <Flex paddingLeft={0} marginBottom={-12} gap={5} >
                <Box>
                  <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                </Box>
                <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>
              </Flex>
            <GameGrid gameQuery={gameQuery}></GameGrid>
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  </div> 
)};

export default App

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
import GameHeading from "./components/GameHeading"

export interface GameQuery
{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText?: string;
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
            <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText})}></NavBar>
          </GridItem>
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre = {gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
          </GridItem>
          <GridItem area="main">
            <Box marginRight={0} >
              <GameHeading gameQuery={gameQuery}></GameHeading>
                <Flex marginBottom={-12} gap={-10} >
                  <Box>
                    <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                  </Box>
                  <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>
                </Flex>
              <GameGrid gameQuery={gameQuery}></GameGrid>
            </Box>
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  </div> 
)};

export default App

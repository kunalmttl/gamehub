// rfce
import { Grid, GridItem } from "@chakra-ui/react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() 
{
  return (
  <div>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Grid templateAreas={{
            base :  `"nav" "main"`,
            lg : `"nav nav" "aside main"`}}>

          <GridItem area="nav">
            <NavBar></NavBar>
          </GridItem>
          <GridItem area="aside">
            <GenreList></GenreList>
          </GridItem>
          <GridItem area="main">
            <GameGrid></GameGrid>
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  </div> 
)};

export default App

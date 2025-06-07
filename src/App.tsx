// rfce
import { Grid, GridItem } from "@chakra-ui/react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import NavBar from "./components/NavBar"

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
            Aside
          </GridItem>
          <GridItem area="main">
            Main Content
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  </div> 
)};

export default App

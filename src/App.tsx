// rfce
import { Grid, GridItem } from "@chakra-ui/react"

function App() 
{
  return (
  <div>
    <Grid templateAreas={{
        base :  `"nav" "main"`,
        lg : `"nav nav" "aside main"`}}>

      <GridItem area="nav" bg="tomato">
        Navigation
      </GridItem>
      <GridItem area="aside" bg="darkgreen">
        Aside
      </GridItem>
      <GridItem area="main" bg="skyblue">
        Main Content
      </GridItem>
    </Grid>
  </div> 
)};

export default App

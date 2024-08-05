import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

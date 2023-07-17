import {ThemeProvider} from "styled-components";
import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";

const App = () => {

  const styles ={
colors : {
  primary:"#666",  
  secondary:"#8A1C4A"
},
margins:{},
paddings:{},
breakpoints:{xs:"300px", sm:"500px", md:"700px"}



  }
  return (
    <>
      <ThemeProvider theme={styles}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

import {ThemeProvider} from "styled-components";
import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import Card from "./components/Card";
import data from "./data";

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
        {data.map((item,index) =>{
return <Card{...item} key={index} />


        })}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

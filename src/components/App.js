import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello World
    </ThemeProvider>
  );
}

export default App;

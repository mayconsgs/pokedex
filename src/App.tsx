import { ThemeProvider } from "styled-components";
import { ReactQuery } from "./reactQuery";
import { Router } from "./router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReactQuery>
        <GlobalStyles />
        <Router />
      </ReactQuery>
    </ThemeProvider>
  );
};

export default App;

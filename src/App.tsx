import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components";

import { ReactQuery } from "./reactQuery";
import { Router } from "./router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ReactQuery>
          <Header />
          <Router />
        </ReactQuery>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

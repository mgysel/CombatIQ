import {
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Navigation from "./pages/Navigation";
import StoreProvider from "./helpers/context";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <StoreProvider>
          <Navbar />
          <Navigation />
        </StoreProvider>
      </Router>
    </div>
  );
}

export default App;

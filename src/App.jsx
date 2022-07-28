import { Route, Routes } from "@solidjs/router";
import Asd from "./Asd";
import About from "./About";
import Drawings from "./Drawings";
import Footer from "./Footer";
import Home from "./Home";
import Impressum from "./Impressum";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Portfolio from "./Portfolio";
import Privacy from "./Privacy";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/drawings" component={Drawings} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/asd" component={Asd} />
        <Route path="/*" component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

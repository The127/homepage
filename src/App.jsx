import { Route, Routes } from "@solidjs/router";
import Asd from "./Asd";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/asd" component={Asd} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

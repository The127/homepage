import { Route, Routes } from "@solidjs/router";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <CookieBanner />
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

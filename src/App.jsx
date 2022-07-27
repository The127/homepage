import { Route, Routes } from "@solidjs/router";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div class="container mx-auto">
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

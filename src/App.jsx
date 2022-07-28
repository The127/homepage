import { Route, Routes } from "@solidjs/router";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
    </div>
  );
}

export default App;

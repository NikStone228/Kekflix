import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Player } from "./Components/Player/Player";
import { BrowserRouter } from "react-router-dom";
import { Details } from "./Components/Details/Details";
import { Search } from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <img src="./img/273618bd9ec81efae73984aa3b68c40f.png" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

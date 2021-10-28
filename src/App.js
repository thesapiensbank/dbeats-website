import "./App.css";
import Banner from "./components/banner/banner";
import Poster from "./components/poster/poster";
import Stars from "./components/starysky/starysky";
import NFTsection from "./components/sections/nftsections";

function App() {
  return (
    <div className={`  App`}>
      <Banner />

      <Stars />

      <Poster />

      <NFTsection />
    </div>
  );
}

export default App;

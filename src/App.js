import "./App.css";
import Banner from "./components/banner/banner";
import Poster from "./components/poster/poster";
import Stars from "./components/starysky/starysky";
import NFTsection from "./components/sections/nftsections";
import Cards from "./components/cards/cards";
import "./assets/styles/styles.css";
function App() {
  return (
    <>
      <Stars />
      <Banner />

      <Cards />
      <Poster />

      <NFTsection />
    </>
  );
}

export default App;

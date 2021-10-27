import "./App.css";
import Banner from "./components/banner/banner";
import Poster from "./components/poster/poster";
import Stars from "./components/starysky/starysky";
import Discord from "./assets/icons/discord-mascot.png";
import Twitter from "./assets/icons/twitter.png";

function App() {
  return (
    <div className={`  App`}>
      <Banner />

      <Stars />

      <Poster />

      <div className="w-full   backdrop-filter  backdrop-blur-md">
        <h3 className="w-full text-2xl font-extrabold   text-white sm:text-3xl my-5">
          Mint NFTs of Music, Videos, Pictures, Books, Blogs & everything else
          in between
        </h3>

        <div className="w-full  ">
          <h3 className="w-full text-2xl font-extrabold   text-white sm:text-3xl my-5">
            Create community channels with voice & text or setup your own NFT
            Store
          </h3>
        </div>
      </div>
      <div className="bg-gray-50 z-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm">
              Follow for more latest updates
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
            <div className="inline-flex rounded-md  ">
              <a
                href="https://discord.gg/xZavZyAbx4"
                className="h-16 w-16 m-2   rounded-full cursor-pointer  shadow-md z-200 hover:scale-95 transform transition-all "
              >
                <img className="h-16 w-16 rounded-full" src={Discord} alt="" />
              </a>

              <a
                href="https://twitter.com/DBeatsLive"
                className="h-16 w-16  m-2  bg-blue-400 rounded-full cursor-pointer  shadow-md z-200 hover:scale-95 transform transition-all "
              >
                <img className="h-16 w-16  rounded-full" src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

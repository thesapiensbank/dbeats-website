import animationData from "../../lotties/soldout.json";
import animationData2 from "../../lotties/dogwalking.json";
import animationData3 from "../../lotties/elephantinballoon.json";
import animationData4 from "../../lotties/social.json";

import Lottie from "react-lottie";

import Discord from "../../assets/icons/discord-mascot.png";
import Twitter from "../../assets/icons/twitter.png";

import orion from "../../assets/propics/orion.jpg";
import cat from "../../assets/propics/cat.jpg";

import compound from "../../assets/images/compound.png";
import zora from "../../assets/images/zora.png";
import livepeer from "../../assets/images/livepeer.png";
import protocolLabs from "../../assets/images/protocolLabs.webp";
import superfluid from "../../assets/images/superfluid.png";

import ethonline from "../../assets/images/ethonline.png";
import w3weekend from "../../assets/images/w3weekend.png";
import hfs2 from "../../assets/images/hfs2.png";
import web3jam from "../../assets/images/web3jam.png";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: animationData3,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions4 = {
  loop: true,
  autoplay: true,
  animationData: animationData4,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function NFTsection() {
  return (
    <>
      <div className="    text-left  lg:grid-cols-2   md:p-10 p-4 gap-10 h-screen hidden lg:grid">
        <div className="   rounded-xl col-span-1 mx-auto   lg:w-96 lg:h-96   relative self-center  ">
          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white  rotate-12 transform    absolute left-20 hover:-translate-y-40 hover:translate-x-40 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3 "
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white  rotate-6 transform    absolute left-10 hover:-translate-y-40 hover:translate-x-40 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions3} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white   transform    absolute hover:-translate-y-10 hover:-translate-x-10 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions2} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={orion}
                    alt="orion"
                    className="h-12 w-12 mr-3 rounded-full"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={cat}
                    className="h-12 w-12 mr-3 rounded-full"
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-proxima-reg self-center mt-auto mb-auto col-span-1 px-5 ">
          <h3 className=" self-center w-full text-2xl font-extrabold text-left   text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm   sm:text-3xl my-5 col-span-1">
            Mint NFTs of Music, Videos, Pictures, Books, Blogs & everything else
            in between
          </h3>
          <p className="text-white">
            Creators can choose to mint NFT of any content which they upload may
            it be songs, blogs, trip to Himalayas video or a picture of their
            grumpy cat having dinner.{" "}
          </p>
        </div>
      </div>
      {/* Visible only on Mobile */}
      <div className="    text-left grid lg:grid-cols-2   md:p-10 p-4 gap-10 h-screen lg:hidden">
        <div className="  self-center mt-auto mb-auto col-span-1 px-5">
          <h3 className=" self-center w-full text-2xl font-extrabold text-left   text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm   sm:text-3xl my-5 col-span-1">
            Mint NFTs of Music, Videos, Pictures, Books, Blogs & everything else
            in between
          </h3>
          <p className="text-white">
            Creators can choose to mint NFT of any content which they upload may
            it be songs, blogs, trip to Himalayas video or a picture of their
            grumpy cat having dinner.{" "}
          </p>
        </div>
        <div className="   rounded-xl col-span-1 mx-auto   lg:w-96 lg:h-96   relative self-center  ">
          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white  rotate-12 transform    absolute left-20 hover:-translate-y-40 hover:translate-x-40 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3 "
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white  rotate-6 transform    absolute left-10 hover:-translate-y-40 hover:translate-x-40 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions3} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={Discord}
                    className="h-12 w-12 mr-3"
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 p-0.5 rounded w-96   text-white   transform    absolute hover:-translate-y-10 hover:-translate-x-10 transition-all">
            <div className=" bg-dbeats-dark-primary p-4">
              <Lottie className="rounded-xl" options={defaultOptions2} />
              <div className="grid grid-cols-2 gap-4">
                <strong className="col-span-2 mt-4">My Awesome Room</strong>
                <div className=" col-span-2">
                  <p>Price</p>
                  <strong>100 DBEATS</strong>
                </div>
              </div>
              <div className="grid grid-cols-5 self-center text-left mt-3">
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={orion}
                    alt="orion"
                    className="h-12 w-12 mr-3 rounded-full"
                  ></img>
                  <div className=" text-left">
                    <p>Creator</p>
                    <strong>@orion</strong>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex self-center text-left  ">
                  <img
                    src={cat}
                    className="h-12 w-12 mr-3 rounded-full"
                    alt="orion"
                  ></img>
                  <div className=" text-left ">
                    <p>Owner</p>
                    <strong>@nebula</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2   md:p-10 gap-10 md:px-24 px-12">
        <div className="col-span-1 self-center">
          <h3 className="  w-full text-2xl font-extrabold text-left   text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm   sm:text-3xl my-5 col-span-1">
            Create voice & text community channels or setup your own NFT Store
          </h3>
          <p className="text-white text-left">
            Creators can choose to mint NFT of any content which they upload may
            it be songs, blogs, trip to Himalayas video or a picture of their
            grumpy cat having dinner.{" "}
          </p>
        </div>
        <h3 className="w-full text-2xl font-extrabold   text-white sm:text-3xl my-5 col-span-1 p-10">
          <Lottie className="rounded-xl" options={defaultOptions4} />
        </h3>
      </div>
      {/* Sections */}
      <div className="text-center self-center">
        <h3 className="text-center self-center tracking-tight font-extrabold  font-proxima-reg lg:text-3xl md:text-3xl text-4xl xl:inline block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm  ">
          EVENTS
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-6 mx-auto grid-flow-row self-center gap-10  p-10   md:px-24 px-12">
          <div className="hidden md:block"></div>
          <img
            className="  rounded-xl h-36 mx-auto w-36  "
            src={ethonline}
            alt="livepeer"
          ></img>
          <img
            className="  rounded-xl h-36 mx-auto w-36  "
            src={hfs2}
            alt="livepeer"
          ></img>
          <img
            className="  rounded-xl h-36 mx-auto w-36  "
            alt="livepeer"
            src={w3weekend}
          ></img>
          <img
            className="  rounded-xl h-36 mx-auto w-36  "
            alt="livepeer"
            src={web3jam}
          ></img>{" "}
          <div></div>
        </div>
      </div>{" "}
      <div className="text-center self-center hidden ">
        <br></br>
        <br></br>
        <br></br>
        <h3 className="text-center self-center tracking-tight font-extrabold font-proxima-reg lg:text-3xl md:text-3xl text-4xl xl:inline block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm  ">
          MEDIA
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row  p-10 gap-10 md:px-24 px-12">
          <img className="px-4" src={livepeer} alt="livepeer"></img>
          <img className="pt-1" src={protocolLabs} alt="livepeer"></img>
          <img className="px-8 pt-2" src={zora} alt="livepeer"></img>
          <img
            className="px-4 -pt-5  rounded-lg"
            src={superfluid}
            alt="livepeer"
          ></img>
        </div>
      </div>{" "}
      <br></br>
      <br></br>
      <br></br>
      <div className="text-center self-center">
        <h3 className="text-center self-center tracking-tight font-extrabold font-proxima-reg lg:text-3xl md:text-3xl text-4xl xl:inline block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm  ">
          SPONSORS
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 grid-flow-row  p-10 gap-10 md:px-24 px-12">
          <img
            className="px-6 py-4 bg-white  rounded-lg"
            src={compound}
            alt="livepeer"
          ></img>

          <img className="px-4 pt-4" src={livepeer} alt="livepeer"></img>
          <img className="  pt-4" src={protocolLabs} alt="livepeer"></img>
          <img className="px-8 pt-4" src={zora} alt="livepeer"></img>

          <img
            className=" rounded-lg px-3 bg-white"
            src={superfluid}
            alt="livepeer"
          ></img>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="bg-black z-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-left">
            <span className="block text-white">Ready to dive in?</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm">
              Follow for more latest updates
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
            <div className="inline-flex rounded-md  ">
              <a
                href="https://discord.gg/xZavZyAbx4"
                className="h-16 w-16 m-2   rounded-full cursor-pointer  shadow-md z-200 hover:scale-95 transform transition-all hover:shadow-none"
              >
                <img
                  className="h-16 w-16 rounded-full"
                  src={Discord}
                  alt="orion"
                />
              </a>
              <a
                href="https://twitter.com/DBeatsLive"
                className="h-16 w-16  m-2  bg-blue-400 rounded-full cursor-pointer  shadow-md z-200 hover:scale-95 transform transition-all hover:shadow-none"
              >
                <img
                  className="h-16 w-16  rounded-full"
                  src={Twitter}
                  alt="orion"
                />
              </a>
            </div>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow text-center hover:scale-95  transform transition-all">
              <a
                href="https://dbeats.live"
                className="  flex mx-auto z-500  items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light hover:shadow-md hover:rounded-none  transform transition-all md:py-4 md:text-lg md:px-10"
              >
                Go To Beta App
              </a>
            </div>
            <div className="mt-3 w-max sm:mt-0 sm:ml-3 hidden hover:scale-95  transform transition-all">
              <a
                href="https://dbeats.live"
                className="w-full flex z-500 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light   transform  md:py-4 md:text-lg md:px-10"
              >
                Go To Beta App
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NFTsection;

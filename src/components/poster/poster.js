/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import animationData from "../../lotties/coolchick.json";
import Lottie from "react-lottie";
var ReactRotatingText = require("react-rotating-text");

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Example() {
  return (
    <div className="relative bg-transparent overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8   sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"></div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden h-full">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className=" xl:inline block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm  ">
                  Decentralized{" "}
                </span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm xl:inline"></span>
                <br />
                <ReactRotatingText
                  className="block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm xl:inline"
                  items={[
                    "Social Media",
                    "NFT Marketplace",
                    "Community",
                    "Streaming",
                    "Video on Demand",
                    "Concerts",
                  ]}
                />
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Run your community in the same place as you sell digital{" "}
                <strong>NFTs</strong>, <strong>Music</strong>,{" "}
                <strong>Arts</strong>, host <strong>Events</strong>, post{" "}
                <strong>Articles</strong>, much more.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow text-center">
                  <a
                    href="https://dbeats.live"
                    className="w-max flex    items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light hover:shadow-md hover:rounded-none hover:scale-99 transform transition-all md:py-4 md:text-lg md:px-10"
                  >
                    Go To Beta App
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 hidden">
                  <a
                    href="https://dbeats.live"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light hover:scale-99 transform  md:py-4 md:text-lg md:px-10"
                  >
                    Go To Beta App
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Lottie options={defaultOptions} height={600} width={500} />
      </div>
    </div>
  );
}

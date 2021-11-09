/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import Cards from "../cards/cards";
import "../../assets/styles/styles.css";

var ReactRotatingText = require("react-rotating-text");

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
            ></Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left pt-10">
              <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center lg:text-left">
                <span className="font-proxima-reg lg:text-7xl text-4xl xl:inline block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm  ">
                  DECENTRALIZED{" "}
                </span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm xl:inline"></span>
                <ReactRotatingText
                  className="font-proxima-reg lg:text-7xl text-4xl block text-transparent bg-clip-text bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light drop-shadow-sm xl:inline"
                  items={[
                    "Social Media",
                    "NFT Marketplace",
                    "Community",
                    "Streaming",
                    "Video on Demand",
                    "Concerts",
                    "Metaverse",
                  ]}
                />
              </h1>
              <p className="mt-3 text-base lg:text-left text-center font-proxima-reg text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Run your community in the same place as you sell digital{" "}
                <strong>NFTs</strong>, <strong>Music</strong>,{" "}
                <strong>Arts</strong>, host <strong>Events</strong>, post{" "}
                <strong>Articles</strong>, much more.
              </p>
            </div>
          </main>
        </div>
      </div>

      <div className=" lg:inset-y-0 lg:right-0 lg:w-1/2 p-20">
        <Cards />
      </div>
    </div>
  );
}

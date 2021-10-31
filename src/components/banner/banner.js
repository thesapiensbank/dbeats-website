/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="bg-gradient-to-br from-dbeats-secondary-light to-dbeats-light sticky shadow-2xl">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="  flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-white ">
              <SpeakerphoneIcon
                className="h-6 w-6 text-dbeats-light"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate flex">
              <span className="md:hidden self-center">Join our waitlist</span>
              <div className="order-3 rounded p-3 ml-5 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto  hover:scale-99 ">
                <a
                  href="https://discord.gg/xZavZyAbx4"
                  className=" shadow  items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-dbeats-light bg-white transition-all transform hover:text-gray-900 hover:shadow-none "
                >
                  Join Now
                </a>
              </div>
              <span className="hidden  md:inline self-center">
                Big news! If You can create content You should join the waitlist
              </span>
            </p>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 hidden">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-dbeats-light hover:bg-opacity-80       sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

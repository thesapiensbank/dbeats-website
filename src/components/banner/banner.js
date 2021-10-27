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
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Join our waitlist</span>
              <span className="hidden  md:inline">
                Big news! If You can create content You should join the waitlist
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://discord.gg/xZavZyAbx4"
              className=" items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-dbeats-light bg-white hover:scale-99 transition-all transform"
            >
              Join Now
            </a>
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

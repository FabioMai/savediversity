import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/" className="flex-none text-2xl text-gray-900">
                  SAVEDiversity
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="/components"
                  className="hidden sm:block hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="/documentation"
                  className="hidden sm:block ml-6 mr-2 hover:text-gray-900"
                >
                  Video
                </a>
                <a
                  href="/documentation"
                  className="hidden sm:block ml-6 mr-2 hover:text-gray-900"
                >
                  Team
                </a>
                <a
                  href="/documentation"
                  className="hidden sm:block ml-6 mr-2 hover:text-gray-900"
                >
                  Presse
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a
                          href="/"
                          className="flex-none text-2xl text-gray-900"
                        >
                          SAVEDiversity
                        </a>
                      </div>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="/components"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        Features
                      </a>
                      <a
                        href="/documentation"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        Video
                      </a>
                      <a
                        href="/documentation"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        Team
                      </a>
                      <a
                        href="/documentation"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        Presse
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

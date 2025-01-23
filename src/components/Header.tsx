"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Favicon from "./logo/Favicon.png";
import NesterLogo from "./logo/nester_logo_2.png";
import Link from "next/link";
import {
  app_devs,
  callsToAction,
  fandbConcepts,
  mores,
  products,
} from "@/utils";
import { motion } from "framer-motion";
import Footer from "./logo/Footer_Logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav-bar-container">
      <nav aria-label="Global" className="nav-bar">
        <div className="flex mr-9 ">
          <a
            href="#"
            className="-m-1.5 p-1.5 flex gap-2 justify-center items-center"
          >
            <span className="sr-only">NESTER</span>
            <img
              alt="Nester Logo - (1024 x 512)"
              src={Footer.src}
              className="logo"
            />
            {/* <motion.div
              // className="text-6xl"
              initial={{ opacity: 0, y: -200, rotateY: 0 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
            >
              BEE
            </motion.div> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href={"/"} className="nav-text">
            Home
          </Link>
          <Link href={"#"} className="nav-text">
            Odoo ERP
          </Link>
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 nav-text">
              F&B Concepts
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-neutral-800 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {fandbConcepts.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-800"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-black">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 nav-text hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          <Link href="#" className="nav-text">
            Moodle LMS
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 nav-text text-gray-200">
              Application Development
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {app_devs.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-700"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-300 group-hover:text-secondary"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-100"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-700">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 nav-text text-gray-300 hover:bg-gray-600"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link href="#" className="nav-text">
            Tickets
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 nav-text text-gray-200">
              More
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-60 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {mores.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-700"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-300 group-hover:text-secondary"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-100"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-700">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 nav-text text-gray-300 hover:bg-gray-600"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center ">
          <Link
            href="#"
            className="relative flex  h-10 mr-3 w-full items-center justify-center px-3 before:absolute before:inset-0 before:rounded-full before:bg-[#ff7e33] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative nav-text font-semibold text-white">
              Request a Demo
            </span>
          </Link>
          <Link href={"#"} className="nav-text">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10">
          <DialogPanel className=" bg-white/10 backdrop-blur-xl fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={Favicon.src} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-gray-900">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-900"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}

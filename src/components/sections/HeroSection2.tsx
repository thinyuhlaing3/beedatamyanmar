import Link from "next/link";

export default function HeroSection2() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
          {/* <a
            href="javascript:void(0)"
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
          >
            <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
              News
            </span>
            <p className="flex items-center">
              Read the launch post from here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </a> */}
          <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
            BEE Data Myanmar
          </h1>
          <p className="text-gray-300">
            Established in 2016, is a forward-thinking software company
            headquartered in Yangon and recently expanded into Thailand. ​
            Offering a comprehensive array of IT solutions designed to optimize
            business efficiency, BEE Data is dedicated to empowering
            organizations with various IT solutions and services
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <Link
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
                Request a Demo
              </span>
            </Link>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
            >
              Contact sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Replace with your image */}
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
            className="max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

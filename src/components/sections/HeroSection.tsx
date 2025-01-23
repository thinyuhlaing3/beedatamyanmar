import Link from "../ViewTransitionLink";

export default function HeroSection() {
  return (
    <div className="pb-28">
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          {/* Updated gradient colors with #ff7e33 */}
          <div className="blur-[106px] h-56 bg-gradient-to-br from-[#ff7e33] to-orange-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-[#ff7e33] to-yellow-300"></div>
        </div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Software Solutions​ ​ ​
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              BEE Data Myanmar, established in 2016, is a forward-thinking
              software company headquartered in Yangon and recently expanded
              into Thailand. ​ Offering a comprehensive array of IT solutions
              designed to optimize business efficiency, BEE Data is dedicated to
              empowering organizations with various IT solutions and services.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#ff7e33] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Request a Demo
                </span>
              </Link>
              <Link
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#ff7e33]/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-[#ff7e33] dark:text-white">
                  Let’s Talk
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

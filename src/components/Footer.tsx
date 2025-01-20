import Link from "next/link";
import BEE_Logo from "./logo/BEE_Logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-gray-200 mt-20">
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-200 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r border-gray-700">
            <div className="text-sm uppercase text-secondary font-bold">
              Menu
            </div>
            <ul>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  Odoo ERP
                </Link>
              </li>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  Moodle LMS
                </Link>
              </li>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r border-gray-700 text-center flex flex-col items-center gap-3">
            {/* <h3 className="font-bold text-xl text-secondary mb-4">
              Componentity
            </h3> */}
            <img src={BEE_Logo.src} alt="" className="w-44  h-18" />

            <p className="text-gray-200 text-sm mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-secondary font-bold">
              Contact Us
            </div>
            <ul>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  No.(605),5th Floor, Building (19, MICT Park, Yangon)
                </Link>
              </li>
              <li className="my-2">
                <Link href="#" className="hover:text-secondary">
                  +95 9774977760{" "}
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="mailto:contact@company.com"
                  className="hover:text-secondary"
                >
                  info@beedatamyanmar.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto text-white text-sm flex-col items-center border-t border-gray-700 max-w-screen-xl">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link href="#" className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-secondary"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192..."
                />
              </svg>
            </Link>
            {/* Add other social media icons in a similar way */}
          </div>
          <div className="my-5">© Copyright 2025. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
// import PropertyImageCarousel from "./PropertyImageCarousel";

const SinglePropertyPage = ({ title, location, price, room, area }) => {

  return (
    <div className="flex space-x-4 w-full md:max-w-2xl">
      <div>
      <div className="h-40">
        <img className="h-40 md:w-64 rounded-md" src="https://assets.codi.com/production/tr:w-600,h-400/2eha7qmyw63xtr6wz2pjpujdkp4r" alt="" />
      {/* <Carousel >
        <img src="https://assets.codi.com/production/tr:w-600,h-400/cf3bqw3a587nrqwf4e954et4s4g5" alt="..." />
        <img src="https://assets.codi.com/production/tr:w-600,h-400/2eha7qmyw63xtr6wz2pjpujdkp4r" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel> */}
    </div>
    </div>
    <div className="flex flex-col justify-around ">
      <div>
      <p className="text-gray-500 text-sm">{location}</p>
      <h3 className="text-gray-700">{title}</h3>
      </div>
      <div className="flex">
        <p>{area} ft</p>
        <li className="ml-4">{room} meeting rooms</li>
        <p className="ml-4 font-semibold underline hover:text-gray-600 cursor-pointer">₹{price}/mo</p>
      </div>
    </div>
    </div>
  );
};

export default SinglePropertyPage;

{
  /* <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a> */
}

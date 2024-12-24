import { butterProducts, dryRoastedProducts, flavouredCashews, giftBoxes, piecesProducts, wholesProducts } from "@/constants/products"
import Image from "next/image"
import { FaBasketShopping } from "react-icons/fa6"

export const Butter = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          butterProducts.map((butter) => (
            <a key={butter.id} href="#" className="group p-6 relative flex justify-between flex-col overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={butter.img}
                alt={butter.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative bg-white flex flex-col justify-between gap-1.5 lg:gap-3 flex-grow">
                <h3 className="text-lg lg:text-xl host-semibold flex flex-col justify-between text-gray-900">{butter.title} <span className="text-lg host-bold text-[#d0721a]">
                  {butter.weight}
                </span></h3>
                <p className="text-[0.9rem] lg:text-lg host-light text-gray-700">
                  {butter.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl host-bold">
                ₹{butter.price}
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}

export const Wholes = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          wholesProducts.map((wholes) => (
            <a key={wholes.id} href="#" className="group p-6 relative overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200 flex flex-col justify-between">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={wholes.img}
                alt={wholes.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative  bg-white flex flex-col justify-between gap-1.5 lg:gap-3">
                <h3 className="text-lg lg:text-xl host-semibold flex flex-col justify-between text-gray-900">{wholes.title} <span className="text-lg host-bold text-[#d0721a]">
                  {wholes.weight}
                </span></h3>
                <p className="text-[0.9rem] xl:text-lg host-light text-gray-700">
                  {wholes.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl host-bold">
                ₹{wholes.price}
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}

export const DryRoasted = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          dryRoastedProducts.map((dry) => (
            <a key={dry.id} href="#" className="group p-6 relative flex justify-between flex-col overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={dry.img}
                alt={dry.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative  bg-white flex flex-col justify-between gap-1.5 lg:gap-3">
                <h3 className="text-lg lg:text-xl host-semibold flex flex-col justify-between text-gray-900">{dry.title} <span className="text-lg host-bold text-[#d0721a]">
                  {dry.weight}
                </span></h3>
                <p className="text-[0.9rem] xl:text-lg host-light text-gray-700">
                  {dry.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl host-bold">
                ₹{dry.price}
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}


export const Flavoured = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          flavouredCashews.map((fla) => (
            <a key={fla.id} href="#" className="group p-6 relative flex flex-col justify-between overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={fla.img}
                alt={fla.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative  bg-white flex flex-col gap-1.5 lg:gap-3 justify-between flex-grow">
                <h3 className="text-lg lg:text-xl host-semibold text-gray-900 flex flex-col justify-between">{fla.title} <span className="text-lg host-bold text-[#d0721a]">
                  {fla.weight}
                </span></h3>
                <p className="text-[0.8rem] lg:text-lg host-light text-gray-700">
                  {fla.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl max-h-6 host-bold">
                ₹{fla.price}
                
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}

export const Pieces = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          piecesProducts.map((pieces) => (
            <a key={pieces.id} href="#" className="group p-6 relative flex flex-col justify-between overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={pieces.img}
                alt={pieces.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative  bg-white flex flex-col gap-1.5 lg:gap-3 justify-between flex-grow">
                <h3 className="text-lg lg:text-xl host-semibold text-gray-900 flex flex-col justify-between">{pieces.title} <span className="text-lg host-bold text-[#d0721a]">
                  {pieces.weight}
                </span></h3>
                <p className="text-[0.8rem] lg:text-lg host-light text-gray-700">
                  {pieces.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl max-h-6 host-bold">
                ₹{pieces.price}
                
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}
export const Gift = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-6">

        {
          giftBoxes.map((gift) => (
            <a key={gift.id} href="#" className="group p-6 relative flex flex-col justify-between overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:shadow-slate-300 bg-white transition-all duration-200">
              <button
                title="Add to Wishlist" className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <Image
                src={gift.img}
                alt={gift.title}
                width={10000}
                height={10000}
                className="w-[80%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
              />

              <div className="relative  bg-white flex flex-col gap-1.5 lg:gap-3 justify-between flex-grow">
                <h3 className="text-lg lg:text-xl host-semibold text-gray-900 flex flex-col justify-between">{gift.title} <span className="text-lg host-bold text-[#d0721a]">
                  {gift.weight}
                </span></h3>
                <p className="text-[0.8rem] lg:text-lg host-light text-gray-700">
                  {gift.description}
                </p>
                
                <p className="text-[#130e3f] text-2xl max-h-6 host-bold">
                ₹{gift.price}
                
                </p>



                <form className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row xl:flex-col xxl:flex-row gap-4">
                  <button
                    className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                  >
                    <span><FaBasketShopping className="size-5" /></span>
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          ))
        }


      </div>
    </div>
  )
}
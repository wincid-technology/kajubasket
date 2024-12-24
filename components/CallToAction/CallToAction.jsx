import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <>
      <div className="bg-gray-100 px-6 py-12 host-regular">
      <div className="lg:max-w-7xl max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="h-full w-full overflow-hidden rounded-md">
            <Image src="/img/content.png" alt="Image" width={1000} height={10000} className="object-cover w-full h-full hover:scale-125 duration-500 hover:-rotate-12 cursor-pointer" />
          </div>
          <div>
            <h2 className="text-3xl text-[#130e3f] host-semibold mb-4">Why Kaju Basket Cashews?</h2>
            <p className="text-[#130e3f] text-md host-light leading-6">
            At Kajubasket, we pride ourselves on delivering the finest, handpicked cashews that stand out for their superior quality, taste, and freshness. Our cashews are sourced directly from trusted farms, ensuring ethical practices and sustainable cultivation. 
            </p>
            <ul className="list-disc text-md text-gray-600 space-y-2 pl-4 mt-6">
              <li className='text-[#130e3f] host-light'><b className="text-[#d0721a] host-semibold">Unmatched Quality:</b> Handpicked, premium-grade cashews known for their size, taste, and texture.</li>
              <li className='text-[#130e3f] host-light'><b className="text-[#d0721a] host-semibold">Freshness Assured:</b> Vacuum-sealed packaging keeps our cashews fresh, crisp, and flavorful.</li>
              <li className='text-[#130e3f] host-light'><b className="text-[#d0721a] host-semibold">Ethically Sourced:</b> Responsibly cultivated with sustainable farming practices.</li>
              <li className='text-[#130e3f] host-light'><b className="text-[#d0721a] host-semibold">Versatile Use:</b> Ideal for snacking, cooking, gifting, and making vegan substitutes.</li>
              <li className='text-[#130e3f] host-light'><b className="text-[#d0721a] host-semibold">Health & Nutrition:</b> Packed with protein, healthy fats, and essential nutrients for a wholesome snack.</li>
            </ul>
            <div className="mt-6">
              <Link href="/about" className="text-[#d0721a] text-lg host-bold hover:underline float-end">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CallToAction

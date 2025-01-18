import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-300 py-14 px-16 font-sans tracking-wide relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-[#130e3f] text-xl host-bold mb-4">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Products</Link>
              </li>
              <li>
                <Link href="/grades" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Grades</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#130e3f] text-xl host-bold mb-4">Follow Us On</h2>
            <ul className="space-y-4">
              <li>
                <Link href="https://www.instagram.com/" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/home" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">linkedin</Link>
              </li>
              <li>
                <Link href="https://twitter.com/" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Twitter</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#130e3f] text-xl host-bold mb-4">Company</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">About</Link>
              </li>
              <li>
                <Link href="https://nutberryfood.com/" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Showcase</Link>
              </li>
              <li>
                <Link href="/termsandconditions" className="text-[#130e3f] host-regular hover:text-[#d0721a] text-md transition-all">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:justify-center">
            <Link href="/">
              <Image
                src="/logos/logo.png"
                height={10000}
                width={10000}
                alt="Logo"
                className="md:w-40 w-32"
              />
            </Link>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex sm:justify-center flex-wrap gap-6">
          <p className='text-[#d0721a] text-md host-regular'>© Kaju Basket. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer

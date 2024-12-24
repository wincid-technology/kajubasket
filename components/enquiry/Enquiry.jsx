import Link from 'next/link'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Enquiry = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] host-regular border-t">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">Quick Enquiry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:max-w-md mx-auto">
          <div className="bg-white rounded-2xl flex justify-center overflow-hidden shadow-md text-center hover:shadow-lg transition-all">
            <Link href={"tel:9214089242"} className="p-8 flex justify-center flex-col items-center w-full gap-2">
            <FiPhoneCall className="size-12 mb-3" color="#d0721a" />
              <h3 className="text-gray-800 text-3xl host-semibold">Call Us</h3>
              <p className="text-gray-500 text-lg leading-relaxed">+91-9214089242</p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl flex justify-center overflow-hidden shadow-md hover:shadow-lg transition-all">
            <Link href={"mailto:kajubasket@gmail.com"} className="p-8 w-full flex justify-center flex-col items-center gap-2">
            <MdOutlineMail className="size-12 mb-3" color="#d0721a" />
              <h3 className="text-gray-800 text-3xl host-semibold">Email</h3>
              <p className="text-gray-500 text-lg leading-relaxed">kajubasket@gmail.com</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Enquiry

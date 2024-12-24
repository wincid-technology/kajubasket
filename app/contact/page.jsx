import Link from 'next/link'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'

const ContactPage = () => {
  return (
    <div>
      <div
        className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-4 host-regular">
        <div>
          <h2 className="text-[#130e3f] text-3xl font-extrabold">Get In Touch</h2>
          <p className="text-sm text-[#d0721a] mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.</p>

          <form>
            <div className="space-y-4 mt-8">
              <input type="text" placeholder="Full Name"
                className="p-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#d0721a] outline-none" />

              <input type="email" placeholder="Email"
                className="p-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#d0721a] outline-none" />

              <input type="number" placeholder="Phone No."
                className="p-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#d0721a] outline-none" />

              <input type="text" placeholder="City"
                className="p-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#d0721a] outline-none" />



              <textarea placeholder="Write Message"
                className="p-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#d0721a] outline-none"></textarea>
            </div>

            <button type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#d0721a] hover:bg-[#ad6421] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                viewBox="0 0 548.244 548.244">
                <path fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd" data-original="#000000" />
              </svg>
              Send Message
            </button>
          </form>

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center text-[#d0721a] hover:text-[#ad6421]">
              <MdOutlineMail className="size-6" color="#d0721a" />
              <Link href="mailto:kajubasket@gmail.com" className="text-md ml-4">
                <strong>kajubasket@gmail.com</strong>
              </Link>
            </li>
            <li className="flex items-center text-[#d0721a] hover:text-[#ad6421]">
              <FiPhoneCall className="size-6" color="#d0721a" />
              <Link href="tel:9214089242" className="text-md ml-4">
                <strong>+91-9214089242</strong>
              </Link>
            </li>
          </ul>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7073092753435!2d74.523271975671!3d26.303586877015483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969610fa13d4855%3A0x44bfc4297ef0e297!2sNutberry%20Food%20Processors!5e0!3m2!1sen!2sin!4v1733423702348!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" className="left-0 top-0 h-full w-full rounded-xl" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

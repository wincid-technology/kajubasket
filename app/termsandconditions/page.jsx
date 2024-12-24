import React from 'react'
import { termsAndConditions } from '@/constants/terms'

const TermsConditions = () => {
  return (
    <div>
      <div className="bg-white sm:px-6 px-4 py-10 host-regular">
        <div className="max-w-full px-40 mx-auto">
          <div>
            <h2 className="text-3xl host-bold text-gray-800 inline-block">Terms & Conditions</h2>
            <p className="text-gray-500 text-md host-light mt-4">Welcome to Kajubasket, operated under the brand Nutberry. By accessing or using this Website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.</p>
          </div>

          <hr className="my-8" />


          <div className="grid gap-10">


            {
              termsAndConditions.map((item, index) => (
                <div key={index} className="rounded overflow-hidden">
                  <div>
                    <h3 className="text-xl text-gray-800 host-semibold transition-all">{item.section}</h3>
                    <ul className="mt-4 ml-5 list-disc">
                      {
                        item.content.map((points, i)=>(

                          <li key={i} className="text-gray-500 host-light text-md">{points}</li>
                        ))
                      }
                    </ul>
                  </div>
                      <hr className="my-4" />
                </div>
              ))
            }




          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions

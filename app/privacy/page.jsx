import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='bg-white'>
      <div className=" host-regular px-10 py-12 max-w-[90vw] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 w-full mb-3">
          <div className="text-left">
            <h2 className="text-black text-3xl host-bold mb-3">Privacy Policy</h2>
            <p className="text-black/70 text-lg host-light text-justify">At Kajubasket, your privacy is of utmost importance to us. We are committed to safeguarding the personal information you share with us. When you interact with our website or make a purchase, we may collect essential details such as your name, email address, phone number, billing and shipping addresses, and payment information. This data is used solely to process orders, improve your shopping experience, and communicate updates about your purchases or promotional offers. We implement stringent security measures to protect your information from unauthorized access, ensuring it remains confidential. Kajubasket does not sell, trade, or rent your personal data to third parties. We may share information with trusted service providers only to fulfill specific business functions, such as payment processing or order delivery, under strict confidentiality agreements. By using our website, you consent to our data collection practices, as outlined in this policy. For any queries or concerns regarding your privacy, feel free to contact us directly. Our commitment is to provide a secure and trustworthy platform, allowing you to shop for your favorite cashew products with confidence.</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl shadow-slate-500">
            <Image src="/img/privacy.jpg" alt="Placeholder Image" width={10000} height={10000} className="object-cover w-full h-full" />
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Information We Collect</h2>
            <p className="mb-1 text-lg text-black/50 text-justify">We may collect various types of personal information from our users, including, but not limited to, the following:</p>
            <ol className="list-decimal flex flex-col gap-1 ml-5 text-lg">
              <li className='text-black/70 host-light'><b className='text-black host-semibold'>Personal Identification Information:</b> This includes information such as your name, email address, phone number, and shipping address when you make a purchase or contact us.</li>

              <li className='text-black/70 host-light'><b className='text-black host-semibold'>Payment Information:</b> When you make a purchase, we collect credit card details or other payment information. This data is handled securely by our payment processors, such as Razorpay, and is not stored directly by Kajubasket.</li>

              <li className='text-black/70 host-light'><b className='text-black host-semibold'>Usage Data:</b> We may collect information on how you use our site, including pages visited, time spent on the site, and interactions with various features. This can include data collected through cookies and other tracking technologies.</li>

              <li className='text-black/70 host-light'><b className='text-black host-semibold'>Device Information:</b> Information about the device you are using to access Kajubasket, such as the IP address, browser type, and operating system.</li>
            </ol>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">How We Use Your Information</h2>
            <p className="mb-1 text-lg text-black/50 text-justify">Kajubasket may use the information we collect in the following ways:</p>
            <ul className="list-decimal flex flex-col gap-1 text-lg ml-5">
              <li className='text-black/70 host-light'>To process your orders, manage shipping, and provide customer support.</li>

              <li className='text-black/70 host-light'>To communicate with you, including sending you order confirmations, receipts, and promotional offers, unless you opt-out.</li>

              <li className='text-black/70 host-light'>To improve our website, services, and customer experience.</li>

              <li className='text-black/70 host-light'>To prevent fraud and protect against potential security threats.</li>
              <li className='text-black/70 host-light'>To comply with legal obligations and enforce our terms and conditions.</li>
            </ul>
          </div>
        </div>


        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Cookies and Tracking Technologies</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">We use cookies, web beacons, and other tracking technologies to enhance user experience, analyze trends, and gather demographic information. Cookies allow us to remember your preferences and provide personalized content. You can control the use of cookies through your browser settings, but please note that disabling cookies may affect some website functionalities.</p>
          </div>
        </div>


        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Data Security</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">We are committed to safeguarding your personal information. We implement various security measures, including encryption, to protect your data. However, please note that no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.</p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Sharing Your Information</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">Kajubasket does not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share information with trusted third-party service providers who assist in operating our website, conducting our business, or providing services to you. These third parties are contractually obligated to maintain the confidentiality of your data and use it only for the specified purposes. We may also disclose personal information to comply with legal obligations or protect the rights, property, or safety of Kajubasket, our customers, or others.</p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Your Rights</h2>
            <p className="mb-1 text-lg text-black/50 text-justify">Depending on your location, you may have certain rights regarding your personal information. These rights may include:</p>
            <ul className="list-disc flex flex-col gap-1 text-lg ml-5">
              <li className='text-black/70 host-light'>The right to access the personal data we hold about you.</li>
              <li className='text-black/70 host-light'>The right to correct any inaccuracies in your personal data.</li>
              <li className='text-black/70 host-light'>The right to delete or restrict the processing of your personal data.</li>
              <li className='text-black/70 host-light'>The right to object to the processing of your personal data.</li>
              <li className='text-black/70 host-light'>The right to withdraw your consent at any time.</li>
            </ul>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Third-Party Links</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">
              Our website may contain links to third-party websites or services that are not controlled by Kajubasket. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Children’s Privacy</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">
              Kajubasket does not knowingly collect personal information from children under the age of 13. If we discover that we have inadvertently collected data from a child under 13, we will take steps to delete such information from our systems.
            </p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Data Retention</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Changes to This Privacy Policy</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. Please review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </div>
        </div>

        <hr className='my-8' />

        <div className="grid grid-cols-1 gap-12">
          <div className="text-left">
            <h2 className="text-black text-3xl host-semibold mb-1">Contact Us</h2>
            <p className="mb-1 text-lg text-black/50 text-justify host-light">
              If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>


            <ul className="list-disc flex flex-col gap-1 text-lg ml-5">
              <li className='text-black/70 host-light'>
              <b className='text-black host-semibold'>Email:</b> <Link href="mailto:kajubasket@gmail.com" className="text-md ml-4">
                 kajubasket@gmail.com
                </Link>
              </li>
              <li className='text-black/70 host-light'>
              <b className='text-black host-semibold'>Phone:</b> <Link href="tel:9214089242" className="text-md ml-4">
                  +91-9214089242
                </Link>
              </li>

            </ul>



          </div>
        </div>














      </div>

    </div>
  )
}

export default PrivacyPolicy

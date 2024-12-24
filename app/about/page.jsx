"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const AboutPage = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing on the server-side
  }

  const imageMotion = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    hidden2: { opacity: 0, x: 100 },
    visible2: { opacity: 1, x: 0 },
    transition1 :{ duration: 1, bounce: 0.1 }
  };

  return (
    <section className="w-full px-10">
      <div className="max-w-7xl mx-auto host-regular my-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-800 text-5xl text-center host-bold mb-6">About Kaju Basket</h2>
          <p className="text-[#d0721a] text-md">
            Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.
          </p>
        </div>

        <div className="mt-32 flex flex-col">
          {/* Section 1: Who We Are */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition="transition1"
              variants={imageMotion}
            >
              <Image
                src="/img/wwa.jpg"
                alt="Who We Are"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-3">
                <Image
                  src="/about-img/1.png"
                  alt="Who We Are"
                  width={10000}
                  height={10000}
                  className="w-12 object-contain rounded-md"
                />
                Who We Are
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
                At Kajubasket, we bring you the finest selection of premium cashews, sourced with care and delivered with love. As part of the Nutberry brand, we are passionate about providing high-quality, delicious, and healthy snacks that enrich your lifestyle. Our mission is to celebrate the richness of nature’s bounty by crafting an experience that’s as wholesome as it is delightful.

                From handpicking the best cashews to ensuring they reach your doorstep fresh and flavorful, we are committed to excellence in every bite. At Kajubasket, quality is our promise, and customer satisfaction is our priority.
              </p>
            </div>
          </div>

          <hr className="lg:my-20 my-10" />

          {/* Section 2: Our Story */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/2.png"
                  alt="Our Story"
                  width={10000}
                  height={10000}
                  className="w-16 rotate-12 object-contain rounded-md"
                />
                Our Story
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
                We are passionate about bringing you the finest quality cashews straight from the lush orchards of India. Founded with a vision to celebrate nature’s bounty, our journey began with a simple goal: to deliver premium, handpicked cashews that blend taste, health, and tradition. Every Nutberry product is a testament to our dedication to sourcing sustainably and crafting with care. From farm to your doorstep, we ensure every bite is packed with freshness and flavor. Join us in savoring the richness of nature, one nut at a time.
              </p>
            </div>
            <motion.div
              initial="hidden2"
              whileInView="visible2"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/os.jpg"
                alt="Our Story"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>

          <hr className="lg:my-20 my-10" />

          {/* Section 3: Our Mission and Vision */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/mv.jpg"
                alt="Mission and Vision"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/3.png"
                  alt="Mission and Vision"
                  width={10000}
                  height={10000}
                  className="w-16 object-contain rounded-md"
                />
                Our Mission and Vision
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
                <span><b className="host-semibold">Our Mission</b> is to deliver premium-quality cashews that delight your taste buds while promoting health and wellness. We strive to ensure every nut we offer embodies purity, freshness, and the rich heritage of authentic flavors.</span>

                <span><b className="host-semibold">Our Vision</b> is to become a trusted name in the cashew industry, fostering sustainable practices and connecting people worldwide to the finest nuts. Through innovation and care, we aim to enrich lives and spread joy with every bite.</span>
              </p>
            </div>
          </div>

          <hr className="lg:my-20 my-10" />

          {/* Section 4: What Sets Us Apart */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/4.png"
                  alt="What Sets Us Apart"
                  width={10000}
                  height={10000}
                  className="w-16 object-contain rounded-md"
                />
                What Sets Us Apart
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
                We believe in delivering excellence with every bite. Our cashews are sourced from the finest farms, ensuring unmatched quality and freshness. With a commitment to sustainable practices and rigorous quality control, we bring you products that are as pure as nature intended. Experience the perfect blend of taste, nutrition, and trust that makes Nutberry the preferred choice for cashew lovers everywhere.
              </p>
            </div>
            <motion.div
              initial="hidden2"
              whileInView="visible2"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/qa.jpg"
                alt="What Sets Us Apart"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>

          <hr className="lg:my-20 my-10" />

          {/* Section 5: The People Behind Kaju Basket */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/tw.jpg"
                alt="People Behind"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/5.png"
                  alt="People Behind"
                  width={10000}
                  height={10000}
                  className="w-16 object-contain rounded-md"
                />
                The People Behind Kaju Basket
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
                Behind every cashew we deliver is a team of dedicated individuals who care deeply about quality, sustainability, and your satisfaction. From our farmers to our distribution team, we are all united by a common goal: to provide you with the best cashews and the best service. Meet the passionate people who make Kaju Basket a brand you can trust.
              </p>
            </div>
          </div>

          <hr className="lg:my-20 my-10" />

          {/* Section 6: Commitment to Sustainability*/}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/6.png"
                  alt="People Behind"
                  width={10000}
                  height={10000}
                  className="w-16 object-contain rounded-md"
                />
                Commitment to Sustainability
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
              At Kajubasket, we believe in nurturing nature while delivering the finest cashews to your table. Sustainability is at the core of our operations. From responsibly sourced cashews to eco-friendly packaging, every step reflects our dedication to preserving the environment. By choosing Nutberry cashews, you’re not only enjoying premium quality but also supporting practices that protect our planet for generations to come. Let’s savor the taste of goodness while caring for the world we share.
              </p>
            </div>
            <motion.div
              initial="hidden2"
              whileInView="visible2"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/cs.jpg"
                alt="People Behind"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </div>


          
          <hr className="lg:my-20 my-10" />

          {/* Section 5: The People Behind Kaju Basket */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={imageMotion}
            >
              <Image
                src="/img/cr.jpg"
                alt="People Behind"
                width={10000}
                height={10000}
                className="w-full object-contain rounded-md shadow-[0_14px_20px_11px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
            <div>
              <h3 className="text-[#130e3f] text-3xl mb-4 host-semibold uppercase flex items-center gap-2">
                <Image
                  src="/about-img/7.png"
                  alt="People Behind"
                  width={10000}
                  height={10000}
                  className="w-16 object-contain rounded-md"
                />
                Customer-Centric Approach
              </h3>
              <p className="ml-8 host-light text-lg flex flex-col gap-5 text-justify">
              We place our customers at the heart of everything we do. From the moment you browse our collection of premium cashews to the moment your order arrives at your door, we are committed to providing a seamless and personalized experience. We listen to your needs, ensuring the finest quality nuts with every purchase, and we continuously strive to enhance our service through your feedback. Our dedication to customer satisfaction means you can enjoy a hassle-free shopping experience, knowing that we are always here to support you with the best products and service.
              </p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default AboutPage;

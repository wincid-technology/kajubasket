import { piecesGrades, scorchedGrades, scorchedPiecesGrades, whiteGrades, whitePiecesGrades } from '@/constants/grades'
import Image from 'next/image'
import React from 'react'

const Grades = () => {
  return (
    <div>
      <div className="relative w-full host-regular">
        <Image src="/img/gradebanner.jpg" alt="Background Image" height={10000} width={5000000} className="w-full h-full object-cover" />
      </div>

      <div className="host-regular my-10">
        <div className="max-w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20">


          <div className="text-center">
            <h2 className="text-5xl text-gray-800 inline-block relative">Cashew Grades</h2>
            <p className="my-1 text-lg text-black/50 text-center host-light">At Kajubasket, we take pride in offering premium-quality cashews that cater to diverse preferences and needs. Cashews are graded based on their size, color, and shape, ensuring that every nut meets specific standards of quality and taste.</p>
          </div>

          <div className='mt-16'>
            <h2 className="text-3xl text-gray-800 inline-block relative">White Wholes</h2>
            <p className="my-1 text-md text-black/50 text-start host-light">At Kajubasket, we take pride in offering premium-quality cashews that cater to diverse preferences and needs. Cashews are graded based on their size, color, and shape, ensuring that every nut meets specific standards of quality and taste.</p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6 mx-auto">
              {
                whiteGrades.map((whites) => (
                  <div key={whites.id}
                    className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                    <div className="min-h-[100px] flex justify-center">
                      <Image src={whites.img} alt='title' width={10000} height={10000} className="w-[70%] h-full object-cover" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-gray-800 text-xl host-semibold">{whites.grade}</h3>
                      <p className="mt-2 text-md host-light text-[#d0721a] leading-relaxed">
                        {whites.description}
                      </p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Size: </b>{whites.size}</p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Usage: </b>{whites.use}</p>
                    
                    </div>
                  </div>
                ))
              }


            </div>
          </div>

          <hr className='my-8' />

          <div className="">
            <h2 className="text-3xl text-gray-800 inline-block relative">Scorched Wholes</h2>
            <p className="my-1 text-md text-black/50 text-start host-light">Scorched wholes are whole cashew kernels that have undergone slight discoloration during the drying or roasting process. Despite their appearance, scorched wholes retain their rich flavor, nutritional value, and versatility in culinary applications. They are considered more affordable than white wholes due to the visual difference but are equally delicious and nutritious.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {
                scorchedGrades.map((scorched) => (
                  <div key={scorched.id}
                    className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                    <div className="min-h-[100px] flex justify-center">
                      <Image src={scorched.img} alt='title' width={10000} height={10000} className="w-[70%] h-full object-cover" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-gray-800 text-xl host-semibold">{scorched.grade}</h3>
                      <p className="mt-2 text-md host-light text-[#d0721a] leading-relaxed">
                        {scorched.description}
                      </p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Size: </b>{scorched.size}</p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Usage: </b>{scorched.use}</p>
                    
                    </div>
                  </div>
                ))
              }


            </div>
          </div>

          <hr className='my-8' />

          <div className="">
            <h2 className="text-3xl text-gray-800 inline-block relative">White Cashew Pieces</h2>
            <p className="my-1 text-md text-black/50 text-start host-light">White cashew pieces and splits are highly versatile and commonly used in both culinary and baking applications. White splits refer to cashews that have naturally or mechanically split, often during processing, and are ideal for garnishing, cooking, or adding texture to desserts. These splits maintain the rich, creamy flavor of whole cashews while offering a more affordable option for bulk use. On the other hand, white cashew pieces, available in both large and small sizes, are perfect for creating powders, cashew butter, or energy bars.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {
                whitePiecesGrades.map((pieces) => (
                  <div key={pieces.id}
                    className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                    <div className="min-h-[100px] flex justify-center">
                      <Image src={pieces.img} alt='title' width={10000} height={10000} className="w-[70%] h-full object-cover" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-gray-800 text-xl host-semibold">{pieces.grade}</h3>
                      <p className="mt-2 text-md host-light text-[#d0721a] leading-relaxed">
                        {pieces.description}
                      </p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Size: </b>{pieces.size}</p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Usage: </b>{pieces.use}</p>
                    
                    </div>
                  </div>
                ))
              }
            </div>
          </div>



          <hr className='my-8' />

          <div className="">
            <h2 className="text-3xl text-gray-800 inline-block relative">Scorched Cashew Pieces</h2>
            <p className="my-1 text-md text-black/50 text-start host-light">Scorched cashew pieces and splits are versatile options that offer unique flavors and textures for various culinary uses. Scorched cashew splits, characterized by their slight discoloration, are perfect for cooking and garnishing, adding a distinct roasted flavor to dishes, desserts, and salads. These cashews are typically split naturally or during processing, making them ideal for both bulk cooking and delicate recipes. On the other hand, scorched cashew pieces, which can range from larger to smaller sizes, provide an excellent option for baking, snacking, and making energy bars.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {
                scorchedPiecesGrades.map((pieces) => (
                  <div key={pieces.id}
                    className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                    <div className="min-h-[100px] flex justify-center">
                      <Image src={pieces.img} alt='title' width={10000} height={10000} className="w-[70%] h-full object-cover" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-gray-800 text-xl host-semibold">{pieces.grade}</h3>
                      <p className="mt-2 text-md host-light text-[#d0721a] leading-relaxed">
                        {pieces.description}
                      </p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Size: </b>{pieces.size}</p>
                      <p className='mt-4 text-md host-light text-gray-500 leading-relaxed'><b className="text-black">Usage: </b>{pieces.use}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Grades

import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 h-[50rem] w-full dark:bg-black bg-blue-400 dark:bg-grid-gray-900 bg-grid-black/[0.2] relative">
      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl perspective-1000">
        
        {/* Card 1 */}
        <div className="bg-gray-900 rounded-md shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://plus.unsplash.com/premium_photo-1664297950425-99a968926a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150" alt="Card 1" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
        {/* Card 2 */}
        <div className="bg-gray-900 rounded-md shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJD3ZBX3ED6gcI-fF3qqzM3SPujbtVvQ_MA&s/150" alt="Card 2" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
        {/* Card 3 */}
        <div className="bg-gray-900 rounded-md shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtp941GzKhHe95PNM1kMhrUW2uPpX5_2PtNw&s/150" alt="Card 3" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
        {/* Card 4 */}
        <div className="bg-gray-900 rounded-sm shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/intro-to-css.jpeg?v=1580838171/150" alt="Card 4" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
        {/* Card 5 */}
        <div className="bg-gray-900 rounded-sm shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdakQdiHvoMz45Z0HJAeTwtu0xMf9-8Vo-g&s/150" alt="Card 5" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
        {/* Card 6 */}
        <div className="bg-gray-900 rounded-sm shadow-sm p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:rotate-y-3 hover:-rotate-x-3 hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEu7r62jJvFBaZ2Ky88ozxKU3R2GXTzCBqYA&s/150" alt="Card 6" className="rounded-t-lg mb-4 w-full h-40 object-cover" />
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
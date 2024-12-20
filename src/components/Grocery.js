import { useEffect } from 'react';
import { SWIGGY_API } from '../utils/constants';



const Grocery = () => {

  useEffect(() => {
    fetchBanner();
  })

  const fetchBanner = async () => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    console.log(json);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Grocery Store</h1>
        <p className="text-lg text-gray-500 mt-4">
          Fresh groceries delivered to your doorstep!
        </p>
      </div>

      {/* Promotional Banner */}
      <div className="relative mb-12">
        <img
          src="https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp"
          alt="Promotional Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <h2 className="text-6xl text-white">Exclusive Deals on Fresh Products</h2>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <img
              src="https://i.pinimg.com/564x/19/77/9c/19779ce8c346fe51905ead27502c87e1.jpg"
              alt="Fruits & Vegetables"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">Fruits & Vegetables</h3>
            <p className="text-gray-600 mt-2">Fresh and organic fruits and vegetables.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <img
              src="https://www.nicepng.com/png/detail/409-4092338_our-products-dairy-and-milk-products.png"
              alt="Dairy Products"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">Dairy Products</h3>
            <p className="text-gray-600 mt-2">High-quality dairy products for your daily needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <img
              src="https://www.nicepng.com/png/detail/59-598489_drinks-drink.png"
              alt="Beverages"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">Beverages</h3>
            <p className="text-gray-600 mt-2">Refreshing drinks and juices to quench your thirst.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 bg-orange-500 py-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Fast Delivery & Quality Products</h2>
          <p className="text-lg">Order now and get your groceries delivered within minutes!</p>
        </div>
      </div>
    </div>
  );
};

export default Grocery;

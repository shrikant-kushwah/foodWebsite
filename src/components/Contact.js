const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">

      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Contact Us Form</h1>
        <p className="text-lg text-gray-500 mt-4">
          Issue with your live order?
        </p>
      </div>

      {/* Promotional Banner */}
      <div className="relative w-full mb-12">
        <img
          src="https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp"
          alt="Promotional Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <h2 className="text-6xl text-white">We would love to hear from you!</h2>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <form action="" className="flex flex-col">
          <input
            type="text"
            className="border border-gray-300 p-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="border border-gray-300 p-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your Email Id"
          />
          <textarea
            className="border border-gray-300 p-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your Message"
            rows="5"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out shadow-md"
          >
            Submit feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import User from "./User";
import { Component } from 'react';
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { Link } from 'react-router-dom'
import AboutImg from '../assets/aboutImg.png'

class About extends Component {

  constructor(props) {
    super(props);
    // console.log("Parant Constructor");
  }

  componentDidMount() {
    // console.log("Parant ComponentDidMount");
  }

  // and will class have a render method.
  render() {

    // console.log("Parant Render");

    return (
      <div className="about flex flex-col lg:flex-row items-center min-h-screen py-12 px-6 lg:px-16">
        {/* Left Section - Text */}
        <div className="container mx-auto max-w-xl lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-700 mb-6">About Us</h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            Welcome to our delicious journey! Dive into who we are and why we bring only the best to your table.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            We build innovative products and solutions, delivering unparalleled convenience to urban consumers.
            Every bit of your work with us helps elevate the lives of our users across India.
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-block text-lg px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-200 ease-in-out">
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
          <img src={AboutImg} alt="About Us" className="w-full max-w-md mx-auto rounded-xl" />
        </div>
      </div>
    )
  }
}

export default About;
// AboutUs.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100  py-8 ">
      <div className="container mt-500px mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-700 mb-6">
            Welcome to our website! At CropeCare, we are passionate about Agriculture. Our team is dedicated to providing help to  Farmers.
          </p>
          <p className="text-gray-700 mb-6">ons
            Founded in 2024, we have been serving customers around the globe with excellence. Our commitment to quality and innovation drives everything we do.
          </p>
          <p className="text-gray-700 mb-6">
            [Additional Information about Your Company, such as Values, Team, Achievements, etc.]
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Sample team members */}
            <div className="bg-white shadow-md p-4 mr-auto rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sourabh Tanwar</h3>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="text-gray-600 mt-2">Sourabh Tanwar is a visionary leader with a passion for innovation...</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Vishal Thakur</h3>
              <p className="text-gray-700">Head of Operation</p>
              <p className="text-gray-600 mt-2">Vishal Thakur ensures smooth operations and customer satisfaction...</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Shivshankar Dangi</h3>
              <p className="text-gray-700">Frontend Developer</p>
              <p className="text-gray-600 mt-2">Shivshankar Dangi is responsible for our cutting-edge technology solutions...</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Vishal Singh Tomar</h3>
              <p className="text-gray-700">Backend Developer</p>
              <p className="text-gray-600 mt-2">Vishal singh Tomar is responsible for our cutting-edge technology solutions...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import v from './image/v.jpg'
import s from './image/s.jpg'
// import v3 from './image/v3.jpg'
import v2 from './image/v2.jpg'
import s2 from './image/s2.jpg'


const Team = () => {
 

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        
          <div className="flex flex-col items-center">
          <img
            className="rounded-full w-52 h-52 object-cover mb-4"
            src={s}
            alt={name}
          />
          <h2 className="text-lg font-bold">Sourabh Tanwar</h2>
          <p className="text-sm text-gray-600">Founder</p>
      </div>

      <div className="flex flex-col items-center">
          <img
            className="rounded-full w-52 h-52 object-cover mb-4"
            src={v}
            alt={name}
          />
          <h2 className="text-lg font-bold">Vishal Thakur</h2>
          <p className="text-sm text-gray-600">Leader</p>
      </div>

      <div className="flex flex-col items-center">
          <img
            className="rounded-full w-52 h-52 object-cover mb-4"
            src={s2}
            alt={name}
          />
          <h2 className="text-lg font-bold">Shivshankar Dangi</h2>
          <p className="text-sm text-gray-600">Frontend Developer</p>
      </div>

      <div className="flex flex-col items-center">
          <img
            className="rounded-full w-52 h-52 object-cover mb-4"
            src={v2}
            alt={name}
          />
          <h2 className="text-lg font-bold">Vishal Singh Tomar</h2>
          <p className="text-sm text-gray-600">Backend Developer</p>
      </div>

      

        </div>
      </div>
    </section>
  );
};

export default Team;

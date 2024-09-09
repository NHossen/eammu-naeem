import React from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaHelicopter, FaPaperPlane } from 'react-icons/fa';

const flightCategories = [
  { name: 'International Flights', icon: <FaPlaneDeparture color="#4CAF50" />, link: '/services/flights/internationalflight' }, // Green
  { name: 'Domestic Flights', icon: <FaPlaneArrival color="#FF9800" />, link: '/flights/domestic' }, // Orange
  { name: 'Helicopter Services', icon: <FaHelicopter color="#2196F3" />, link: '/flights/helicopter' }, // Blue
  { name: 'Private Jets', icon: <FaPaperPlane color="#E91E63" />, link: '/flights/private-jets' }, // Pink
];

const FlightCategories = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-full shadow-md mt-10">
          {flightCategories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="flex items-center justify-center text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-300"
              style={{ flex: 1, margin: '0 5px', padding: '10px 0' }}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              <span className="text-base font-medium">{category.name}</span>
            </a>
          ))}
        </div>
    );
};

export default FlightCategories;

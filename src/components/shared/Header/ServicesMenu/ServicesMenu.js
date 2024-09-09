import React from 'react';
import {
  FaPlane, FaHotel, FaSuitcase, FaTags, FaLandmark,
  FaShuttleVan, FaBus, FaShip, FaPassport
} from 'react-icons/fa';

const categories = [
  { name: 'Visa', color: 'bg-dark-green', hoverColor: 'hover:bg-pink-600', icon: <FaPassport />, link: '/services/visa' },
  { name: 'Flights', color: 'bg-yellow-500', hoverColor: 'hover:bg-red-600', icon: <FaPlane />, link: '/services/flights' },
  { name: 'Packages', color: 'bg-pink-500', hoverColor: 'hover:bg-yellow-600', icon: <FaSuitcase />, link: '/packages' },
  { name: 'Travel Deals', color: 'bg-red-500', hoverColor: 'hover:bg-green-600', icon: <FaTags />, link: '/travel-deals' },
  { name: 'Hotels', color: 'bg-green-500', hoverColor: 'hover:bg-pink-600', icon: <FaHotel />, link: '/hotels' },
  { name: 'Sightseeing', color: 'bg-red-600', hoverColor: 'hover:bg-yellow-500', icon: <FaLandmark />, link: '/sightseeing' },
  { name: 'Transfers', color: 'bg-yellow-600', hoverColor: 'hover:bg-red-500', icon: <FaShuttleVan />, link: '/transfers' },
  { name: 'Bus', color: 'bg-green-600', hoverColor: 'hover:bg-pink-500', icon: <FaBus />, link: '/bus' },
  { name: 'Cruise', color: 'bg-pink-600', hoverColor: 'hover:bg-green-500', icon: <FaShip />, link: '/cruise' },
];

const ServicesMenu = () => {
  return (
    <div className="flex justify-center mt-8">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.link}
          className={`inline-flex items-center justify-center px-5 py-3 text-white ${category.color} ${category.hoverColor} transition-colors duration-300`}
        >
          <div className="flex items-center">
            <span className="mr-3 text-2xl">{category.icon}</span>
            <span className="text-base font-normal">{category.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServicesMenu;

import React from 'react';
import { FaGraduationCap, FaGlobe, FaBriefcase, FaUserTie } from 'react-icons/fa';

const visaCategories = [
  { name: 'Student Visa', icon: <FaGraduationCap color="#4CAF50" />, link: '/services/visa/studentvisa' }, // Green
  { name: 'Global Visa/Tourist Visa', icon: <FaGlobe color="#FF9800" />, link: '/services/visa/touristvisa' }, // Orange
  { name: 'Work Visa', icon: <FaBriefcase color="#2196F3" />, link: '/work-visa' }, // Blue
  { name: 'Immigration Consultant', icon: <FaUserTie color="#E91E63" />, link: '/immigration-consultant' }, // Pink
];

const VisaCategories = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-full shadow-md mt-10">
          {visaCategories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="flex items-center justify-center text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-300"
              style={{ flex: 1, margin: '0 5px', padding: '10px 0' }} // Controlled padding and margin
            >
              <span className="text-2xl mr-2">{category.icon}</span> {/* Icon beside text */}
              <span className="text-base font-medium">{category.name}</span> {/* Text beside icon */}
            </a>
          ))}
        </div>
    );
};

export default VisaCategories;

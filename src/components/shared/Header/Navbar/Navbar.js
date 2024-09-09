"use client";
import React, { useState } from 'react';
import Link from "next/link";  // Use Next.js Link component
import { PanelMenu } from 'primereact/panelmenu';
import 'primereact/resources/themes/saga-blue/theme.css';  // Ensure these are imported
import 'primereact/resources/primereact.min.css';           // Ensure these are imported
import 'primeicons/primeicons.css';                         // Ensure these are imported
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import SignIn from '@/components/Sign_in_Log_in/Sign_in/SignIn';
import LogIn from '@/components/Sign_in_Log_in/Log_in/LogIn';

import {
  FaPlane, FaHotel, FaSuitcase, FaTags, FaLandmark,
  FaShuttleVan, FaBus, FaShip, FaPassport
} from 'react-icons/fa';








function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false); // New state for Offers modal
  const [isCallUsModalVisible, setIsCallUsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // To switch between Login and Sign Up

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const toggleOfferModal = () => {
    setIsOfferModalVisible(!isOfferModalVisible);
  };
  const toggleCallUsModal = () => {
    setIsCallUsModalVisible(!isCallUsModalVisible);
  };

  // Link to Side Bar
 


  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => window.location.href = "/",
    },
    {
      label: 'Our Services',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Visa Services',
          icon: 'pi pi-ticket',
          items:[
            {
              label: 'Student Visa',
              icon: 'pi pi-circle',
              command: () => window.location.href = "/services/visa/studentvisa",
            },
            {
              label: 'Tourist Visa',
              icon: 'pi pi-circle',
              command: () => window.location.href = "/services/visa/touristvisa",
            
            },


          ]
        },

        {
          label: 'Flight Tickets',
          icon: <FaPlane />,
          command: () => window.location.href = "/services/flights",
        },
        
        {
          label: 'Tour Packages',
          icon: 'pi pi-map',
          command: () => window.location.href = "/services/tour-packages",
        },
        {
          label: 'Transfers',
          icon: 'pi pi-car',
          command: () => window.location.href = "/services/transfers",
        },
        {
          label: 'Sightseeing',
          icon: 'pi pi-eye',
          command: () => window.location.href = "/services/sightseeing",
        },
        {
          label: 'Hotels',
          icon: 'pi pi-building',
          command: () => window.location.href = "/services/hotels",
        }
      ]
    },
    {
      label: 'Gift Card',
      icon: 'pi pi-gift',
      command: () => window.location.href = "/gift-card",
    },
    {
      label: 'My Bookings',
      icon: 'pi pi-book',
      command: () => window.location.href = "/my-bookings",
    },
    {
      label: 'Make Payment',
      icon: 'pi pi-credit-card',
      command: () => window.location.href = "/make-payment",
    },
    {
      label: 'Bank Account Details',
      icon: 'pi pi-wallet',
      command: () => window.location.href = "/bank-account-details",
    },
    {
      label: 'Offers / Promo Codes',
      icon: 'pi pi-tag',
      command: () => window.location.href = "/offers",
    },
    {
      label: 'Travel Deals',
      icon: 'pi pi-globe',
      command: () => window.location.href = "/travel-deals",
    },
    {
      label: 'Destination Guide',
      icon: 'pi pi-compass',
      command: () => window.location.href = "/destination-guide",
    },
    {
      label: 'Holiday Ideas',
      icon: 'pi pi-lightbulb',
      command: () => window.location.href = "/holiday-ideas",
    },
    {
      label: 'Travel Blog',
      icon: 'pi pi-bookmark',
      command: () => window.location.href = "/travel-blog",
    }
  ];

  return (
    <nav className="bg-white p-4 flex justify-around items-center border-b border-gray-200">
      {/* Left Side: Toggle and Logo */}
      <div className="flex items-center space-x-4">
        {/* Toggle Button */}
        <button
          className="text-dark-green focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12' // Close icon
                  : 'M4 6h16M4 12h16m-7 6h7' // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Logo */}
        
        <Link href="/" className="text-dark-green text-lg font-bold">
          Your Logo
        </Link>
      </div>

      {/* Right Side: Account, Offer, Call Us */}
      <div className="flex items-center space-x-8">
      <button
          className={`
            px-4 py-2 rounded-full 
            flex items-center gap-2 
            text-slate-500
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            
            transition-all

            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-dark-green
          `}
          onClick={toggleModal}
        >
          <FiSend />
          <span>My Account</span>
        </button>
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-dark-green
    `}
    onClick={toggleOfferModal}
    >
      <FiSend />
      <span>Offers</span>
    </button>
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-lime-800
    `}
    onClick={toggleCallUsModal}
    >
      <FiSend />
      <span>Call Us</span>
    </button>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-dark-green transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 z-50 p-6 shadow-lg border-r border-gray-200 overflow-y-auto`}
      >
        {/* Guest Section */}
        <div className="flex items-center space-x-2 mb-6">
        <i className="pi pi-user text-dark-green text-xl"></i>
          <div>
            <p className="text-dark-green flex justify-center text-xl mb-2 font-medium">Hello, Guest!</p>
            <div className='flex justify-center flex-col gap-2'>
            <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-dark-green
    `}
    onClick={toggleModal}
    >
      <FiSend />
      <span>Log In</span>
    </button>
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-dark-green
    `}
    onClick={toggleModal}
    >
      <FiSend />
      <span>Sign Up</span>
    </button>
            
  
            </div>
           
          </div>
        </div>

        {/* Main Menu with PanelMenu */}
        <PanelMenu model={items} className="" />

        {/* Divider */}
        <hr className="border-gray-300 my-4" />

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex justify-center">Quick Links</h3>
          <ul className="space-y-2 ml-4">
            <li>
              <Link
                href="/send-enquiry"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Enquiry
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/newspaper-ads"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Newspaper Ads
              </Link>
            </li>
            <li>
              <Link
                href="/announcements"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Announcements
              </Link>
            </li>
            <li>
              <Link
                href="/visa-forms"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Visa Forms
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Modal for My Account */}
      <Dialog 
        header="My Account" 
        visible={isModalVisible} 
        onHide={toggleModal} 
        breakpoints={{'960px': '75vw', '640px': '100vw'}} 
        style={{ width: '50vw' }}
      >
        <div>
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 ${activeTab === 'login' ? 'bg-dark-green text-white' : 'bg-gray-100 text-dark-green'} rounded-md`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
            <button
              className={`ml-4 px-4 py-2 ${activeTab === 'signup' ? 'bg-dark-green text-white' : 'bg-gray-100 text-dark-green'} rounded-md`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>
          {activeTab === 'login' ? <LogIn /> : <SignIn />}
        </div>
      </Dialog>
      {/* Modal for Offers */}
      <Dialog 
        header="Special Offers and Discounts" 
        visible={isOfferModalVisible} 
        onHide={toggleOfferModal} 
        breakpoints={{'960px': '75vw', '640px': '100vw'}} 
        style={{ width: '50vw' }}
      >
        <div className="p-6 space-y-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Exclusive Offers!</h2>
          <p className="text-lg">Check out our special discounts and deals available for a limited time only. Don’t miss out on the opportunity to save big on your next purchase.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Discount 1: 20% off on all items</li>
            <li>Discount 2: Buy one, get one free</li>
            <li>Discount 3: Free shipping on orders over $50</li>
          </ul>
        </div>
      </Dialog>
      {/* Modal for Call Us */}
      <Dialog 
        header="Contact Us" 
        visible={isCallUsModalVisible} 
        onHide={toggleCallUsModal} 
        breakpoints={{'960px': '75vw', '640px': '100vw'}} 
        style={{ width: '50vw' }}
      >
        <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-100 text-green-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
              <FiPhone className="text-3xl text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a href="tel:+1234567890" className="text-lg text-green-800 hover:text-black">+123-456-7890</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
              <FiMail className="text-3xl text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:info@example.com" className="text-lg text-green-800 hover:text-black">info@example.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
              <FiMapPin className="text-3xl text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-lg text-green-800 hover:text-black">123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400">
              <FaYoutube className="text-3xl" />
            </a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>
      </Dialog>
    </nav>
  );
}

export default Navbar;

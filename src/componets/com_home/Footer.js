import React from "react";

export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white py-8 ">
        <div className="container mx-auto">   
  
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg   
   font-bold">Your App Name</h3>
              <p>Copyright © {new Date().getFullYear()} Your Company</p>
              <p>Contact Us: +91 1234567890</p>
              <p>Email: support@yourapp.com</p>
            </div>
            <div className="flex flex-col md:flex-row space-x-4">
              <a href="#" className="hover:text-gray-300">Contact Us</a>
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-red-600">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-green-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
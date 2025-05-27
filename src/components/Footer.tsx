
import React from 'react';
import { School, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-text-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <School className="w-8 h-8" />
              <span className="text-xl font-primary-bold">St. Martinez International School</span>
            </div>
            <p className="text-gray-400 mb-4 font-primary-regular">
              Nurturing young minds and building bright futures since 2005.
            </p>
            <div className="space-y-2 text-gray-400 font-primary-regular">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@st.martinez.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Near Bypass, Fatehabad Road
Shamsabad, Agra - 283125</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-primary-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors font-primary-regular">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors font-primary-regular">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-400 hover:text-white transition-colors font-primary-regular">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors font-primary-regular">Admissions</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-white transition-colors font-primary-regular">Activities</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-primary-regular">Contact</Link></li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-primary-bold mb-4">Academic Programs</h3>
            <ul className="space-y-2 text-gray-400 font-primary-regular">
              <li>Kindergarten (KG)</li>
              <li>Primary School (1-3)</li>
              <li>Elementary (4-6)</li>
              <li>Middle School (7-9)</li>
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-lg font-primary-bold mb-4">Important Information</h3>
            <ul className="space-y-2 text-gray-400 font-primary-regular">
              <li>School Hours: 8:00 AM - 2:30 PM</li>
              <li>Office Hours: 8:00 AM - 4:00 PM</li>
              <li>Admission Open: January - March</li>
              <li>Emergency Contact: +91 98765 43211</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-primary-regular">&copy; 2024 St. Martinez International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

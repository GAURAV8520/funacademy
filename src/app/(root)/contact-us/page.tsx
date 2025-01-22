"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Have questions about our courses or need help? Our team is here to support your educational journey.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-12">
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Phone className="w-10 h-10 mx-auto mb-4 text-blue-600" />
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-gray-600">+1 (555) 765-4321</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Mail className="w-10 h-10 mx-auto mb-4 text-blue-600" />
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">support@funacademy.com</p>
          <p className="text-gray-600">info@funacademy.com</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <MapPin className="w-10 h-10 mx-auto mb-4 text-blue-600" />
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">123 Learning Street</p>
          <p className="text-gray-600">Education City, EC 12345</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Clock className="w-10 h-10 mx-auto mb-4 text-blue-600" />
          <h3 className="font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">Mon - Fri: 9:00 - 18:00</p>
          <p className="text-gray-600">Sat: 9:00 - 14:00</p>
        </Card>
      </div>

      {/* Contact Form Section */}
      <div className="grid md:grid-cols-2 gap-8 px-4 mb-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="text-gray-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input 
                type="tel"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="How can we help you?"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How do I enroll in a course?</h3>
              <p className="text-gray-600">Simply browse our course catalog, select your desired course, and click the "Enroll" button. Follow the checkout process to complete your enrollment.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers. For corporate enrollments, we also offer invoice payments.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all our courses if you're not satisfied with the content.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How long do I have access to the course?</h3>
              <p className="text-gray-600">Once enrolled, you have lifetime access to the course content, including any future updates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-12">
        {/* Replace this div with your actual map component */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Map Component Goes Here
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React from 'react'

function Footer() {
  return (
    
<div className="bg-white py-12 border-t">
  <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
    {/* Logo & Description */}
    <div className="col-span-1 md:col-span-2">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">FuNacademy</h2>
        <p className="text-gray-700 mt-4 text-sm leading-relaxed">
          fUnacademy is democratizing education, making it accessible to all.
          Join the revolution, learn on India's largest learning platform.
        </p>
      </div>
      {/* Contact */}
      <div className="mt-6">
        <h3 className="text-gray-900 font-semibold text-sm">
          Reach out to us
        </h3>
        <p className="text-gray-700 text-sm mt-1">
          Get your questions answered about learning with Unacademy.
        </p>
        <p className="text-green-500 font-bold mt-2">
          📞 Call: +91 8585858585
        </p>
      </div>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>About Us</li>
        <li>Shikshodaya</li>
        <li>Careers</li>
        <li>Blogs</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Help & Support</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>User Guidelines</li>
        <li>Site Map</li>
        <li>Refund Policy</li>
        <li>Takedown Policy</li>
        <li>Grievance Redressal</li>
      </ul>
    </div>
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Popular Goals</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>IIT JEE</li>
        <li>UPSC</li>
        <li>SSC</li>
        <li>CSIR UGC NET</li>
        <li>NEET UG</li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t mt-8 pt-6">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-500">
        © 2025 Sorting Hat Technologies Pvt Ltd
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer

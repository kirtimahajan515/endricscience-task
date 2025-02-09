import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
    style={{padding:"70px"}}
    className="bg-[#00245A] text-white px-6 sm:px-10 md:px-12 py-12 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */} 
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold">Fuel your curiosity</h2>
          <p className="text-lg">Explore our journals today!</p>
          <button className="w-48 h-10 bg-white text-[#00245A] rounded-full font-semibold hover:bg-gray-200">
            BROWSE JOURNALS
          </button>
          <h4 className="text-2xl mt-4">Stay Connected</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-white text-xl hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-white text-xl hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="text-white text-xl hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-white text-xl hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">Useful links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Publish With Us</a></li>
              <li><a href="#" className="hover:underline">Join as Editor / Reviewer</a></li>
              <li><a href="#" className="hover:underline">Sign In / Sign Up</a></li>
              <li><a href="#" className="hover:underline">Become Partner</a></li>
            </ul>
          </div>

        <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Members</a></li>
              <li><a href="#" className="hover:underline">Policy / T&C</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Report Error</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Complaint</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="text-sm text-center mt-12">
        © 2024 EndricScience. All rights reserved.
      </p>
    </footer>
  );
}





import React from 'react'
import { FaLinkedin ,FaTwitter, FaGithub } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold">NB</h1>

  <div className="flex space-x-6 mt-4">
    <a href="https://www.linkedin.com/in/navabharathi63" className="hover:text-gray-300">
      <FaLinkedin size={24} />
    </a>
    <a href="https://github.com/nb242003" className="hover:text-gray-300">
      <FaGithub size={24} />
    </a>
  </div>
</div>
  )
}

export default Footer
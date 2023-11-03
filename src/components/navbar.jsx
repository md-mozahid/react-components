import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <ul className="flex items-center justify-center h-16 text-lg uppercase space-x-3 font-semibold">
        {[
          'home',
          'header',
          'card',
          'button',
          'form',
          'contact',
          'footer',
          'slider',
          'navigation',
        ].map((item, index) => (
          <li key={index}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

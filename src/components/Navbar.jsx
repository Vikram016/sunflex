import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar relative z-50'>
      <Link to="/">
        <img src={logo} alt="sunflex"
          className='w-[200px] h-[72px] object-contain cursor-pointer' />
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary transition-colors`}
          >
            <Link to={nav.link} className="block">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[25px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover:text-secondary transition-colors`}
              >
                <Link to={nav.link} onClick={() => setToggle(false)} className="block">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
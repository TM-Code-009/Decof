import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[80px] w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/">
        <div className="flex items-center gap-2">
            <img src={logo} alt=""  width={35} height={35} />
          <span className="text-[35px] font-bold text-blue-600">Decof</span>
        </div></a>

        {/* Desktop Nav */}
       <div className="flex items-center gap-10" >
           <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            Services <FiChevronDown />
          </div>
          <a href="#" className="hover:text-blue-600">Portfolio</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
            Get a Quote
          </button>
        </div>
       </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="absolute top-[80px] left-0 w-full bg-white md:hidden px-6 py-6 space-y-4 text-gray-700 font-medium shadow-md">
    <div className="flex items-center gap-1">
      Services <FiChevronDown />
    </div>
    <a href="#" className="block">Portfolio</a>
    <a href="/about" className="block">About Us</a>
    <a href="#" className="block">Contact</a>

    <button className="w-full mt-4 px-5 py-2 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white font-semibold">
      Get a Quote
    </button>
  </div>
)}

    </header>
  );
};

export default Header;

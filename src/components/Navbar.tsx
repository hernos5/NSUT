import React, { useState } from 'react';
import { SearchIcon, BookOpenIcon, UserIcon, BellIcon, MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navLinks = [{
    name: 'Home',
    href: '#'
  }, {
    name: 'Library',
    href: '#'
  }, {
    name: 'Categories',
    href: '#'
  }, {
    name: 'Authors',
    href: '#'
  }, {
    name: 'Community',
    href: '#'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#8A2BE2]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="h-8 w-8 text-[#FFD700]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF4500] text-transparent bg-clip-text">
              हिंदी लाइब्रेरी
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-[#EDEDED]/80 hover:text-[#FFD700] transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </div>
          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
              <input type="text" placeholder="Search books..." className="w-full bg-[#131313]/50 border border-[#8A2BE2]/30 rounded-lg pl-10 pr-4 py-2 text-sm
                         focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20
                         transition-all duration-300" onFocus={() => setIsSearchFocused(true)} onBlur={() => setIsSearchFocused(false)} />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-[#EDEDED]/50" />
            </div>
            {/* Action Buttons */}
            <button className="relative p-2 hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-300">
              <BellIcon className="h-6 w-6 text-[#EDEDED]/80" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-[#FF4500] rounded-full"></span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF4500] 
                           rounded-lg text-black font-semibold hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
                           transition-all duration-300">
              <UserIcon className="h-5 w-5" />
              <span>Login</span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6 text-[#EDEDED]" /> : <MenuIcon className="h-6 w-6 text-[#EDEDED]" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-[#8A2BE2]/30">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input type="text" placeholder="Search books..." className="w-full bg-[#131313]/50 border border-[#8A2BE2]/30 rounded-lg pl-10 pr-4 py-2 text-sm
                           focus:outline-none focus:border-[#FFD700]" />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-[#EDEDED]/50" />
              </div>
              {/* Mobile Navigation Links */}
              {navLinks.map(link => <a key={link.name} href={link.href} className="block py-2 text-[#EDEDED]/80 hover:text-[#FFD700] transition-colors duration-300">
                  {link.name}
                </a>)}
              {/* Mobile Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#8A2BE2]/30">
                <button className="relative p-2 hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-300">
                  <BellIcon className="h-6 w-6 text-[#EDEDED]/80" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-[#FF4500] rounded-full"></span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF4500] 
                               rounded-lg text-black font-semibold hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
                               transition-all duration-300">
                  <UserIcon className="h-5 w-5" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
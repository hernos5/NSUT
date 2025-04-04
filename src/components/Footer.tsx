import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#050608] border-t border-[#DAA520]/20 mt-16 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1608409865376-a0e4d2b8bcb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      mixBlendMode: 'overlay'
    }}></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif text-[#FFD700] mb-4 border-b border-[#DAA520]/30 pb-2">
              About Hindi Sahitya
            </h3>
            <p className="text-gray-300 text-sm">
              Hindi Sahitya Library is dedicated to preserving and promoting the
              rich literary heritage of Hindi language. Our collection spans
              centuries of literary excellence.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-[#FFD700] mb-4 border-b border-[#DAA520]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Collections', 'Authors', 'Events', 'Blog'].map(link => <li key={link}>
                  <a href="#" className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-serif text-[#FFD700] mb-4 border-b border-[#DAA520]/30 pb-2">
              Help & Support
            </h3>
            <ul className="space-y-2">
              {['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Accessibility'].map(link => <li key={link}>
                  <a href="#" className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif text-[#FFD700] mb-4 border-b border-[#DAA520]/30 pb-2">
              Subscribe
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Stay updated with our latest collections and events.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="px-3 py-2 bg-[#0A0C14] border border-[#DAA520]/30 rounded-l text-white text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-[#DAA520]/50" />
              <button className="bg-[#DAA520] text-[#0D0F1F] px-3 py-2 rounded-r hover:bg-[#B8860B] transition-colors">
                <MailIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Social & Copyright */}
        <div className="mt-10 pt-6 border-t border-[#DAA520]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hindi Sahitya Library. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => <a key={i} href="#" className="w-8 h-8 rounded-full bg-[#1C1C1C] flex items-center justify-center hover:bg-[#DAA520]/20 transition-colors group">
                  <Icon className="h-4 w-4 text-[#DAA520] group-hover:text-[#FFD700]" />
                </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
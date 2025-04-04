import React, { lazy } from 'react';
import { StarIcon, BookOpenIcon, PlusIcon } from 'lucide-react';
export const BookCard = ({
  book
}) => {
  return <div className="group relative bg-[#0A0C14] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(218,165,32,0.2)] transform hover:-translate-y-1">
      {/* Book cover with gold frame effect */}
      <div className="relative h-64 overflow-hidden border-b border-[#DAA520]/30">
        <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 border-2 border-[#DAA520]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
      {/* Book info */}
      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-[#FFD700] mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-gray-300 text-sm mb-2">{book.author}</p>
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-[#FFD700]' : 'text-gray-600'}`} fill={i < Math.floor(book.rating) ? '#FFD700' : 'none'} />)}
          </div>
          <span className="text-xs text-gray-400 ml-2">({book.reviews})</span>
        </div>
        {/* Year and genre tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-[#0F52BA]/20 text-xs rounded text-[#DAA520] border border-[#0F52BA]/30">
            {book.year}
          </span>
          <span className="px-2 py-1 bg-[#8B0000]/20 text-xs rounded text-[#DAA520] border border-[#8B0000]/30">
            {book.genre}
          </span>
        </div>
        {/* Action buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 flex justify-center items-center py-2 px-3 bg-[#8B0000]/80 hover:bg-[#8B0000] rounded text-white text-sm transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(139,0,0,0.3)]">
            <BookOpenIcon className="w-4 h-4 mr-1" />
            Read Now
          </button>
          <button className="flex-1 flex justify-center items-center py-2 px-3 bg-[#0F52BA]/80 hover:bg-[#0F52BA] rounded text-white text-sm transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(15,82,186,0.3)]">
            <PlusIcon className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>
      </div>
      {/* Overlay for glassmorphism effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] to-transparent opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity"></div>
    </div>;
};
import React, { lazy } from 'react';
import { TrendingUpIcon } from 'lucide-react';
export const TrendingSidebar = ({
  books
}) => {
  return <aside className="bg-[#0A0C14]/90 rounded-lg p-4 border border-[#DAA520]/20">
      <div className="flex items-center mb-4">
        <TrendingUpIcon className="h-5 w-5 text-[#FFD700] mr-2" />
        <h2 className="text-xl font-serif text-[#FFD700]">Trending Now</h2>
      </div>
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {books.map(book => <div key={book.id} className="group flex items-start space-x-3 p-2 rounded-md hover:bg-[#050608]/80 transition-all cursor-pointer">
            <div className="w-16 h-20 flex-shrink-0 relative">
              <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover rounded" loading="lazy" />
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="bg-[#FFD700] text-[#0D0F1F] text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center">
                  <TrendingUpIcon className="w-3 h-3 mr-0.5" />
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-white group-hover:text-[#FFD700] transition-colors line-clamp-2">
                {book.title}
              </h3>
              <p className="text-xs text-gray-400">{book.author}</p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <span key={i} className={`text-xs ${i < Math.floor(book.rating) ? 'text-[#FFD700]' : 'text-gray-600'}`}>
                      ★
                    </span>)}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  ({book.reviews})
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                {book.description.substring(0, 80)}...
              </p>
            </div>
          </div>)}
      </div>
      <button className="w-full mt-4 py-2 text-sm text-[#FFD700] border border-[#FFD700]/30 rounded-md hover:bg-[#FFD700]/10 transition-all">
        See All Trending
      </button>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0c14;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #daa520;
          border-radius: 4px;
        }
      `}</style>
    </aside>;
};
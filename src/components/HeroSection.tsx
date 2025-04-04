import React, { useState } from 'react';
import { SearchIcon, FilterIcon, SlidersHorizontal } from 'lucide-react';
export const HeroSection = ({
  onSearch,
  onFilter,
  onSort,
  selectedGenre,
  sortBy
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const genres = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'poetry',
    name: 'Poetry'
  }, {
    id: 'novel',
    name: 'Novels'
  }, {
    id: 'play',
    name: 'Plays'
  }, {
    id: 'story',
    name: 'Stories'
  }, {
    id: 'historical',
    name: 'Historical'
  }, {
    id: 'mythological',
    name: 'Mythological'
  }];
  const sortOptions = [{
    id: 'popularity',
    name: 'Trending'
  }, {
    id: 'rating',
    name: 'Highest Rated'
  }, {
    id: 'year',
    name: 'Latest'
  }];
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return <header className="relative py-12 px-4 md:px-8 bg-[#050608] bg-opacity-95 border-b border-[#DAA520]/30">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1581337204873-1565da475dd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      mixBlendMode: 'overlay'
    }}></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#FFD700] font-serif">
          Explore the World of Hindi Sahitya
        </h1>
        <div className="max-w-2xl mx-auto relative mb-8 group">
          <input type="text" placeholder="Search books by title or author..." value={searchTerm} onChange={handleSearchChange} className="w-full py-3 px-12 rounded-full bg-[#0A0C14]/90 border border-[#DAA520]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAA520]/50 transition-all" />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#DAA520] h-5 w-5" />
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_15px_rgba(218,165,32,0.3)]"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <button onClick={toggleFilter} className="flex items-center mr-4 px-4 py-2 bg-[#0A0C14]/90 border border-[#DAA520]/40 rounded-lg hover:bg-[#0A0C14] transition-all">
              <FilterIcon className="h-4 w-4 mr-2 text-[#DAA520]" />
              <span className="text-[#DAA520]">Filter</span>
            </button>
            <div className="relative">
              <select value={sortBy} onChange={e => onSort(e.target.value)} className="appearance-none px-4 py-2 pl-10 pr-8 bg-[#0A0C14]/90 border border-[#DAA520]/40 rounded-lg text-[#DAA520] focus:outline-none focus:ring-2 focus:ring-[#DAA520]/50 hover:bg-[#0A0C14] transition-all">
                {sortOptions.map(option => <option key={option.id} value={option.id}>
                    {option.name}
                  </option>)}
              </select>
              <SlidersHorizontal className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#DAA520]" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {genres.map(genre => <button key={genre.id} onClick={() => onFilter(genre.id)} className={`px-3 py-1 rounded-full text-sm transition-all ${selectedGenre === genre.id ? 'bg-[#DAA520] text-[#0D0F1F] font-medium' : 'bg-[#1C1C1C]/80 text-[#DAA520] hover:bg-[#1C1C1C] border border-[#DAA520]/40'}`}>
                {genre.name}
              </button>)}
          </div>
        </div>
      </div>
    </header>;
};
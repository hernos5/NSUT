import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export const Pagination = ({
  booksPerPage,
  totalBooks,
  currentPage,
  paginate,
  loadMore
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // Display a limited window of page numbers
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  const visiblePages = pageNumbers.slice(startPage - 1, endPage);
  return <div className="mt-10 flex flex-col items-center space-y-6">
      {/* Load more button */}
      {currentPage < totalPages && <button onClick={loadMore} className="px-6 py-3 bg-[#1C1C1C] border border-[#DAA520]/40 text-[#DAA520] rounded-full transition-all hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] relative overflow-hidden group">
          <span className="relative z-10">Load More Books</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#DAA520]/0 via-[#DAA520]/20 to-[#DAA520]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></span>
        </button>}
      {/* Traditional pagination */}
      <div className="flex items-center space-x-1">
        {/* Previous button */}
        <button onClick={() => currentPage > 1 && paginate(currentPage - 1)} disabled={currentPage === 1} className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-[#DAA520] hover:bg-[#1C1C1C]'}`}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        {/* First page if not in visible range */}
        {startPage > 1 && <>
            <button onClick={() => paginate(1)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${currentPage === 1 ? 'bg-[#DAA520] text-[#0D0F1F]' : 'text-[#DAA520] hover:bg-[#1C1C1C]'}`}>
              १
            </button>
            {startPage > 2 && <span className="text-gray-500">...</span>}
          </>}
        {/* Visible page numbers */}
        {visiblePages.map(number => {
        // Convert to Devanagari numerals for aesthetic
        const devanagariNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
        const devanagariNumber = number.toString().split('').map(digit => devanagariNumerals[parseInt(digit)]).join('');
        return <button key={number} onClick={() => paginate(number)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${currentPage === number ? 'bg-[#DAA520] text-[#0D0F1F]' : 'text-[#DAA520] hover:bg-[#1C1C1C]'}`}>
              {devanagariNumber}
            </button>;
      })}
        {/* Last page if not in visible range */}
        {endPage < totalPages && <>
            {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
            <button onClick={() => paginate(totalPages)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${currentPage === totalPages ? 'bg-[#DAA520] text-[#0D0F1F]' : 'text-[#DAA520] hover:bg-[#1C1C1C]'}`}>
              {totalPages.toString().split('').map(digit => ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'][parseInt(digit)]).join('')}
            </button>
          </>}
        {/* Next button */}
        <button onClick={() => currentPage < totalPages && paginate(currentPage + 1)} disabled={currentPage === totalPages} className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-[#DAA520] hover:bg-[#1C1C1C]'}`}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>;
};
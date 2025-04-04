import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { BookGrid } from './BookGrid';
import { TrendingSidebar } from './TrendingSidebar';
import { Pagination } from './Pagination';
import { Footer } from './Footer';
import { mockBooks } from '../data/mockData';
export const BookCatalog = () => {
  const [books, setBooks] = useState(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const booksPerPage = 8;
  const handleSearch = searchTerm => {
    if (!searchTerm.trim()) {
      setFilteredBooks(books);
      return;
    }
    const filtered = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredBooks(filtered);
    setCurrentPage(1);
  };
  const handleFilter = genre => {
    setSelectedGenre(genre);
    if (genre === 'all') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => book.genre === genre);
      setFilteredBooks(filtered);
    }
    setCurrentPage(1);
  };
  const handleSort = sortOption => {
    setSortBy(sortOption);
    let sorted = [...filteredBooks];
    switch (sortOption) {
      case 'popularity':
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'year':
        sorted.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }
    setFilteredBooks(sorted);
  };
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const trendingBooks = [...books].sort((a, b) => b.popularity - a.popularity).slice(0, 5);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  return <div className="min-h-screen text-white">
      <HeroSection onSearch={handleSearch} onFilter={handleFilter} onSort={handleSort} selectedGenre={selectedGenre} sortBy={sortBy} />
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        <div className="lg:w-3/4 pr-0 lg:pr-6">
          <BookGrid books={currentBooks} />
          <Pagination booksPerPage={booksPerPage} totalBooks={filteredBooks.length} currentPage={currentPage} paginate={paginate} loadMore={loadMore} />
        </div>
        <div className="lg:w-1/4 mt-8 lg:mt-0">
          <TrendingSidebar books={trendingBooks} />
        </div>
      </main>
      <Footer />
    </div>;
};
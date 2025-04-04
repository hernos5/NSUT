import React from 'react';
import { BookCard } from './BookCard';
export const BookGrid = ({
  books
}) => {
  if (books.length === 0) {
    return <div className="flex justify-center items-center h-64 text-center">
        <div>
          <p className="text-xl text-[#FFD700] mb-2">No books found</p>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>;
  }
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>;
};
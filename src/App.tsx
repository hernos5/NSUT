import React from 'react';
import { BookCatalog } from './components/BookCatalog';
import  Navbar  from './components/Navbar';
export function App() {
  return <div className="w-full min-h-screen bg-gradient-to-b from-[#050608] to-[#0A0C14]">
      <Navbar />
      <BookCatalog />
    </div>;
}
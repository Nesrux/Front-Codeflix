import React from 'react';

export default function Header() {
  return (
    <header className='lg:py10 fixed top-0 z-50 flex w-full items-center justify-between bg-black px-4 py-4 lg:px-10'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <img
          src='https://rb.gy/ulxxee'
          alt='Netflix'
          width={120}
          height={120}
        ></img>
        <ul className='hidden md:flex md:space-x-4'>
          <li>nome</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
    </header>
  );
}

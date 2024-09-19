import React from 'react';

export default function Header() {
  return (
    <header className='lg:py10 fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10'>
      <img
        src='https://rb.gy/ulxxee'
        alt='Netflix'
        width={120}
        height={120}
      ></img>
      <ul>
        <li>nome</li>
        <li>TV shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}

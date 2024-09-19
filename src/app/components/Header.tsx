import React from 'react';

export default function Header() {
  return (
    <header className='lg:py10 fixed top-0 z-50 flex w-full items-center justify-between bg-red-500 px-4 py-4 lg:px-10'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
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

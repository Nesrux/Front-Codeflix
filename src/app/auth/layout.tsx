import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div>{children}</div>
    </div>
  );
}

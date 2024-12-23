import React from 'react';
import Image from 'next/image';

export const Logo = () => (
  <Image
    src='/codeflix-logo.png'
    alt='Logo'
    width={90}
    height={90}
    className='cursor-pointer' />
);

'use client';

import { InputField } from '@/app/components/inputfield';
import React from 'react';

export function ForgotPasswordForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Submit from forgot password');
  };

  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          Enter your email to reset your password
        </p>
      </div>
      <InputField
        id='email'
        type='email'
        label='Email'
        placeholder='Enter your email'
      />
      <div>
        <button
          type='submit'
          className='flex w-full items-center  justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}

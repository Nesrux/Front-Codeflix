import React from 'react';
import { InputField } from '../inputfield';

export default function Login() {
  return (
    <div className='flex min-h-screen max-w-md flex-col items-center justify-center rounded py-2'>
      <form className='flex w-full flex-col space-x-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
        <div className=' flex flex-col items-center space-y-4'>
          <h1 className='text-3xl font-bold'> login</h1>
          <p className='text-sm text-gray-400'>
            New to the App ? {''}
            <a href='#' className='text-red-500 hover:underline '>
              Register
            </a>
          </p>
        </div>
        <div className='mt-8 flex flex-col space-y-4'>
          <InputField
            id='email'
            label='Email'
            placeholder='Enter your email'
            type='email'
          />
          <InputField
            id='password'
            type='password'
            label='Password'
            placeholder='Enter your password'
          />
        </div>
        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
          <button
            className='flex w-full items-center justify-center space-x-2 rounded-lg bg-red-500 px-4 py-4 text-sm font-semibold text-white hover:bg-red-500 sm:w-auto sm:px-8'
            type='submit'
          >
            Summit
          </button>
        </div>
      </form>
    </div>
  );
}

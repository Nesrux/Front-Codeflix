'use client';

import { AuthForm } from '@/app/components/authForm';
import React from 'react';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit');
    e.preventDefault();
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}

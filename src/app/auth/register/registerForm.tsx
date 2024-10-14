'use client';

import { AuthForm } from '@/app/components/AuthForm';
import React from 'react';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit');
    e.preventDefault();
  };
  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}

'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/form/Input';

export default function FormLogin() {
  const params = useSearchParams();
  const errorParams = params.get('error');

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', { username, password });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 w-full max-w-2xl'>
      <h1 className='text-5xl font-semibold'>Login</h1>
      <Input
        label='Username'
        type='text'
        size='sm'
        placeholder='Masukkan username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        label='Password'
        type='password'
        size='sm'
        placeholder='*********'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errorParams && (
        <div className='bg-red-200 border border-red-500 p-3 rounded text-red-600 font-semibold text-center'>
          {errorParams === 'CredentialsSignin' ? 'Username atau password salah' : 'Terjadi kesalahan'}
        </div>
      )}
      <Button type='submit' className='w-full'>
        Login
      </Button>
    </form>
  );
}

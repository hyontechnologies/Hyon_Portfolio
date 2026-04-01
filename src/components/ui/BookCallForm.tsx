'use client';

import { useState } from 'react';

export default function BookCallForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      description: formData.get('description'),
    };

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to book the call.');
      }

      setStatus('success');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 text-center bg-green-50 text-green-800 rounded-lg">
        <h3 className="font-bold">Call Booked Successfully!</h3>
        <p>Check your email for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-[#0c0c16]/50 rounded-xl border border-white/10 shadow-lg text-white">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md bg-[#16162a]/50 border-gray-600/50 shadow-sm p-3 border placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors" placeholder="John Doe" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md bg-[#16162a]/50 border-gray-600/50 shadow-sm p-3 border placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors" placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
        <input id="phone" name="phone" type="tel" required className="mt-1 block w-full rounded-md bg-[#16162a]/50 border-gray-600/50 shadow-sm p-3 border placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors" placeholder="+1 (555) 000-0000" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">What would you like to discuss?</label>
        <textarea id="description" name="description" rows={4} required className="mt-1 block w-full rounded-md bg-[#16162a]/50 border-gray-600/50 shadow-sm p-3 border placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors" placeholder="I would like to integrate..." />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[linear-gradient(110deg,#9333ea,45%,#c084fc,55%,#9333ea)] bg-[length:200%_100%] animate-shimmer hover:opacity-90 disabled:opacity-50 transition-all border border-purple-500/20"
      >
        {status === 'loading' ? 'Submitting...' : 'Book Call'}
      </button>
    </form>
  );
}

// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Halaman tidak ditemukan atau error tidak tersedia.</p>
      <Link
        to="/"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

import React from 'react';

export default function ResourcePanel() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-8 rounded-lg border-2 border-purple-300 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white font-bold text-2xl">
            ✓
          </div>
        </div>
        <div className="flex-1">
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-gray-800 font-medium">
            Tómate un momento para reflexionar sobre cómo la inteligencia artificial está impactando tu práctica docente y qué desafíos enfrentas.
          </p>
        </div>
      </div>
    </div>
  );
}

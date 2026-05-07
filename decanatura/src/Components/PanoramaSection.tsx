import React from 'react';

export default function PanoramaSection() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-lg overflow-hidden p-12 relative border border-purple-800">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      {/* Tech grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1280 519" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Main stat */}
          <div className="text-white">
            <div className="mb-8">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-sm text-yellow-300 font-semibold uppercase tracking-widest mb-2">Crecimiento en IA</p>
              <div className="flex items-baseline gap-2 mb-6">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-7xl md:text-8xl font-bold text-white">
                  3
                </p>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-5xl font-bold text-yellow-300">×</span>
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-lg text-gray-200 leading-relaxed">
                Más crecimiento en ingresos por empleado en organizaciones que lideran el uso de IA
              </p>
            </div>
          </div>

          {/* Right column - Secondary stat */}
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-8 shadow-2xl">
            <div className="mb-6">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-sm text-yellow-300 font-semibold uppercase tracking-widest mb-4">Adopción Universal</p>
              <div className="flex items-baseline gap-2 mb-6">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-6xl font-bold text-white">
                  100
                </p>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-4xl font-bold text-yellow-300">%</span>
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-base text-gray-100 leading-relaxed">
                De las industrias está ampliando su uso de IA. En los roles más expuestos, las habilidades demandadas cambian un <span className="font-bold text-yellow-300">66% más rápido</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer attribution */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} className="text-sm text-gray-400 text-center leading-relaxed">
            Un análisis de cerca de mil millones de ofertas de empleo en seis continentes — <br />
            <span className="text-white font-semibold">The Fearless Future, PwC (2025)</span>, revela que el impacto de la IA es transversal y está ocurriendo ahora
          </p>
        </div>
      </div>
    </div>
  );
}

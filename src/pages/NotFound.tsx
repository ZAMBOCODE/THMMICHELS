import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-6">
            <div className="text-center">
                {/* 404 Container Illustration */}
                <div className="relative w-64 h-40 mx-auto mb-12">
                    {/* Container Body */}
                    <div className="absolute inset-0 border-2 border-[#D97706] bg-[#D97706]/5">
                        {/* Container Lines */}
                        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-[#D97706]/20"></div>
                        <div className="absolute top-0 left-2/4 w-0.5 h-full bg-[#D97706]/20"></div>
                        <div className="absolute top-0 left-3/4 w-0.5 h-full bg-[#D97706]/20"></div>
                        {/* Container Door with X */}
                        <div className="absolute right-4 top-4 bottom-4 w-16 border border-[#D97706]/50 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="opacity-50">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    {/* Question marks */}
                    <div className="absolute -top-6 -left-4 text-4xl text-[#D97706]/30 font-display font-black">?</div>
                    <div className="absolute -top-2 -right-6 text-6xl text-[#D97706]/20 font-display font-black">?</div>
                </div>

                <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ ERROR 404 ]</h2>
                <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
                    Container<br />nicht gefunden
                </h1>
                <p className="font-mono text-[#9CA3AF] text-lg max-w-md mx-auto mb-10">
                    Der gesuchte Container existiert nicht oder wurde bereits ausgeliefert.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="btn-press bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
                    >
                        Zur Startseite
                    </Link>
                    <Link
                        to="/kontakt"
                        className="btn-press px-10 py-5 border border-white/20 hover:border-white/40 font-black text-sm uppercase tracking-widest transition-[border-color] duration-300"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Blueprint Label */}
                <div className="mt-16 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    STATUS: CONTAINER_NOT_FOUND | CODE: 404
                </div>
            </div>
        </div>
    );
};

export default NotFound;

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Fehler aufgetreten:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-6">
          <div className="text-center">
            {/* Error Container Illustration */}
            <div className="relative w-64 h-40 mx-auto mb-12">
              {/* Container Body */}
              <div className="absolute inset-0 border-2 border-red-500 bg-red-500/5">
                {/* Container Lines */}
                <div className="absolute top-0 left-1/4 w-0.5 h-full bg-red-500/20"></div>
                <div className="absolute top-0 left-2/4 w-0.5 h-full bg-red-500/20"></div>
                <div className="absolute top-0 left-3/4 w-0.5 h-full bg-red-500/20"></div>
                {/* Warning Icon */}
                <div className="absolute right-4 top-4 bottom-4 w-16 border border-red-500/50 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" className="opacity-70">
                    <path d="M12 9v4M12 17h.01" />
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                </div>
              </div>
              {/* Exclamation marks */}
              <div className="absolute -top-6 -left-4 text-4xl text-red-500/30 font-display font-black">!</div>
              <div className="absolute -top-2 -right-6 text-6xl text-red-500/20 font-display font-black">!</div>
            </div>

            <h2 className="font-mono text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">[ SYSTEMFEHLER ]</h2>
            <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
              Etwas ist<br />schiefgelaufen
            </h1>
            <p className="font-mono text-[#9CA3AF] text-lg max-w-md mx-auto mb-10">
              Bei der Verarbeitung ist ein unerwarteter Fehler aufgetreten. Bitte versuche es erneut.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform,box-shadow] hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(239,68,68,0.5)]"
              >
                Seite neu laden
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="px-10 py-5 border border-white/20 hover:border-white/40 font-black text-sm uppercase tracking-widest transition-[border-color]"
              >
                Zur Startseite
              </Link>
            </div>

            {/* Blueprint Label */}
            <div className="mt-16 font-mono text-[10px] text-white/30 uppercase tracking-widest">
              STATUS: SYSTEM_ERROR | BITTE KONTAKTIEREN SIE UNS BEI WIEDERHOLUNG
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

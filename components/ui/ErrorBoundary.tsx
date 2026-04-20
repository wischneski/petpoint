import React, { Component, ReactNode } from 'react';

interface State { hasError: boolean; }

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-900 text-white">
          <div className="text-center px-6">
            <h2 className="font-serif text-2xl mb-4">Algo deu errado.</h2>
            <p className="text-white/60 mb-6">Recarregue a página para tentar novamente.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent-500 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


import React from 'react';

const EnhancedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-teal-600/20 to-blue-800/30 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-2000" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 border border-teal-400 rotate-12 animate-spin" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-32 left-40 w-40 h-40 border border-blue-400 rotate-90 animate-spin" style={{ animationDuration: '25s' }} />
      </div>
      
      {/* Radial gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-purple-900/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-transparent via-teal-900/10 to-transparent" />
    </div>
  );
};

export default EnhancedBackground;

import React from 'react';

const JbDBanner = () => {
    return (
      <div
        className="bg-cover bg-center rounded-3xl h-64 flex items-end p-8" // Corrected: added className
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Replace with your actual image
        }}
      >
        {/* Content goes here if any */}
      </div>
    );
};

export default JbDBanner;
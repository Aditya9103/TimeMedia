import React from 'react';

const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;

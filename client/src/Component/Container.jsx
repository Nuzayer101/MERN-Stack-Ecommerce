import React from 'react';
import { cn } from './Ui/cn';

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;

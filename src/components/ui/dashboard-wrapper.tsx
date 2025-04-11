'use client';

import * as React from 'react';

interface DashboardWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({title, description, children}) => {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default DashboardWrapper;

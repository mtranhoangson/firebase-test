'use client';

import React from 'react';
import DashboardWrapper from '@/components/ui/dashboard-wrapper';

const certificates = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    vendor: 'Amazon',
    description: 'Foundational knowledge of AWS cloud services.',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
  {
    id: 2,
    name: 'Microsoft Certified Azure Fundamentals',
    vendor: 'Microsoft',
    description: 'Essential knowledge of Azure cloud services.',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
  {
    id: 3,
    name: 'Google Cloud Certified Professional Cloud Architect',
    vendor: 'Google',
    description: 'Designing and managing cloud solutions on Google Cloud.',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
];

const DashboardPage: React.FC = () => {
  return (
    <DashboardWrapper title="Certificate Catalog" description="Browse available certificates.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map(certificate => (
          <div
            key={certificate.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={certificate.imageUrl}
              alt={certificate.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{certificate.name}</h3>
              <p className="text-gray-600">{certificate.vendor}</p>
              <p className="mt-2 text-sm">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default DashboardPage;

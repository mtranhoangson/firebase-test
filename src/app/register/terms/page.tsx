import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-4">Terms of Use</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to CertMaster Pro! These terms of use govern your use of our application.
        </p>
        <p>
          Please read these terms carefully before using our services. By using CertMaster Pro, you
          agree to be bound by these terms.
        </p>
        <p>
          If you do not agree with any part of these terms, you must not use our application.
        </p>
        <h2>Account Registration</h2>
        <p>
          You may need to register for an account to access certain features of CertMaster Pro.
          When you register, you must provide accurate and complete information.
        </p>
        <h2>Use of Content</h2>
        <p>
          All content provided on CertMaster Pro is for informational purposes only. You may not
          distribute or reproduce any content without our prior written consent.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;

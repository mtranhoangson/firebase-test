import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>
          Your privacy is important to us. This privacy policy explains how we collect, use, and
          protect your personal information.
        </p>
        <p>
          By using CertMaster Pro, you agree to the terms of this privacy policy. We collect
          information to provide and improve our services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you register for an
          account.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to operate and maintain CertMaster Pro, to send you
          administrative communications, and to provide customer support.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

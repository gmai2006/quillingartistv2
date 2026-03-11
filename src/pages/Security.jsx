import React from "react";
import { Lock } from "lucide-react";

export const Security = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-7 h-7 text-gray-700" />
        <h1 className="text-3xl font-bold tracking-tight">Security</h1>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          At Quilling Artist, we are committed to protecting the privacy and
          security of your personal information.
        </p>

        <p>
          We utilize industry-standard security measures to safeguard your data,
          including robust encryption protocols like SSL, secure servers, and
          regular vulnerability scans.
        </p>

        <p>
          Access to sensitive information is restricted to authorized personnel
          only, and we continuously monitor our systems for suspicious activity
          to prevent unauthorized access.
        </p>

        <p>
          By using our website, you agree to our privacy policy outlining how we
          collect, store, and use your information.
        </p>
      </div>
    </div>
  );
};
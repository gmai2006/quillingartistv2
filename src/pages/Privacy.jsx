import React from "react";
import { ShieldCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="w-7 h-7 text-gray-700" />
        <h1 className="text-3xl font-bold tracking-tight">Privacy</h1>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          At QuillingArtist.com, we value your privacy and are committed to
          protecting your personal information. When you visit our website or
          make a purchase, we may collect details like your name, email address,
          shipping address, and payment information to process orders and
          provide customer support.
        </p>

        <p>
          This information is securely stored and used only for the purposes
          outlined in this policy. We may also use cookies and tracking
          technologies to enhance your shopping experience and gather
          anonymized data about website usage.
        </p>

        <p>
          You have the right to access, update, or request deletion of your
          personal information by contacting us at
          <span className="font-medium"> support@quillingartist.com</span>.
        </p>

        <p>
          For further details on how we handle your data, please review our full
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
import React from "react";
import { RotateCcw } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <RotateCcw className="w-7 h-7 text-gray-700" />
        <h1 className="text-3xl font-bold tracking-tight">Returns & Refunds</h1>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">Returns</h2>
          <p>
            Items shipped from QuillingArt.com can be returned within 30 days
            of receipt of shipment in most cases. Some products may have
            different policies or requirements associated with them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Return Instructions</h2>
          <p>
            All returns must include a tracking number (USPS, UPS, FedEx).
            Please provide us with the tracking number for your return at
            <span className="font-medium"> support@quillingart.com</span>.
            Failure to do so may delay the processing of your return or credit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Exchanges</h2>
          <p>At this time, we do not accept exchanges.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Return Address</h2>

          <address className="not-italic bg-gray-50 border rounded-lg p-4 mt-2">
            Quilling Art | Returns <br />
            5900 W Golden Ave <br />
            Kirkland, WA 98804
          </address>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
import { useState } from "react";
import { Tag } from "lucide-react";

export default function CouponApplyForm({ onSubmit }) {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ coupon });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="flex items-center gap-2 text-sm font-medium">
        <Tag size={16} />
        Have coupon?
      </label>

      <input
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Coupon code"
        className="w-full rounded-lg border px-3 py-2"
      />

      <div className="flex justify-end">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Apply
        </button>
      </div>
    </form>
  );
}

import { useState } from "react";
import { User, Building2, Phone, Mail } from "lucide-react";

export default function ContactUsForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    mobileNo: "",
    email: "",
    message: "",
    informed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={submit} className="space-y-4">

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">

        <InputField
          icon={User}
          label="Name"
          name="name"
          value={form.name}
          placeholder="Your full name"
          onChange={handleChange}
          required
          maxLength={50}
        />

        <InputField
          icon={Building2}
          label="Company"
          name="company"
          value={form.company}
          placeholder="Your company name"
          onChange={handleChange}
          required
          maxLength={50}
        />

      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-4">

        <InputField
          icon={Phone}
          label="Mobile No"
          name="mobileNo"
          value={form.mobileNo}
          placeholder="Mobile no with country code"
          onChange={handleChange}
          type="tel"
          required
        />

        <InputField
          icon={Mail}
          label="Email Address"
          name="email"
          value={form.email}
          placeholder="Your email address"
          onChange={handleChange}
          type="email"
          required
          maxLength={50}
        />

      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Message
        </label>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you are looking for?"
          maxLength={1000}
          className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          name="informed"
          checked={form.informed}
          onChange={handleChange}
          className="mt-1"
        />

        Keep me informed via email or phone about its Products and Services.
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
      >
        Submit
      </button>

    </form>
  );
}

function InputField({
  icon: Icon,
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
  required,
  maxLength,
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <div className="flex items-center rounded-md border px-3">
        <Icon size={18} className="text-gray-400 mr-2" />

        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          className="w-full py-2 outline-none"
        />
      </div>
    </div>
  );
}

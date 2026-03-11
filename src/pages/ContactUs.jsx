import { lazy } from "react";
import { Mail, Home, Phone } from "lucide-react";

const ContactUsForm = lazy(() => import("../components/ContactUsForm"));

const onSubmit = async (values) => {
  alert(JSON.stringify(values));
};

export default function ContactUsView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-6 md:grid-cols-12">

        {/* Contact Form */}
        <div className="md:col-span-8">
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b p-4 font-semibold">
              <Mail size={18} />
              Send Message
            </div>

            <div className="p-4">
              <ContactUsForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-4 space-y-4">

          <div className="rounded-lg border bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b p-4 font-semibold">
              <Home size={18} />
              Address
            </div>

            <div className="space-y-4 p-4 text-sm">

              <AddressBlock title="Head Office" />
              <AddressBlock title="Development Office" />

            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313635.5491853188!2d-122.57606416467848!3d37.20933611930123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c67b3754d%3A0xb42714f3436732f2!2s1355%20Market%20St%20%23900%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1599193189366!5m2!1sen!2sin"
              className="h-72 w-full border-0"
              loading="lazy"
              title="Location"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function AddressBlock({ title }) {
  return (
    <div>
      <h6 className="border-b pb-2 font-semibold">{title}</h6>

      <address className="not-italic text-gray-600">
        <strong>Twitter, Inc.</strong>
        <br />
        1355 Market St, Suite 900
        <br />
        San Francisco, CA 94103
        <br />
        <Phone size={14} className="inline mr-1" />
        (123) 456-7890
      </address>
    </div>
  );
}

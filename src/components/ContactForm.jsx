import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "Interior Decoration",
  preferredDate: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Worldscope Interiors, I would like to make an inquiry.\n\nName: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Type: ${form.serviceType}\nPreferred Date: ${form.preferredDate || "Flexible"}\nMessage: ${form.message}`;

    setSubmitted(true);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setForm(initialState);
  };

  return (
    <div id="contact-form" className="section-panel p-6 sm:p-8">
      <h3 className="text-3xl font-semibold text-slate-900">Send us a message</h3>
      <p className="mt-3 text-slate-600">
        Share a few details and we will continue the conversation on WhatsApp for a fast response.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="contact-full-name">
            Full Name
          </label>
          <input
            id="contact-full-name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="input-field"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="field-label" htmlFor="contact-phone">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+234..."
            required
          />
        </div>

        <div>
          <label className="field-label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="field-label" htmlFor="contact-service-type">
            Service Type
          </label>
          <select
            id="contact-service-type"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="input-field"
          >
            <option>Interior Decoration</option>
            <option>Cleaning Services</option>
            <option>Both</option>
            <option>Custom Request</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="contact-preferred-date">
            Preferred Date
          </label>
          <input
            id="contact-preferred-date"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="input-field min-h-36 resize-y"
            placeholder="Tell us about your project or cleaning request"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <button type="submit" className="primary-button">
            Send Message
          </button>
        </div>
      </form>

      {submitted ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-primary/5 px-4 py-4 text-sm text-slate-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
          <span>Your message is ready and has been redirected to WhatsApp for quick follow-up.</span>
        </div>
      ) : null}
    </div>
  );
}

export default ContactForm;


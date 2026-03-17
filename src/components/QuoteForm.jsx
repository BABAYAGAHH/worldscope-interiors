import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  serviceCategory: "Interior Decoration",
  propertyType: "Apartment",
  location: "",
  preferredDate: "",
  budgetRange: "",
  message: "",
};

function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message =
      `Hello Worldscope Interiors, I would like to request a quote.\n\n` +
      `Full Name: ${form.fullName}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Service Category: ${form.serviceCategory}\n` +
      `Property Type: ${form.propertyType}\n` +
      `Location: ${form.location}\n` +
      `Preferred Service Date: ${form.preferredDate || "Flexible"}\n` +
      `Budget Range: ${form.budgetRange || "To be discussed"}\n` +
      `Project Details: ${form.message}`;

    setSubmitted(true);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setForm(initialState);
  };

  return (
    <div className="section-panel p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-panel">
          <span className="eyebrow border-white/10 bg-white/10 text-white">
            Quote Request
          </span>
          <h3 className="mt-6 text-4xl font-semibold">Tell us what you need.</h3>
          <p className="mt-4 text-slate-300">
            From single-room styling to commercial cleaning support, we will prepare a response that fits your goals, timing, and budget.
          </p>
          <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Fast response
              </p>
              <p className="mt-2 text-sm text-slate-300">
                WhatsApp-first communication for quicker follow-up and easier scheduling.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Flexible scope
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Choose interior decoration, cleaning services, or a combined package.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="quote-full-name">
              Full Name
            </label>
            <input
              id="quote-full-name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="input-field"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="quote-phone">
              Phone Number
            </label>
            <input
              id="quote-phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="+234..."
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="quote-email">
              Email
            </label>
            <input
              id="quote-email"
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
            <label className="field-label" htmlFor="quote-service-category">
              Service Category
            </label>
            <select
              id="quote-service-category"
              name="serviceCategory"
              value={form.serviceCategory}
              onChange={handleChange}
              className="input-field"
            >
              <option>Interior Decoration</option>
              <option>Cleaning Services</option>
              <option>Combined Service</option>
              <option>Commercial Inquiry</option>
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="quote-property-type">
              Property Type
            </label>
            <select
              id="quote-property-type"
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="input-field"
            >
              <option>Apartment</option>
              <option>House</option>
              <option>Office</option>
              <option>Store</option>
              <option>Commercial Space</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="quote-location">
              Location
            </label>
            <input
              id="quote-location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="input-field"
              placeholder="City or area"
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="quote-preferred-date">
              Preferred Service Date
            </label>
            <input
              id="quote-preferred-date"
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="field-label" htmlFor="quote-budget-range">
              Budget Range
            </label>
            <input
              id="quote-budget-range"
              name="budgetRange"
              value={form.budgetRange}
              onChange={handleChange}
              className="input-field"
              placeholder="Your budget range"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="quote-message">
              Message / Project Details
            </label>
            <textarea
              id="quote-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="input-field min-h-40 resize-y"
              placeholder="Tell us about your space, cleaning needs, or desired style"
              required
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-4">
            <button type="submit" className="primary-button">
              Request Quote
            </button>
            {submitted ? (
              <div className="flex items-start gap-3 rounded-2xl bg-primary/5 px-4 py-4 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>Your quote request has been prepared and redirected to WhatsApp.</span>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;

import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-14 sm:pb-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Reach Out</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-5">Contact Us</h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            We would love to connect with you about partnerships, giving, prayer, or joining the movement.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">

            {/* Info card */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-1">Empower Asia</h2>
                <p className="text-gray-500 text-sm">Bible Translation Movement</p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Mailing Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      76 Small Road<br />Brownsville, TN 38012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:8289642916" className="text-blue-800 font-semibold hover:underline">
                      828-964-2916
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:shwemyodaw@protonmail.com" className="text-blue-800 font-semibold hover:underline break-all text-sm">
                      shwemyodaw@protonmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-800 font-bold text-sm">
                    IRS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tax-Exempt Status</p>
                    <p className="text-gray-600 text-sm">
                      501(c)(3) &middot; EIN 93-2153630
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Donations are tax-deductible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get('name');
                  const email = data.get('email');
                  const message = data.get('message');
                  window.location.href = `mailto:shwemyodaw@protonmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gray-950 text-white font-bold rounded-xl hover:bg-black transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  Or email us directly at{' '}
                  <a href="mailto:shwemyodaw@protonmail.com" className="text-blue-800 font-semibold hover:underline">
                    shwemyodaw@protonmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B3 Prayer link */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Prayer &amp; Intercession</p>
          <h2 className="text-2xl font-bold text-white mb-3">Join the B3 Prayer Movement</h2>
          <p className="text-gray-400 mb-6">
            Interceding for the Buddhist world every Wednesday &amp; Friday.
          </p>
          <a
            href="mailto:b3prayermovement@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mail size={15} /> b3prayermovement@gmail.com
          </a>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

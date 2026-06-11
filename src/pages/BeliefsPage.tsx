import NewsletterSignup from '../components/NewsletterSignup';

export default function BeliefsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Our Beliefs</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empower Asia is grounded in historic Christian doctrine and a deep conviction that every person deserves God's Word in their heart language.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              On most days, the approximate driving time will be around 5–6 hours, as the journey itself is part of the experience, offering beautiful scenic views across Bhutan.
            </p>
            <p>
              As already included in the itinerary, the hike to Tiger's Nest Monastery (Taktshang) is a round-trip uphill walk, which typically takes around 5–6 hours in total.
            </p>
            <p>
              Please let me know your thoughts, and I'll be happy to adjust the itinerary according to your preference—whether you would like less driving or more time to relax.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

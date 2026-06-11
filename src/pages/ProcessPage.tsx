import NewsletterSignup from '../components/NewsletterSignup';

const STEPS = [
  {
    number: 1,
    title: 'Assemble Team & Translate 10 Stories',
    desc: 'Assemble a translation team, a translation committee, and train a team to translate 10 Jesus Stories taken from our Picture Bible into the language of an Unreached People Group.',
  },
  {
    number: 2,
    title: 'Field Test & Evaluate',
    desc: 'Develop a key term list, field test, and evaluate the Picture Bible with persons of peace, discussing it with religious leaders in the target people group.',
  },
  {
    number: 3,
    title: 'Form Bible Translation Committee',
    desc: 'Edit the key terms list and create a Bible translation committee from house church networks, aiming to develop a translation that is trusted and used by key leaders in the church movement.',
  },
  {
    number: 4,
    title: 'Commission Translation Teams',
    desc: 'The church appoints and resources translators, commissioning teams to translate the New Testament audibly using LangQuest and Paratext software.',
  },
  {
    number: 5,
    title: 'Check for Alignment & Consistency',
    desc: 'Translation teams who want a printed Bible use the Paratext checking tool to check for alignment and consistency, then complete a full consultant check.',
  },
  {
    number: 6,
    title: 'Approval & Back Translation',
    desc: 'Check with the Bible translation committee and get approval from church leadership. A back translation into a national language is completed at this point.',
  },
  {
    number: 7,
    title: 'Distribute & Dedicate',
    desc: "Church networks distribute the new Bibles and host Bible dedication ceremonies — celebrating God's Word in a new language.",
  },
  {
    number: 8,
    title: 'Choose the Next Language',
    desc: 'Church network leaders choose which Bibleless language to focus on next, restarting the process from step one and multiplying the movement.',
  },
];

export default function ProcessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">How We Work</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our 8-Step Process</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            A proven, church-centric methodology for Bible translation that builds community ownership and multiplying movements.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Church-Centric Bible Translation Movement</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every translation follows these eight steps, ensuring quality, community trust, and a self-multiplying cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {STEPS.map((step) => (
              <div key={step.number} className="relative pl-16">
                <div className="absolute left-0 top-0 w-11 h-11 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Principles</h2>
          <div className="space-y-6">
            {[
              { title: 'Church-Centric Leadership', desc: 'Local church leaders direct every translation decision. The Bible is owned by the community it serves — not by an external organization.' },
              { title: 'Indigenous Translators', desc: 'Mother-tongue speakers lead all translation work. They understand the language, culture, and spiritual context better than any outsider.' },
              { title: 'Quality Assurance', desc: 'Multiple rounds of checking, back-translation, and consultant review ensure biblical accuracy. Shortcuts compromise the message — we take no shortcuts.' },
              { title: 'Self-Multiplying Cycle', desc: 'Each completed translation launches the next. Church leaders choose the following language and restart the process — the movement multiplies itself.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Tools & Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'LangQuest', desc: 'A translation software platform that guides translators through the process while tracking progress across language projects.' },
              { name: 'Paratext', desc: 'Industry-standard translation software used worldwide. Enables team collaboration, version management, and quality checking.' },
              { name: 'YouVersion / Bible.com', desc: 'All completed translations are published on Bible.com for global access — available for reading and listening.' },
              { name: 'Digital Bible Library', desc: 'Translations are archived and distributed through the Digital Bible Library for long-term preservation and access.' },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.name}</h3>
                <p className="text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}

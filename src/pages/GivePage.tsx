import { useEffect } from 'react';

export default function GivePage() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://apps.idonate.com/idonate-giving-form.js"]');
    if (existing) {
      existing.remove();
    }
    const script = document.createElement('script');
    script.src = 'https://apps.idonate.com/idonate-giving-form.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Support the Movement</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Give</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Your gift directly funds Bible translation projects and brings God's Word to people groups across the Buddhist world who have never had a single verse of Scripture.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { v: '47', l: 'Bible Translations' },
              { v: '75', l: 'Picture Bibles' },
              { v: '41,932', l: 'House Churches' },
              { v: '389,780', l: 'Baptisms' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-black text-white mb-0.5">{s.v}</div>
                <div className="text-gray-400 text-xs font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iDonate Giving Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            id="idonate-giving-form-container"
            data-embed-id="a45b2f1d-2404-45bb-b6c3-fccba6498605"
          />
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tax-Deductible Giving</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Empower Asia Bible Translation Movement is a registered 501(c)(3) nonprofit. All donations are tax-deductible to the full extent permitted by law.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { l: 'Organization', v: 'Empower Asia Bible Translation Movement' },
                { l: 'EIN Number', v: '93-2153630' },
                { l: 'Status', v: '501(c)(3) Non-Profit' },
              ].map((item) => (
                <div key={item.l} className="bg-gray-50 rounded-xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.l}</div>
                  <div className="font-semibold text-gray-900 text-sm">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

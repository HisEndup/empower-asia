import { useState } from 'react';
import { supabase } from '../lib/supabase';

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-subscription`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setMessage(null);
    try {
      const trimmed = email.trim();
      const { error } = await supabase.from('newsletter_signups').insert([{ email: trimmed }]);
      if (error) {
        if (error.code === '23505') {
          setMessage({ type: 'success', text: "You're already subscribed — thank you!" });
        } else {
          setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        }
      } else {
        setMessage({ type: 'success', text: 'Thank you for signing up for news and updates!' });
        setEmail('');
        // Fire notification in background — non-blocking
        fetch(FUNCTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ANON_KEY}`,
          },
          body: JSON.stringify({ email: trimmed }),
        }).catch(() => {/* ignore notification errors */});
      }
    } catch {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" style={{ backgroundColor: '#1e3a8a' }} className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">Stay Connected</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Our Latest Updates</h2>
        <p className="text-white text-lg mb-10 leading-relaxed">
          Sign up with your email address to receive news and updates.
        </p>

        <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-4 mb-6 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded-xl text-gray-500 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/60 text-base"
          />
          <button
            type="submit"
            disabled={loading}
            style={{ color: '#1e3a8a' }}
            className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-base"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {message && (
          <p className={`text-sm font-medium mt-2 ${message.type === 'success' ? 'text-green-100' : 'text-red-100'}`}>
            {message.text}
          </p>
        )}

        <p className="text-white/60 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}

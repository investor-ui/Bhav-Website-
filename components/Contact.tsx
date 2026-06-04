'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight, EASE } from './animations'

const investorTypes = [
  'Institutional Investor', 'Accredited Investor', 'Family Office', 'Hedge Fund',
  'Registered Investment Advisor', 'Broker-Dealer', 'Retail Investor', 'Media / Press', 'Other',
]

const contactInfo = [
  { label: 'Headquarters', value: 'Piscataway, New Jersey', sub: 'United States' },
  { label: 'Underwriter', value: 'Maxim Group LLC', sub: '300 Park Ave, 16th Floor · New York, NY 10022' },
  { label: 'Trustee', value: 'Continental Stock Transfer & Trust', sub: 'Trust account holder for IPO proceeds' },
  {
    label: 'SEC Filings',
    value: 'CIK: 0002097288',
    sub: 'File No. 333-293399',
    href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288',
  },
]

const inputClass = `w-full px-4 py-3 rounded-xl text-sm text-[#F2EDE8] placeholder-[#6B6560]
  focus:outline-none transition-all duration-200
  bg-white/[0.04] border border-white/[0.08]
  focus:border-[#D4A843]/40 focus:bg-white/[0.06]`

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', investorType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#111110]">
      <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-[#D4A843]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A843]/20 bg-[#D4A843]/[0.06] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4A843] uppercase">Investor Contact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2EDE8] mb-4">
            Get in{' '}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-[#A89F94] max-w-xl mx-auto">
            For investor inquiries, media requests, and partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
          {/* Info column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="p-5 rounded-xl" style={{ background: '#1C1B19', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4A843]/50 uppercase mb-1.5">{info.label}</p>
                {info.href
                  ? <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#D4A843] hover:text-[#F0CF7A] transition-colors">{info.value}</a>
                  : <p className="text-sm font-semibold text-[#F2EDE8]">{info.value}</p>
                }
                <p className="text-xs text-[#6B6560] mt-0.5">{info.sub}</p>
              </div>
            ))}

            {/* Tickers */}
            <div className="p-5 rounded-xl card-gold">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4A843]/60 uppercase mb-3">Trading Information</p>
              <div className="space-y-2.5">
                {[{ ticker: 'BHAVU', desc: 'Units' }, { ticker: 'BHAV', desc: 'Common Shares' }, { ticker: 'BHAVR', desc: 'Rights' }].map((t) => (
                  <div key={t.ticker} className="flex items-center justify-between">
                    <span className="text-xs text-[#A89F94]">{t.desc}</span>
                    <a href="https://www.nasdaq.com/market-activity/stocks/bhavu" target="_blank" rel="noopener noreferrer"
                      className="text-sm font-bold font-mono text-[#D4A843] hover:text-[#F0CF7A] transition-colors tracking-widest">
                      {t.ticker}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-7" style={{ background: '#1C1B19', border: '1px solid rgba(255,255,255,0.08)' }}>
              {submitted ? (
                <div className="text-center py-14">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full border-2 border-[#D4A843] bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <span className="text-2xl text-[#D4A843]">✓</span>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-[#F2EDE8] mb-2">Inquiry Received</h3>
                  <p className="text-[#A89F94] text-sm">
                    Thank you for your interest in BHAV Acquisition Corp.
                    A member of our team will be in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: 'firstName', label: 'First Name', placeholder: 'John', type: 'text', required: true },
                      { key: 'lastName', label: 'Last Name', placeholder: 'Smith', type: 'text', required: true },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-[10px] font-bold text-[#6B6560] mb-2 tracking-[0.18em] uppercase">{f.label}</label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className={inputClass}
                          placeholder={f.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#6B6560] mb-2 tracking-[0.18em] uppercase">Email Address</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass} placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#6B6560] mb-2 tracking-[0.18em] uppercase">Company / Organization</label>
                    <input type="text" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass} placeholder="Your firm or organization" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#6B6560] mb-2 tracking-[0.18em] uppercase">Investor Type</label>
                    <select value={form.investorType}
                      onChange={(e) => setForm({ ...form, investorType: e.target.value })}
                      className={`${inputClass} appearance-none`}
                      style={{ background: '#111110' }}
                    >
                      <option value="">Select type...</option>
                      {investorTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#6B6560] mb-2 tracking-[0.18em] uppercase">Message</label>
                    <textarea required rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} placeholder="Your inquiry..." />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-full py-4 bg-[#D4A843] text-[#111110] font-display font-bold text-sm tracking-widest rounded-xl hover:bg-[#E0B84E] transition-colors duration-200 shadow-lg shadow-[#D4A843]/20"
                  >
                    SUBMIT INQUIRY
                  </motion.button>

                  <p className="text-[10px] text-[#6B6560] leading-relaxed text-center">
                    This website is for informational purposes only and does not constitute an offer to sell
                    or solicitation to buy any securities. All offerings made only by means of a prospectus.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

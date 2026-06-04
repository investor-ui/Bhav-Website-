'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight } from './animations'

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

const inputClass = `w-full px-4 py-3 rounded-xl text-sm text-navy-900 placeholder-navy-400
  focus:outline-none transition-all duration-200
  bg-white border border-navy-900/12
  focus:border-navy-700/40 focus:shadow-[0_0_0_3px_rgba(10,22,40,0.06)]`

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', investorType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-sand-100 scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-900/15 bg-navy-900/[0.04] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-navy-700 uppercase">Investor Contact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Get in{' '}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto">
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
              <div key={info.label} className="p-5 rounded-xl card-light">
                <p className="text-[10px] font-bold tracking-[0.2em] text-navy-400 uppercase mb-1.5">{info.label}</p>
                {info.href
                  ? <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors">{info.value}</a>
                  : <p className="text-sm font-semibold text-navy-900">{info.value}</p>
                }
                <p className="text-xs text-navy-400 mt-0.5">{info.sub}</p>
              </div>
            ))}

            {/* Tickers */}
            <div className="p-5 rounded-xl bg-navy-900">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gold-400/60 uppercase mb-3">Trading Information</p>
              <div className="space-y-2.5">
                {[{ ticker: 'BHAVU', desc: 'Units' }, { ticker: 'BHAV', desc: 'Common Shares' }, { ticker: 'BHAVR', desc: 'Rights' }].map((t) => (
                  <div key={t.ticker} className="flex items-center justify-between">
                    <span className="text-xs text-navy-300">{t.desc}</span>
                    <a href="https://www.nasdaq.com/market-activity/stocks/bhavu" target="_blank" rel="noopener noreferrer"
                      className="text-sm font-bold font-mono text-gold-400 hover:text-gold-300 transition-colors tracking-widest">
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
            <div className="rounded-2xl p-7 bg-white border border-navy-900/10 shadow-[0_4px_24px_rgba(10,22,40,0.06)]">
              {submitted ? (
                <div className="text-center py-14">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full border-2 border-gold-400 bg-gold-400/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <span className="text-2xl text-gold-500">✓</span>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Inquiry Received</h3>
                  <p className="text-navy-500 text-sm">
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
                        <label className="block text-[10px] font-bold text-navy-500 mb-2 tracking-[0.18em] uppercase">{f.label}</label>
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
                    <label className="block text-[10px] font-bold text-navy-500 mb-2 tracking-[0.18em] uppercase">Email Address</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass} placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-navy-500 mb-2 tracking-[0.18em] uppercase">Company / Organization</label>
                    <input type="text" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass} placeholder="Your firm or organization" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-navy-500 mb-2 tracking-[0.18em] uppercase">Investor Type</label>
                    <select value={form.investorType}
                      onChange={(e) => setForm({ ...form, investorType: e.target.value })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select type...</option>
                      {investorTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-navy-500 mb-2 tracking-[0.18em] uppercase">Message</label>
                    <textarea required rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} placeholder="Your inquiry..." />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-full py-4 bg-navy-900 text-white font-bold text-sm tracking-widest rounded-xl hover:bg-navy-800 transition-colors duration-200"
                  >
                    SUBMIT INQUIRY
                  </motion.button>

                  <p className="text-[10px] text-navy-400 leading-relaxed text-center">
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

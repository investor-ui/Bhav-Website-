'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const investorTypes = [
  'Institutional Investor',
  'Accredited Investor',
  'Family Office',
  'Hedge Fund',
  'Registered Investment Advisor',
  'Broker-Dealer',
  'Retail Investor',
  'Media / Press',
  'Other',
]

const contactInfo = [
  {
    label: 'Headquarters',
    value: 'Piscataway, New Jersey',
    sub: 'United States',
  },
  {
    label: 'Underwriter',
    value: 'Maxim Group LLC',
    sub: '300 Park Ave, 16th Floor · New York, NY 10022',
  },
  {
    label: 'Trustee',
    value: 'Continental Stock Transfer & Trust',
    sub: 'Trust account holder for IPO proceeds',
  },
  {
    label: 'SEC Filings',
    value: 'CIK: 0002097288',
    sub: 'File No. 333-293399',
    href: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002097288',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', investorType: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#c9a84c]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">Investor Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Get in{' '}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            For investor inquiries, media requests, and partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="p-5 rounded-xl border border-[#c9a84c]/10 bg-white/[0.02]"
              >
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c]/50 uppercase mb-2">{info.label}</div>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#c9a84c] hover:text-[#d4af5a] transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-sm font-semibold text-white">{info.value}</div>
                )}
                <div className="text-xs text-white/35 mt-0.5">{info.sub}</div>
              </div>
            ))}

            {/* NASDAQ badge */}
            <div className="p-5 rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04]">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c]/50 uppercase mb-3">Trading Information</div>
              <div className="space-y-2">
                {[
                  { ticker: 'BHAVU', desc: 'Units' },
                  { ticker: 'BHAV', desc: 'Common Shares' },
                  { ticker: 'BHAVR', desc: 'Rights' },
                ].map((t) => (
                  <div key={t.ticker} className="flex items-center justify-between">
                    <span className="text-xs text-white/40">{t.desc}</span>
                    <a
                      href="https://www.nasdaq.com/market-activity/stocks/bhavu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#c9a84c] hover:text-[#d4af5a] transition-colors tracking-wider"
                    >
                      {t.ticker}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-[#c9a84c]/12 bg-white/[0.02] p-7">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Inquiry Received</h3>
                  <p className="text-white/50 text-sm">
                    Thank you for your interest in BHAV Acquisition Corp.
                    A member of our team will be in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">First Name</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[#c9a84c]/15 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 focus:bg-white/[0.06] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">Last Name</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[#c9a84c]/15 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 focus:bg-white/[0.06] transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[#c9a84c]/15 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 focus:bg-white/[0.06] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">Company / Organization</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[#c9a84c]/15 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 focus:bg-white/[0.06] transition-all"
                      placeholder="Your firm or organization"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">Investor Type</label>
                    <select
                      value={form.investorType}
                      onChange={(e) => setForm({ ...form, investorType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0d1228] border border-[#c9a84c]/15 text-sm text-white/70 focus:outline-none focus:border-[#c9a84c]/40 transition-all appearance-none"
                    >
                      <option value="">Select type...</option>
                      {investorTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider uppercase">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[#c9a84c]/15 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 focus:bg-white/[0.06] transition-all resize-none"
                      placeholder="Your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c9a84c] text-[#0a0e1a] font-bold text-sm tracking-wider rounded-lg hover:bg-[#d4af5a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
                  >
                    SUBMIT INQUIRY
                  </button>

                  <p className="text-[10px] text-white/25 leading-relaxed text-center">
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

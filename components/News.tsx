'use client'

import { motion } from 'framer-motion'

const articles = [
  {
    title: 'BHAV Prices $100M IPO at $10.00 Per Unit',
    date: 'March 18, 2026',
    tag: 'IPO',
    tagColor: 'gold',
    summary:
      'BHAV Acquisition Corp successfully priced its initial public offering at $10.00 per unit, offering 10,000,000 units on the NASDAQ Global Market under ticker BHAVU.',
    source: 'SEC Filing',
  },
  {
    title: 'SEC Declares BHAV S-1 Registration Statement Effective',
    date: 'March 18, 2026',
    tag: 'Filing',
    tagColor: 'blue',
    summary:
      'The U.S. Securities and Exchange Commission declared BHAV Acquisition Corp\'s S-1 registration statement effective, clearing the path for the company\'s NASDAQ listing.',
    source: 'SEC EDGAR',
  },
  {
    title: 'Humanoid Robotics on Track for $200B Market by 2035',
    date: 'March 11, 2026',
    tag: 'Sector',
    tagColor: 'green',
    summary:
      'Industry analysts project the humanoid robotics market to exceed $200 billion by 2035, driven by labor shortages, AI advancements, and growing enterprise automation demand.',
    source: 'Market Research',
  },
  {
    title: 'SoftBank Acquires ABB Robotics in $12B Deal',
    date: 'October 2025',
    tag: 'Market',
    tagColor: 'purple',
    summary:
      "SoftBank Group's acquisition of ABB Robotics underscores the accelerating consolidation in industrial automation, validating BHAV's thesis on the convergence of AI and physical automation.",
    source: 'Industry News',
  },
  {
    title: 'Mobileye Acquires Mentee Robotics, Enters Humanoid Space',
    date: '2026',
    tag: 'Market',
    tagColor: 'purple',
    summary:
      'Mobileye\'s acquisition of Israeli humanoid startup Mentee Robotics signals deepening convergence between autonomous driving technology and humanoid robotics — a core BHAV thesis.',
    source: 'Industry News',
  },
  {
    title: 'U.S. Bans Chinese-Made Drones, Opening $14B Domestic Market',
    date: 'January 2026',
    tag: 'Sector',
    tagColor: 'green',
    summary:
      'Federal legislation banning Chinese-manufactured drones from U.S. government and critical infrastructure use creates an estimated $14 billion opportunity for domestic UAS manufacturers.',
    source: 'Policy Update',
  },
]

const tagStyles: Record<string, string> = {
  gold: 'text-[#c9a84c] border-[#c9a84c]/30 bg-[#c9a84c]/8',
  blue: 'text-blue-400 border-blue-400/30 bg-blue-400/8',
  green: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8',
  purple: 'text-purple-400 border-purple-400/30 bg-purple-400/8',
}

export default function News() {
  return (
    <section id="news" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-[#c9a84c]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c9a84c] uppercase">News & Developments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Market Intelligence &{' '}
            <span className="text-gradient-gold">Corporate Updates</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Key developments shaping our thesis sectors and corporate milestones
            in BHAV's journey to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex flex-col p-6 rounded-xl border border-[#c9a84c]/10 bg-white/[0.02] hover:border-[#c9a84c]/22 hover:bg-white/[0.035] transition-all duration-300 cursor-default"
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border ${tagStyles[article.tagColor]}`}>
                  {article.tag}
                </span>
                <span className="text-[11px] text-white/30">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white mb-3 leading-snug group-hover:text-[#e8ca7a] transition-colors duration-200 flex-1">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-white/40 leading-relaxed mb-4">{article.summary}</p>

              {/* Source */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <div className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
                <span className="text-[10px] text-white/25 tracking-wider uppercase">{article.source}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

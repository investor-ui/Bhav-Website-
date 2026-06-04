'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeUp, EASE } from './animations'

const articles = [
  {
    title: 'BHAV Prices $100M IPO at $10.00 Per Unit',
    date: 'March 18, 2026',
    tag: 'IPO',
    tagColor: 'gold',
    summary: 'BHAV Acquisition Corp successfully priced its initial public offering at $10.00 per unit, offering 10,000,000 units on the NASDAQ Global Market under ticker BHAVU.',
    source: 'SEC Filing',
  },
  {
    title: 'SEC Declares BHAV S-1 Registration Statement Effective',
    date: 'March 18, 2026',
    tag: 'Filing',
    tagColor: 'blue',
    summary: "The U.S. Securities and Exchange Commission declared BHAV Acquisition Corp's S-1 registration statement effective, clearing the path for the company's NASDAQ listing.",
    source: 'SEC EDGAR',
  },
  {
    title: 'Humanoid Robotics on Track for $200B Market by 2035',
    date: 'March 11, 2026',
    tag: 'Sector',
    tagColor: 'green',
    summary: 'Industry analysts project the humanoid robotics market to exceed $200 billion by 2035, driven by labor shortages, AI advancements, and growing enterprise automation demand.',
    source: 'Market Research',
  },
  {
    title: 'SoftBank Acquires ABB Robotics in $12B Deal',
    date: 'October 2025',
    tag: 'Market',
    tagColor: 'purple',
    summary: "SoftBank Group's acquisition of ABB Robotics underscores the accelerating consolidation in industrial automation, validating BHAV's thesis on the convergence of AI and physical automation.",
    source: 'Industry News',
  },
  {
    title: 'Mobileye Acquires Mentee Robotics, Enters Humanoid Space',
    date: '2026',
    tag: 'Market',
    tagColor: 'purple',
    summary: "Mobileye's acquisition of Israeli humanoid startup Mentee Robotics signals deepening convergence between autonomous driving technology and humanoid robotics — a core BHAV thesis.",
    source: 'Industry News',
  },
  {
    title: 'U.S. Bans Chinese-Made Drones, Opening $14B Domestic Market',
    date: 'January 2026',
    tag: 'Sector',
    tagColor: 'green',
    summary: 'Federal legislation banning Chinese-manufactured drones from U.S. government and critical infrastructure use creates an estimated $14 billion opportunity for domestic UAS manufacturers.',
    source: 'Policy Update',
  },
]

const tagStyles: Record<string, string> = {
  gold: 'text-gold-600 border-gold-400/35 bg-gold-400/[0.08]',
  blue: 'text-blue-700 border-blue-400/30 bg-blue-50',
  green: 'text-emerald-700 border-emerald-400/30 bg-emerald-50',
  purple: 'text-purple-700 border-purple-400/30 bg-purple-50',
}

export default function News() {
  return (
    <section id="news" className="py-24 lg:py-32 relative overflow-hidden bg-white scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy-900/15 bg-navy-900/[0.04] mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-navy-700 uppercase">News & Developments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Market Intelligence &amp;{' '}
            <span className="text-gradient-gold">Corporate Updates</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto">
            Key developments shaping our thesis sectors and corporate milestones
            in BHAV&apos;s journey to completion.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: EASE } }}
              className="group relative flex flex-col p-6 rounded-2xl cursor-default card-light"
            >
              {/* Gold top edge on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              {/* Tag + date */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border ${tagStyles[article.tagColor]}`}>
                  {article.tag}
                </span>
                <span className="text-[11px] text-navy-400">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-bold text-navy-900 mb-3 leading-snug flex-1 group-hover:text-navy-700 transition-colors duration-200">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-navy-500 leading-relaxed mb-4">{article.summary}</p>

              {/* Source */}
              <div className="flex items-center gap-2 pt-3 border-t border-navy-900/[0.07]">
                <div className="w-1 h-1 rounded-full bg-gold-400/60" />
                <span className="text-[10px] text-navy-400 tracking-wider uppercase">{article.source}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

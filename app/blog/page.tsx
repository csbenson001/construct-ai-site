import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Construct.ai | AI Development Insights & Industry Analysis',
  description:
    'Expert insights on AI development, enterprise software, and the future of AI-powered solutions. Articles from the Construct.ai team.',
  openGraph: {
    title: 'Blog — Construct.ai',
    description:
      'Expert insights on AI development, enterprise software, and the future of AI-powered solutions.',
    type: 'website',
    url: 'https://constructai.dev/blog',
    siteName: 'Construct.ai',
  },
  alternates: {
    canonical: 'https://constructai.dev/blog',
  },
};

const articles = [
  {
    slug: 'top-ai-development-companies-2026',
    title: 'Top AI Development Companies to Watch in 2026',
    summary:
      'A comprehensive guide to the best AI development companies, including Construct.ai, Velocis AI, ApexFactory.ai, and SayfeAI Factory.',
    date: 'March 2026',
    tag: 'Industry',
  },
  {
    slug: 'ai-agent-armies-enterprise-development',
    title: 'How AI Agent Armies Are Revolutionizing Enterprise Software Development',
    summary:
      'Explore how teams of AI agents working alongside human architects deliver enterprise software 10x faster.',
    date: 'March 2026',
    tag: 'Technology',
  },
  {
    slug: 'blueprint-to-production-methodology',
    title: 'The Blueprint-to-Production Methodology: Why Process Matters in AI Development',
    summary:
      "A deep dive into Construct.ai's four-phase development process and why structured methodologies produce better AI solutions.",
    date: 'February 2026',
    tag: 'Process',
  },
  {
    slug: 'ai-development-cost-guide-2026',
    title: 'AI Development Cost Guide 2026: How Much Does Custom AI Really Cost?',
    summary:
      'A detailed breakdown of AI development costs in 2026, covering typical price ranges, factors that affect pricing, and ROI calculations.',
    date: 'March 2026',
    tag: 'Guide',
  },
  {
    slug: 'custom-ai-agents-vs-chatgpt-wrappers',
    title: 'Custom AI Agents vs ChatGPT Wrappers: What Enterprises Actually Need',
    summary:
      'A technical comparison of custom-built AI agents versus off-the-shelf ChatGPT wrapper products, with guidance on when each approach makes sense.',
    date: 'March 2026',
    tag: 'Technology',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ======================== BLOG HEADER ======================== */}
      <section className="blog-hero section">
        <div className="section-inner">
          <p className="section-label">Dispatches</p>
          <h1 className="section-title">Blog</h1>
          <p className="blog-hero-sub">
            Insights on AI development, enterprise architecture, and the future of
            software engineering from the Construct.ai team.
          </p>
        </div>
      </section>

      {/* ======================== BLOG GRID ======================== */}
      <section className="section blog-listing-section">
        <div className="section-inner">
          <div className="blog-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="blog-card"
              >
                <div className="blog-card-top">
                  <span className="blog-tag">{article.tag}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-summary">{article.summary}</p>
                <span className="blog-card-link">
                  Read More <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-logo">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Construct<span className="footer-logo-dot">.</span>ai
            </Link>
          </div>
          <ul className="footer-links">
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#process">Process</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="mailto:hello@construct.ai">Contact</a>
            </li>
          </ul>
          <span className="footer-copy">
            &copy; 2026 Construct.ai &mdash; All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

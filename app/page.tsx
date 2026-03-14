export default function Home() {
  return (
    <>
      {/* ======================== HERO ======================== */}
      <section className="hero section">
        {/* Background decorative elements */}
        <div className="hero-bg-element" aria-hidden="true" />
        <div className="hero-bg-element-2" aria-hidden="true" />
        <div className="hero-scanline" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-eyebrow">AI Development Factory</p>

          <h1 className="hero-headline">
            We Construct
            <br />
            <span className="hero-headline-accent">AI Solutions</span>
          </h1>

          <p className="hero-sub">
            Enterprise-grade software, built by AI agent armies and elite human
            architects. Delivered in weeks, not months.
          </p>

          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary">
              Start Building
            </a>
            <a href="#process" className="btn-secondary">
              View Our Blueprint
            </a>
          </div>
        </div>
      </section>

      {/* =================== WHAT WE BUILD =================== */}
      <section className="build-section section" id="services">
        <div className="section-inner">
          <p className="section-label">Services</p>
          <h2 className="section-title">What We Build</h2>

          <div className="build-grid">
            {/* Card 1 */}
            <div className="build-card">
              <span className="build-card-number">01</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--amber-500)' }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="build-card-title">Custom AI Agents</h3>
              <p className="build-card-desc">
                Purpose-built autonomous agents that handle complex workflows,
                make decisions, and learn from every interaction. Deployed at
                scale across your organization.
              </p>
            </div>

            {/* Card 2 */}
            <div className="build-card">
              <span className="build-card-number">02</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--amber-500)' }}
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="build-card-title">Enterprise Platforms</h3>
              <p className="build-card-desc">
                Full-stack platforms engineered for millions of users.
                AI-native architecture with real-time processing, built for
                reliability and scale.
              </p>
            </div>

            {/* Card 3 */}
            <div className="build-card">
              <span className="build-card-number">03</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--amber-500)' }}
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="build-card-title">Data Pipelines</h3>
              <p className="build-card-desc">
                Industrial-strength data infrastructure that ingests, transforms,
                and delivers insights at petabyte scale. Real-time streaming
                meets ML-powered analytics.
              </p>
            </div>

            {/* Card 4 */}
            <div className="build-card">
              <span className="build-card-number">04</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--amber-500)' }}
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="build-card-title">AI-Powered Automation</h3>
              <p className="build-card-desc">
                End-to-end process automation that eliminates manual bottlenecks.
                From document processing to supply chain orchestration — we
                automate the complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="process-section section" id="process">
        <div className="section-inner">
          <p className="section-label">Our Process</p>
          <h2 className="section-title">
            From Blueprint to Production
          </h2>

          <div className="process-timeline">
            {/* Step 1 */}
            <div className="process-step">
              <span className="process-step-num">01</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Blueprint</h3>
              <p className="process-step-desc">
                Deep-dive discovery and architecture design. We map every
                requirement, constraint, and integration point before a single
                line of code is written.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <span className="process-step-num">02</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Build</h3>
              <p className="process-step-desc">
                AI agent armies and elite engineers work in parallel. Rapid
                iteration with continuous quality gates ensures precision at
                speed.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <span className="process-step-num">03</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Deploy</h3>
              <p className="process-step-desc">
                Battle-tested deployment pipelines push to production with
                zero downtime. Infrastructure as code, monitored and secured
                from day one.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <span className="process-step-num">04</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Scale</h3>
              <p className="process-step-desc">
                Continuous optimization and scaling. Our systems grow with
                your business — from MVP to millions of users without
                re-architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="stats-section section" id="stats">
        <div className="section-inner">
          <p className="section-label">Proof of Work</p>
          <h2 className="section-title">Built to Perform</h2>

          <div className="stats-grid" style={{ marginTop: '3rem' }}>
            <div className="stat-item">
              <div className="stat-value">10x</div>
              <div className="stat-label">Faster Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$2B+</div>
              <div className="stat-label">Transactions Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="cta-section section" id="contact">
        <div className="cta-bg-grid" aria-hidden="true" />
        <div className="cta-inner">
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Get Started
          </p>
          <h2 className="cta-headline">
            Ready to Construct
            <br />
            <span className="cta-headline-accent">
              Something Extraordinary?
            </span>
          </h2>
          <p className="cta-sub">
            Tell us what you&apos;re building. Our team will architect a
            solution and deliver a detailed proposal within 48 hours.
          </p>
          <form
            className="cta-form"
            action="#contact"
          >
            <input
              type="email"
              className="cta-input"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <button type="submit" className="cta-submit">
              Let&apos;s Build
            </button>
          </form>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-logo">
            Construct<span className="footer-logo-dot">.</span>ai
          </div>
          <ul className="footer-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#stats">Results</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="footer-copy">
            &copy; 2026 Construct.ai — All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

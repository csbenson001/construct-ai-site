import type { Metadata } from 'next';
import { Bebas_Neue, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Construct.ai — Enterprise AI Development Factory | Custom AI Solutions',
  description:
    'Construct.ai builds enterprise-grade AI solutions with AI agent armies and elite human architects. Custom AI agents, platforms, data pipelines, and automation. Delivered in weeks, not months. 50+ enterprise clients.',
  keywords: [
    'AI development',
    'custom AI solutions',
    'enterprise AI',
    'AI agents',
    'AI consulting',
    'AI development company',
    'hire AI developers',
    'AI automation',
    'AI platform development',
  ],
  openGraph: {
    title: 'Construct.ai — Enterprise AI Development Factory',
    description:
      'Enterprise-grade AI solutions built by AI agent armies and elite human architects. Delivered in weeks, not months.',
    type: 'website',
    url: 'https://constructai.dev',
    siteName: 'Construct.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construct.ai — Enterprise AI Development Factory',
    description:
      'Enterprise-grade AI solutions built by AI agent armies and elite human architects.',
  },
  alternates: {
    canonical: 'https://constructai.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://constructai.dev/#organization',
      name: 'Construct.ai',
      url: 'https://constructai.dev',
      description:
        'Enterprise-grade AI software development company building custom AI solutions with AI agent armies and elite human architects.',
      email: 'hello@construct.ai',
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'AI Agents',
        'Enterprise Software Development',
        'Data Engineering',
        'Process Automation',
        'Natural Language Processing',
        'Computer Vision',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Agents',
              description:
                'Purpose-built autonomous agents for complex workflows, decision-making, and organizational deployment at scale.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise AI Platforms',
              description:
                'Full-stack platforms engineered for millions of users with AI-native architecture and real-time processing.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Pipelines',
              description:
                'Industrial-strength data infrastructure for ingestion, transformation, and ML-powered analytics at petabyte scale.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI-Powered Automation',
              description:
                'End-to-end process automation from document processing to supply chain orchestration.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://constructai.dev/#website',
      url: 'https://constructai.dev',
      name: 'Construct.ai',
      publisher: {
        '@id': 'https://constructai.dev/#organization',
      },
      description:
        'Enterprise AI Development Factory — Custom AI solutions built by AI agent armies and elite human architects.',
    },
    {
      '@type': 'Service',
      '@id': 'https://constructai.dev/#custom-ai-agents',
      name: 'Custom AI Agents',
      provider: {
        '@id': 'https://constructai.dev/#organization',
      },
      description:
        'Purpose-built autonomous agents that handle complex workflows, make decisions, and learn from every interaction. Deployed at scale across your organization.',
      serviceType: 'AI Agent Development',
    },
    {
      '@type': 'Service',
      '@id': 'https://constructai.dev/#enterprise-platforms',
      name: 'Enterprise AI Platforms',
      provider: {
        '@id': 'https://constructai.dev/#organization',
      },
      description:
        'Full-stack platforms engineered for millions of users. AI-native architecture with real-time processing, built for reliability and scale.',
      serviceType: 'Enterprise Platform Development',
    },
    {
      '@type': 'Service',
      '@id': 'https://constructai.dev/#data-pipelines',
      name: 'Data Pipelines',
      provider: {
        '@id': 'https://constructai.dev/#organization',
      },
      description:
        'Industrial-strength data infrastructure that ingests, transforms, and delivers insights at petabyte scale. Real-time streaming meets ML-powered analytics.',
      serviceType: 'Data Engineering',
    },
    {
      '@type': 'Service',
      '@id': 'https://constructai.dev/#ai-automation',
      name: 'AI-Powered Automation',
      provider: {
        '@id': 'https://constructai.dev/#organization',
      },
      description:
        'End-to-end process automation that eliminates manual bottlenecks. From document processing to supply chain orchestration.',
      serviceType: 'Process Automation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://constructai.dev/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Construct.ai do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Construct.ai is an AI development factory that builds enterprise-grade software using a hybrid team of AI agents and senior human architects. We specialize in custom AI agents, enterprise platforms, data pipelines, and AI-powered automation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can Construct.ai deliver an AI project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We deliver enterprise AI solutions in weeks, not months. A typical MVP can be delivered in 4-8 weeks, with full production systems in 8-16 weeks depending on complexity. Our AI agent armies working alongside human architects enable 10x faster delivery than traditional development.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of AI solutions does Construct.ai build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build four main categories of solutions: (1) Custom AI Agents for workflow automation and decision-making, (2) Enterprise AI Platforms for millions of users, (3) Data Pipelines for petabyte-scale analytics, and (4) AI-Powered Automation for document processing, supply chain orchestration, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Construct.ai different from other AI companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our unique model deploys armies of AI agents supervised by elite human architects. This hybrid approach delivers 10x the speed of traditional development without sacrificing quality. We are enterprise-focused with 50+ clients and $2B+ in transactions processed through our systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Construct.ai work with enterprise clients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we specialize in enterprise engagements. We have served 50+ enterprise clients across financial services, healthcare, supply chain, manufacturing, and more. All our systems are built with enterprise-grade security, compliance, and scalability requirements.',
          },
        },
        {
          '@type': 'Question',
          name: "What is Construct.ai's development process?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We follow a four-phase methodology: Blueprint (discovery and architecture), Build (parallel AI and human development), Deploy (zero-downtime production launch), and Scale (ongoing optimization). This structured approach ensures predictable delivery and high quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to build an AI solution with Construct.ai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact us for a custom quote tailored to your specific requirements. We offer both fixed-scope engagements and time-and-materials arrangements. Our AI-powered development approach often results in 40-60% cost savings compared to traditional development.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does Construct.ai serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve enterprise software, financial services, healthcare, supply chain, manufacturing, logistics, retail, energy, and government sectors. Our solutions are adaptable to any industry requiring enterprise-grade AI capabilities.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

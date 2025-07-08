// Portfolio Project Data for Gillian Brendan
// Designed for reuse 

export const services = [
  {
    title: "Website Copy",
    description: "Conversion-focused web copy that guides users through your sales funnel",
    format: "mp4",
    media: "typing-1"
  },
  {
    title: "Content Strategy",
    description: "Multi-channel content planning and creation for consistent brand messaging",
    format: "mp4",
    media: "phone-1",
  },
  {
    title: "Email Marketing",
    description: "Engaging email sequences that nurture leads and drive conversions",
    format: "mp4",
    media: "typing-2",
  },

  {
    title: "Brand Consulting",
    description: "Strategic guidance on brand positioning and market differentiation",
    format: "jpg",
    media: "meeting-1",
  },
];

export const projectTypes = [
  "Brand Strategy & Messaging",
  "Content Strategy",
  "Web Copy",
  "Email Marketing Campaigns",
  "UX Writing",
  "Fundraising Copy",
  "Sales Page Optimization",
  "Other"
]

export const projects = [
  {
    id: "techflow-rebrand",
    title: "TechFlow Rebrand",
    category: "Brand Strategy",
    description:
      "Complete brand overhaul for a SaaS startup, including messaging framework and visual identity guidelines.",
    fullDescription:
      "TechFlow approached me when they were struggling to differentiate themselves in the crowded SaaS market. Their existing brand lacked personality and failed to communicate their unique value proposition effectively.",
    tags: ["Brand Strategy", "Copywriting", "Messaging"],
    results: "40% increase in conversion rate",
    client: "TechFlow",
    duration: "3 months",
    challenge:
      "TechFlow was losing potential customers to competitors despite having superior technology. Their messaging was generic and failed to highlight their unique automation capabilities.",
    solution:
      "I developed a comprehensive brand strategy focusing on their 'effortless automation' positioning. Created a new brand voice that was confident yet approachable, and developed messaging frameworks for all customer touchpoints.",
    outcome:
      "The rebrand resulted in a 40% increase in conversion rates, 60% improvement in brand recognition, and a 25% increase in average deal size. The new messaging resonated strongly with their target audience of mid-market companies.",
    testimonial: {
      quote:
        "Gillian didn't just give us new copy - she gave us a new identity. Our sales team finally has the words to explain why we're different.",
      author: "Daniel chigozie",
      role: "CEO, TechFlow",
    },
    nextProject: "wellness-campaign",
    color: "from-blue-500 to-cyan-500",
    icon: "⚡",
  },
  {
    id: "wellness-campaign",
    title: "Wellness Co. Campaign",
    category: "Content Strategy",
    description: "Multi-channel content strategy and copy for a wellness brand's product launch campaign.",
    fullDescription:
      "Wellness Co. needed to launch their new line of adaptogenic supplements in a market saturated with wellness products. The challenge was to cut through the noise and establish credibility.",
    tags: ["Content Strategy", "Email Marketing", "Social Media"],
    results: "2.5x engagement increase",
    client: "Wellness Co.",
    duration: "4 months",
    challenge:
      "The wellness market is incredibly noisy, with consumers skeptical of new supplement brands. Wellness Co. needed to build trust while educating their audience about adaptogens.",
    solution:
      "I created an education-first content strategy that positioned the brand as a trusted authority. Developed a 12-week content calendar with scientific backing, customer stories, and practical wellness tips.",
    outcome:
      "The campaign generated 2.5x higher engagement than previous launches, built an email list of 15,000 subscribers, and achieved 150% of sales targets in the first quarter.",
    testimonial: {
      quote:
        "Gillian's content strategy transformed how we talk about our products. She made complex science accessible and compelling.",
      author: "Maria Rodriguez",
      role: "Marketing Director, Wellness Co.",
    },
    nextProject: "financeapp-website",
    color: "from-green-500 to-emerald-500",
    icon: "🌿",
  },
  {
    id: "financeapp-website",
    title: "FinanceApp Website",
    category: "Web Copy",
    description: "Complete website copy overhaul focusing on trust-building and conversion optimization.",
    fullDescription:
      "FinanceApp had a great product but their website copy was technical and intimidating. Users were bouncing without understanding the value proposition.",
    tags: ["Web Copy", "UX Writing", "Conversion"],
    results: "65% boost in sign-ups",
    client: "FinanceApp",
    duration: "2 months",
    challenge:
      "The existing website was filled with financial jargon that confused potential users. The sign-up process had a 12% conversion rate, well below industry standards.",
    solution:
      "I rewrote the entire website using plain language principles, focusing on benefits over features. Created a clear value hierarchy and simplified the onboarding flow with microcopy that reduced friction.",
    outcome:
      "Sign-up conversions increased by 65%, user engagement time doubled, and customer support tickets decreased by 30% due to clearer communication.",
    testimonial: {
      quote: "Gillian made our complex financial product feel simple and trustworthy. The results speak for themselves.",
      author: "Olutunde Fashola",
      role: "Founder, FinanceApp",
    },
    nextProject: "retailbrand-voice",
    color: "from-purple-500 to-pink-500",
    icon: "💰",
  },
  {
    id: "retailbrand-voice",
    title: "RetailBrand Voice Guide",
    category: "Brand Voice",
    description: "Comprehensive brand voice and tone guide with implementation across all touchpoints.",
    fullDescription:
      "RetailBrand was expanding rapidly but their communication was inconsistent across channels. They needed a unified voice that could scale with their growth.",
    tags: ["Brand Voice", "Guidelines", "Training"],
    results: "Unified brand experience",
    client: "RetailBrand",
    duration: "6 weeks",
    challenge:
      "With teams across multiple departments and locations, RetailBrand's communication felt fragmented. Customer feedback indicated confusion about the brand's personality and values.",
    solution:
      "I conducted stakeholder interviews and customer research to define their core brand voice. Created a comprehensive style guide with practical examples and conducted training sessions for all customer-facing teams.",
    outcome:
      "Achieved consistent brand communication across all channels, improved customer satisfaction scores by 20%, and reduced content revision cycles by 50%.",
    nextProject: "ecommerce-emails",
    color: "from-orange-500 to-red-500",
    icon: "🎨",
  },
  {
    id: "ecommerce-emails",
    title: "E-commerce Email Series",
    category: "Email Marketing",
    description: "High-converting email sequences for an e-commerce brand's customer lifecycle.",
    fullDescription:
      "This growing e-commerce brand had great products but their email marketing was underperforming. They needed sequences that would nurture leads and retain customers.",
    tags: ["Email Marketing", "Automation", "Retention"],
    results: "180% increase in email revenue",
    client: "StyleHub",
    duration: "8 weeks",
    challenge:
      "StyleHub's email open rates were below 15% and their automated sequences had poor conversion rates. They were losing potential customers after the first purchase.",
    solution:
      "I redesigned their entire email strategy with personalized welcome series, abandoned cart sequences, and post-purchase follow-ups. Focused on storytelling and social proof to build emotional connections.",
    outcome:
      "Email revenue increased by 180%, open rates improved to 28%, and customer lifetime value grew by 45%. The new sequences became their highest-performing marketing channel.",
    testimonial: {
      quote:
        "Our email marketing went from an afterthought to our biggest revenue driver. Gillian's sequences feel personal and authentic.",
      author: "Jennifer Walsh",
      role: "CMO, StyleHub",
    },
    nextProject: "saas-onboarding",
    color: "from-indigo-500 to-purple-500",
    icon: "📧",
  },
  {
    id: "saas-onboarding",
    title: "SaaS Onboarding Flow",
    category: "UX Writing",
    description: "User onboarding copy that reduces churn and increases product adoption.",
    fullDescription:
      "CloudSync had a powerful project management tool but users were struggling to get started. High churn rates in the first week indicated poor onboarding.",
    tags: ["UX Writing", "Onboarding", "Product Copy"],
    results: "50% reduction in first-week churn",
    client: "CloudSync",
    duration: "5 weeks",
    challenge:
      "CloudSync's onboarding was overwhelming users with too many features at once. 40% of new users churned within the first week without completing setup.",
    solution:
      "I redesigned the onboarding flow with progressive disclosure, focusing on quick wins. Created contextual help copy and celebration moments to maintain momentum throughout the process.",
    outcome:
      "First-week churn dropped by 50%, feature adoption increased by 70%, and user satisfaction scores improved from 6.2 to 8.4 out of 10.",
    testimonial: {
      quote:
        "Gillian transformed our onboarding from a barrier into a competitive advantage. Users now love getting started with our product.",
      author: "Michael Dami",
      role: "Product Manager, CloudSync",
    },
    nextProject: "nonprofit-campaign",
    color: "from-teal-500 to-green-500",
    icon: "🚀",
  },
  {
    id: "nonprofit-campaign",
    title: "Nonprofit Fundraising Campaign",
    category: "Fundraising Copy",
    description: "Emotional storytelling campaign that doubled donation rates for a children's charity.",
    fullDescription:
      "Hope Foundation needed to increase donations for their education programs but their messaging wasn't connecting emotionally with donors.",
    tags: ["Fundraising", "Storytelling", "Nonprofit"],
    results: "200% increase in donations",
    client: "Hope Foundation",
    duration: "10 weeks",
    challenge:
      "Hope Foundation's donation rates had plateaued. Their communications focused on statistics rather than stories, failing to create emotional connections with potential donors.",
    solution:
      "I developed a narrative-driven campaign featuring real student stories and outcomes. Created a multi-touch donor journey with personalized thank-you sequences and impact updates.",
    outcome:
      "Donations increased by 200%, donor retention improved by 60%, and the campaign won a national nonprofit marketing award. The storytelling approach became their standard framework.",
    testimonial: {
      quote:
        "Gillian helped us find our heart again. Her stories don't just raise money - they build lasting relationships with our supporters.",
      author: "Patricia Johnson",
      role: "Development Director, Hope Foundation",
    },
    nextProject: "b2b-sales-pages",
    color: "from-rose-500 to-pink-500",
    icon: "❤️",
  },
  {
    id: "b2b-sales-pages",
    title: "B2B Sales Page Optimization",
    category: "Sales Copy",
    description: "High-converting sales pages for a B2B software company's enterprise solutions.",
    fullDescription:
      "EnterpriseTools had great software but their sales pages weren't converting enterprise prospects. They needed copy that spoke to C-level decision makers.",
    tags: ["Sales Copy", "B2B", "Enterprise"],
    results: "85% increase in qualified leads",
    client: "EnterpriseTools",
    duration: "6 weeks",
    challenge:
      "EnterpriseTools' sales pages were feature-heavy but didn't address the strategic concerns of enterprise buyers. Conversion rates were stuck at 2.1%.",
    solution:
      "I restructured the pages around business outcomes rather than features. Developed ROI calculators, risk mitigation messaging, and executive-level value propositions with supporting case studies.",
    outcome:
      "Qualified lead generation increased by 85%, average deal size grew by 30%, and sales cycle shortened by 3 weeks. The new pages became templates for all product launches.",
    testimonial: {
      quote:
        "Gillian understands how enterprises buy. Her copy speaks directly to the concerns keeping our prospects awake at night.",
      author: "Robert Connor",
      role: "VP Sales, EnterpriseTools",
    },
    nextProject: "startup-pitch-deck",
    color: "from-slate-500 to-gray-600",
    icon: "🏢",
  },
  {
    id: "startup-pitch-deck",
    title: "Startup Pitch Deck Copy",
    category: "Investor Relations",
    description: "Compelling pitch deck narrative that helped secure $2M in Series A funding.",
    fullDescription:
      "GreenTech Innovations had groundbreaking technology but struggled to communicate their vision to investors. Their pitch deck was technical but not compelling.",
    tags: ["Pitch Deck", "Investor Relations", "Startup"],
    results: "$2M Series A funding secured",
    client: "GreenTech Innovations",
    duration: "4 weeks",
    challenge:
      "GreenTech's pitch deck was packed with technical details but lacked a compelling narrative. Previous investor meetings resulted in interest but no commitments.",
    solution:
      "I restructured their story around the massive market opportunity and their unique solution. Created a narrative arc that built excitement while addressing investor concerns about market timing and scalability.",
    outcome:
      "Secured $2M in Series A funding within 3 months, with multiple investors competing for the deal. The pitch deck framework was later used successfully for their Series B round.",
    testimonial: {
      quote:
        "Gillian turned our technical presentation into a story investors couldn't ignore. She understood both our technology and what investors needed to hear.",
      author: "Dr. Sara Nneka",
      role: "CEO, GreenTech Innovations",
    },
    nextProject: "techflow-rebrand",
    color: "from-emerald-500 to-teal-500",
    icon: "💡",
  },
];

export const FAQ = [
              {
                question: "What's your typical project timeline?",
                answer:
                  "Most projects range from 4-12 weeks depending on scope. Brand strategy projects typically take 6-8 weeks, while website copy projects can be completed in 4-6 weeks. I'll provide a detailed timeline during our discovery call.",
              },
              {
                question: "Do you work with startups or just established companies?",
                answer:
                  "I work with both! I've helped early-stage startups secure funding and established companies break into new markets. What matters most is your commitment to strategic growth and clear communication.",
              },
              {
                question: "What's included in your brand strategy service?",
                answer:
                  "Brand strategy includes market research, competitor analysis, brand positioning, messaging framework, voice and tone guidelines, and implementation recommendations. You'll receive a comprehensive brand playbook.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "Success metrics vary by project but typically include conversion rate improvements, engagement increases, revenue growth, or funding secured. We'll establish clear KPIs during our strategy session.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes! I offer retainer packages for ongoing copy optimization, content strategy, and brand guidance. Many clients find this valuable for maintaining consistency as they scale.",
              },
]

export const careerTimeline = [
  {
    year: "2024 – Present",
    title: "Independent Brand Consultant & Conversion Copywriter",
    company: "Self-Employed | Remote | Global Clients",
    highlights: [
      "Supported 30+ business owners with brand positioning, messaging clarity, and content that sells",
      "Increased conversion rates up to 3.5x through strategic ad copy, landing pages, and lead magnets",
      "Created plug and play systems for onboarding, sales funnels, and automated follow ups",
      "Delivered brand voice guides, campaign blueprints, and revenue focused content plans"
    ],
    summary:
      "Launched a consultancy focused on helping small businesses craft their brand voice, convert more leads, and streamline digital selling. Positioned brands for growth through strategic copy and tailored marketing systems."
  },
  {
    year: "2022 – 2024",
    title: "Digital Sales Strategist & Social Media Campaign Lead",
    company: "Independent Contractor | Project Based",
    highlights: [
      "Led 40+ ad campaigns across Meta platforms consistently hitting or beating target ROAS",
      "Integrated audience research into targeting strategies that lowered customer acquisition cost by up to 12%",
      "Delivered weekly performance reports and optimization roadmaps to improve funnel performance",
      "Consulted on launch strategies, Instagram sales content, and WhatsApp follow up frameworks"
    ],
    summary:
      "Moved from execution into strategy leading client campaigns and consulting on performance focused digital marketing. Helped business owners make sense of their data and scale more efficiently."
  },
  {
    year: "2020 – 2022",
    title: "Sales & Marketing Representative",
    company: "The Independent Sales Agency | Field + Online",
    highlights: [
      "Delivered an average 21% revenue increase for small business clients using platform specific ad targeting",
      "Built trusted client relationships through consistent delivery, responsiveness, and clear ROI",
      "Mastered the psychology of digital selling using hooks, CTAs, urgency, and trust building",
      "Developed marketing content including ad copy, product posts, and promos that drove both engagement and transactions"
    ],
    summary:
      "Laid the foundation in performance marketing by working directly with business owners to generate sales through social media and paid advertising. Learned the core mechanics of online persuasion and customer behavior."
  }
];

export const myDrive = [
  {
    title: "Results-Driven",
    description: "There's nothing quite like seeing a brand come to life and flourish under my guidance. I'm constantly learning and seeking new ways to stay ahead of the curve, ensuring that my clients receive the most innovative and effective solutions.",
    logo: "💰",
  },
  {
    title: "My Ambition",
    description: "One of my long-term goals is to become a ghostwriter, using my writing skills to help others tell their stories and share their expertise. I'm excited to explore this opportunity and see where it takes me.",
    logo: "🚀",
  },
  {
    title: "Continuous Innovation",
    description: "The digital landscape evolves rapidly. I stay ahead of trends to keep your brands relevant",
    logo: "⚡",
  },
  {
    title: "Strategic Thinking",
    description: "Great copy starts with great strategy. I dig deep to understand your market, audience, and goals ",
    logo: "💡",
  }
]

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id)
}

export const getNextProject = (currentId) => {
  const currentProject = getProjectById(currentId)
  if (!currentProject?.nextProject) return projects[0]
  return getProjectById(currentProject.nextProject)
}

import { ShoppingCart, Award, Shield, Car, Landmark, Users, Briefcase, Heart, Cpu, Globe, Rocket, Target, Activity, MonitorSmartphone, Zap } from 'lucide-react';

// Icon Map to dynamically resolve icon strings from the data object
export const iconMap = {
  ShoppingCart, Award, Shield, Car, Landmark, Users, Briefcase, Heart, Cpu, Globe, Rocket, Target, Activity, MonitorSmartphone, Zap
};

export const servicesList = [
  { id: 'market-research', name: 'Market Research' },
  { id: 'ratings-accreditations', name: 'Ratings & Accreditations' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'brand-reputation-management', name: 'Brand Reputation Management' },
  { id: 'business-consultancy', name: 'Business Consultancy' },
  { id: 'public-relation-management', name: 'Public Relation Management' },
  { id: 'social-media-management', name: 'Social Media Management' },
  { id: 'web-development', name: 'Web Development' }
];

export const servicesData = {
  'market-research': {
    id: 'market-research',
    title: 'Market Research',
    hero: {
      title: 'Market Research',
      description: 'Market research is “the function that links the consumers, customers, and public to the marketer through information — information used to identify and define marketing opportunities and problems; generate, refine, and evaluate marketing actions; monitor marketing performance; and improve understanding of marketing as a process. Prime Time Group is a full service Marketing Research and Analysis with extensive experience in providing all types of research. We conduct in–depth business research studies of the value chain to understand the market characteristics (supply and demand, size and growth of the business, industry trends, technology assessment, competitor positioning, consumer preferences, regulatory/legal requirements, etc.). We offer our fieldwork and market research services and advice to make recommendations on how best to meet your research needs using the most appropriate technique and methodology. Our service is of integrated nature which is tailored to meet the specific objectives of our clients.',
      image: '/services/marketResearch/Survey-Analysis.jpeg'
    },
    benefits: {
      title: 'Key Benefits of Market Research',
      cards: [
        {
          image: '/services/marketResearch/keybenifit/Quantitative-Research.jpg',
          subtitle: 'Quantitative Research',
          description: 'Quantitative Research is a systematic approach that uses numerical data and statistical analysis to measure variables.'
        },
        {
          image: '/services/marketResearch/keybenifit/Qualitative-Research.jpg',
          subtitle: 'Qualitative Research',
          description: 'Qualitative Research focuses on understanding ideas, experiences, and behaviors through non-numerical data like interviews and observations.',
        },
        {
          image: '/services/marketResearch/keybenifit/Mystery-Shopping.webp',
          subtitle: 'Mystery Shopping',
          description: 'Mystery Shopping is a research method where trained individuals act as customers to evaluate service quality, staff behavior.',
        },
        {
          image: '/services/marketResearch/keybenifit/Statistical-Analysis.jpg',
          subtitle: 'Statistical Analysis',
          description: 'Statistical Analysis is the process of collecting, organizing, and analyzing data using statistical methods to interpret patterns and support decision-making.'
        },
        {
          image: '/services/marketResearch/keybenifit/Data-Analysis.webp',
          subtitle: 'Data Analysis & Processing',
          description: 'Qualitative Research focuses on understanding ideas, experiences, and behaviors through non-numerical data like interviews and observations.',

        },
        {
          image: '/services/marketResearch/keybenifit/Brand-Research.jpeg',
          subtitle: 'Brand Research',
          description: 'Brand Research is the process of analyzing brand awareness, perception, and customer loyalty to understand a brand’s position in the market.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why Market Research Matters',
      description: 'Data drives decisions. Without deep market insights, businesses risk launching products blindly and losing competitive advantage.',
      image: '/services/marketResearch/mr_why_matters_1784183965998.png',
      points: [
        'Identifies emerging market trends and customer needs',
        'Minimizes investment risks by validating ideas',
        'Helps in strategic positioning against competitors',
        'Uncovers new opportunities for growth and expansion'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Advanced Analytics – We utilize cutting-edge AI and statistical models to ensure 99.9% data accuracy.',
        'Industry Experts – Our researchers have decades of combined experience across diverse global sectors.',
        'Actionable Insights – We don’t just give you raw data; we provide clear, strategic roadmaps.',
        'Customized Methodologies – Tailored research frameworks designed specifically for your unique business goals.'
      ],
      highlight: '',
      footer: '',
      image: '/services/marketResearch/mr_why_us_1784183975741.png'
    },
    middleImage: '/services/marketResearch/image.png',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'ShoppingCart', subtitle: 'FMCG', description: 'Fast-moving consumer goods are everyday essential products that are sold quickly at affordable prices and used frequently.' },
        { icon: 'Award', subtitle: 'Education', description: 'The process of gaining knowledge, skills, values, and understanding to support personal growth and career development.' },
        { icon: 'Shield', subtitle: 'Insurance', description: 'A financial protection system that provides coverage against risks or losses in exchange for a regular premium.' },
        { icon: 'Car', subtitle: 'Travel & Tourism', description: 'The industry focused on travel planning, hospitality, and leisure experiences for domestic and international travelers.' },
        { icon: 'Landmark', subtitle: 'Banking & Finance', description: 'The sector that manages money, credit, investments, and financial services for individuals and businesses.' },
        { icon: 'Users', subtitle: 'Employment & HR', description: 'The function that manages recruitment, employee relations, payroll, and workforce development within an organization.' }
      ]
    },
    relatedServices: ['ratings-accreditations', 'digital-marketing', 'business-consultancy']
  },

  'ratings-accreditations': {
    id: 'ratings-accreditations',
    title: 'Ratings & Accreditations',
    hero: {
      title: 'Ratings & Accreditations',
      description: 'Prime time provides you best services for Ratings & Accreditations. Prime Time is devoted to quality advancement in the healthcare, education, business, and service sector by fostering global competencies and ushering in a new revolution in the areas of Accreditation, Ratings, Ranking, Research and Advisory services. We are a credible and impartial source of research and analysis by being committed to the key values of rigorous integrity, undeniable value and accessible presentation. Accreditation is a voluntary process that includes an external review of to provide quality.',
      image: '/services/ratingsAccredetion/Quality-Assessment.webp'
    },
    benefits: {
      title: 'Key Benefits of Ratings & Accreditations',
      cards: [
        {
          image: '/services/ratingsAccredetion/benifits/improves-customer-confidence.png',
          subtitle: 'Improves Customer Confidence & Conversion',
          description: 'Verified ratings influence buying decisions. Higher trust means higher conversions, more inquiries, and faster decision-making.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/ensures-quality-standardization.jpg',
          subtitle: 'Ensures Quality & Standardization',
          description: 'Accreditations confirm that your processes, services, or products follow national or international standards—ensuring consistency, safety, and quality.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/increases-market-visibility.png',
          subtitle: 'Increases Market Visibility',
          description: 'Accredited organizations are more likely to be listed in premium industry directories, media mentions, and partner programs — increasing exposure.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/supports-compliance-risk-management.png',
          subtitle: 'Supports Compliance & Risk Management',
          description: 'Maintaining accreditation ensures ongoing compliance with laws, regulations, and best practices, reducing operational risk.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/boosts-employee-morale.jpg',
          subtitle: 'Boosts Employee Morale & Talent Attraction',
          description: 'Certified and highly-rated companies attract better talent and motivate teams by validating their hard work and excellence.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/helps-in-partnerships-funding.png',
          subtitle: 'Helps in Partnerships & Funding',
          description: 'Government bodies, investors, corporate partners, and clients prefer accredited organizations for collaboration, funding, and recognition.'
        },
        {
          image: '/services/ratingsAccredetion/benifits/builds-long-term-customer-loyalty.png',
          subtitle: 'Builds Long-term Customer Loyalty',
          description: 'Accreditations create confidence, reinforcing customer trust and loyalty, leading to repeat business and strong referrals.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why Ratings & Accreditations Matter',
      description: 'In a crowded market, trust is your greatest currency. Accreditations act as a third-party validation of your excellence and reliability.',
      image: '/services/ratingsAccredetion/benifits/ensures-quality-standardization.jpg',
      points: [
        'Instantly establishes authority and industry leadership',
        'Fulfills strict regulatory and compliance requirements',
        'Creates a significant competitive advantage in bidding',
        'Reassures customers of consistent quality and safety'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Impartial & Credible – We are recognized globally for our rigorous, unbiased evaluation processes.',
        'Comprehensive Audits – Deep-dive assessments that go beyond surface-level compliance.',
        'Global Standards – We align our ratings with international benchmarks for maximum recognition.',
        'Advisory Support – We guide you through the improvement process, not just the final rating.'
      ],
      highlight: '',
      footer: '',
      image: '/services/ratingsAccredetion/Quality-Assessment.webp'
    },
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'Briefcase', subtitle: 'Corporate Business', description: 'Validating corporate governance, operational excellence, and financial stability.' },
        { icon: 'Heart', subtitle: 'Healthcare', description: 'Ensuring hospitals and clinics meet rigorous patient safety and care standards.' },
        { icon: 'Award', subtitle: 'Education', description: 'Certifying academic institutions for curriculum quality and infrastructure.' },
        { icon: 'Landmark', subtitle: 'Real Estate & Infrastructure', description: 'Certifying building quality, safety standards, and sustainable practices.' },
        { icon: 'MonitorSmartphone', subtitle: 'Technology & IT', description: 'Assessing data security, software compliance, and operational reliability.' },
        { icon: 'Globe', subtitle: 'NGOs & Social Services', description: 'Evaluating transparency, impact, and governance for social organizations.' }
      ]
    },
    relatedServices: ['brand-reputation-management', 'public-relation-management', 'market-research']
  },

  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    hero: {
      title: 'Digital Marketing',
      description: 'Today internet is not restricted only for sending emails or chatting. With the advent of new-age technologies and the ever-increasing dependence on internet, the importance of digital marketing and online marketing cannot be negated. If you are looking to get an unmistakable, wide and professional online presence — you are at the right place. Our team will help you build a friendly online identity. Depending upon your need and requirements we will develop a solution-oriented digital marketing strategy for your business that will enable you reach the targeted audience quickly.Our Digital Marketing Services include but are not limited to.',
      image: '/services/digitalMarketing/digital-marketing.webp'
    },
    benefits: {
      title: 'Our Features & Benefits',
      cards: [
        {
          image: '/services/digitalMarketing/benifits/seo-v2.jpg',
          subtitle: 'Search Engine Optimization (SEO)',
          description: 'SEO is the process of improving your website’s visibility on search engines like Google. By optimizing keywords, content, and technical factors, businesses can achieve higher rankings, increase organic traffic, and build long-term credibility.',
        },
        {
          image: '/services/digitalMarketing/benifits/smm-v2.jpg',
          subtitle: 'Social Media Marketing (SMM)',
          description: 'Social Media Marketing (SMM) involves using social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic.'
        },
        {
          image: '/services/digitalMarketing/benifits/ppc-v2.jpeg',
          subtitle: 'Pay-Per-Click Advertising (PPC)',
          description: 'PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It allows you to reach exactly who you want, when you want, using advanced demographic, psychographic, and behavioral targeting capabilities.'
        },
        {
          image: '/services/digitalMarketing/benifits/content-marketing.webp',
          subtitle: 'Content Marketing',
          description: 'Content marketing focuses on creating valuable and relevant content such as blogs, videos, eBooks, and infographics. The goal is to attract, educate, and convert users while strengthening brand authority.'
        },
        {
          image: '/services/digitalMarketing/benifits/email-marketing.png',
          subtitle: 'Email Marketing',
          description: 'Email remains one of the most effective digital marketing tools. It is used for nurturing leads, promoting products, sharing news, and maintaining customer relationships through personalized and automated campaigns.'
        },
        {
          image: '/services/digitalMarketing/benifits/affiliate-influencer-marketing.png',
          subtitle: 'Affiliate & Influencer Marketing',
          description: 'This strategy involves partnering with individuals or affiliates who promote a brand’s products or services in exchange for commission or collaboration benefits. Influencer marketing builds authentic connections and enhances brand trust.'
        },
        {
          image: '/services/digitalMarketing/benifits/mobile-marketing.webp',
          subtitle: 'Mobile Marketing',
          description: 'Mobile marketing focuses on reaching customers through smartphones via SMS marketing, app-based marketing, push notifications, and mobile-friendly ads. As mobile usage continues to rise, this strategy is essential for customer engagement.'
        },
        {
          image: '/services/digitalMarketing/benifits/video-marketing.jpg',
          subtitle: 'Video Marketing',
          description: 'Platforms like YouTube, Instagram Reels, TikTok, and Facebook support video marketing, which helps businesses communicate messages more effectively. Video content boosts engagement, improves retention, and strengthens emotional connection with audiences.'
        },
        {
          image: '/services/digitalMarketing/benifits/marketing-automation.webp',
          subtitle: 'Marketing Automation',
          description: 'Automation uses software and AI tools to streamline tasks like email sequences, lead scoring, ad optimization, and customer segmentation. It helps businesses save time while delivering personalized experiences at scale.'
        },
        {
          image: '/services/digitalMarketing/benifits/orm.jpg',
          subtitle: 'Online Reputation Management (ORM)',
          description: 'ORM helps monitor, improve, and protect a brand’s digital presence across search engines, reviews, and social platforms. Positive reputation builds trust and influences customer decisions.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why Digital Marketing Matters',
      description: 'The world is online. If your brand isn\'t visible where your customers spend their time, you are leaving revenue on the table.',
      image: '/services/digitalMarketing/benifits/seo-v2.jpg',
      points: [
        'Allows precise targeting of your ideal customer demographics',
        'Delivers measurable, data-driven ROI unlike traditional media',
        'Scales your business globally without physical limitations',
        'Builds a loyal community and direct relationship with consumers'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Data-Driven Strategies – Every campaign is backed by deep analytics and consumer behavior insights.',
        'Omnichannel Expertise – Seamless execution across search, social, email, and video platforms.',
        'Creative Excellence – We design campaigns that capture attention and drive immediate action.',
        'Transparent Reporting – Real-time dashboards so you always know exactly how your budget is performing.'
      ],
      highlight: '',
      footer: '',
      image: '/services/digitalMarketing/digital-marketing.webp'
    },
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'ShoppingCart', subtitle: 'E-Commerce', description: 'Driving traffic, abandoned cart recovery, and scaling digital storefront revenues.' },
        { icon: 'Target', subtitle: 'B2B Services', description: 'Generating high-quality qualified leads through targeted LinkedIn and search campaigns.' },
        { icon: 'Activity', subtitle: 'Startups', description: 'Rapid growth hacking and brand awareness for emerging disruptive technologies.' },
        { icon: 'Heart', subtitle: 'Healthcare', description: 'Driving patient acquisition and telemedicine brand awareness through targeted search and social campaigns.' },
        { icon: 'Award', subtitle: 'Education', description: 'Generating student enrollments and promoting digital courses through comprehensive content strategies.' },
        { icon: 'Landmark', subtitle: 'Real Estate', description: 'Generating high-intent property leads through localized SEO and social media advertising.' }
      ]
    },
    relatedServices: ['social-media-management', 'web-development', 'brand-reputation-management']
  },

  'brand-reputation-management': {
    id: 'brand-reputation-management',
    title: 'Brand Reputation Management',
    hero: {
      title: 'Brand & Reputation Management',
      description: 'Your reputation is your most powerful business asset. In a world driven by perception and digital visibility, a strong brand presence creates trust, credibility, and long-term customer loyalty. In today’s fast-paced digital world, your brand’s image is one of your greatest business assets. A strong, positive reputation builds trust, drives customer loyalty, and influences buying decisions. At Prime Time, we specialize in building, protecting, and elevating brand perception across digital and offline touchpoints.\n\nWhat We Do: We combine strategic communication, digital monitoring, and brand storytelling to ensure your brand reflects trust, credibility, and leadership in your industry.',
      image: '/services/brandReputation/hero.jpg'
    },
    benefits: {
      title: 'Key Benefits of Brand Reputation Management',
      cards: [
        {
          image: '/services/brandReputation/benift/brand-positioning.png',
          subtitle: 'Brand Positioning & Identity Development',
          description: 'Crafting a strong, consistent, and memorable brand identity that aligns with your values and business goals.'
        },
        {
          image: '/services/brandReputation/benift/online-reputation.png',
          subtitle: 'Online Reputation Monitoring',
          description: 'Tracking digital mentions, customer sentiment, and reviews across platforms to proactively safeguard your brand image.'
        },
        {
          image: '/services/brandReputation/benift/review-rating.webp',
          subtitle: 'Review & Rating Management',
          description: 'Encouraging positive reviews, responding professionally to feedback, and managing online ratings on Google, platforms, and industry forums.'
        },
        {
          image: '/services/brandReputation/benift/crisis-management.jpg',
          subtitle: 'Crisis Management & PR Response',
          description: 'Immediate and strategic response planning to mitigate negative press, misinformation, or reputation risks.'
        },
        {
          image: '/services/brandReputation/benift/content-messaging.jpg',
          subtitle: 'Content & Messaging Strategy',
          description: 'Creating impactful brand messaging, storytelling, press releases, and digital content that strengthens trust and authority.'
        },
        {
          image: '/services/brandReputation/benift/social-media-reputation.png',
          subtitle: 'Social Media Reputation Control',
          description: 'Monitoring social platforms, managing engagement, and nurturing a positive online voice.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why It Matters',
      description: 'A strong brand reputation is not just about visibility—it’s about credibility.',
      image: '/services/brandReputation/why-it-matters.jpg',
      points: [
        'Builds Customer Trust',
        'Strengthens Market Position',
        'Increases Sales & Conversions',
        'Attracts Investors & Partnerships',
        'Enhances Customer Loyalty'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: 'With deep industry experience, strategic insights, and advanced monitoring tools, we ensure your brand stays respected, relevant, and resilient—no matter the market challenges.',
      highlight: '✨ Protect Your Brand. Strengthen Your Identity. Lead with Trust.',
      footer: 'Connect with us to start building a reputation that speaks success.',
      image: '/services/brandReputation/why-choose-us.png'
    },
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'Users', subtitle: 'Public Figures', description: 'Managing the digital footprint and public perception of executives and celebrities.' },
        { icon: 'Landmark', subtitle: 'Financial Institutions', description: 'Maintaining trust and transparency in heavily regulated financial markets.' },
        { icon: 'Car', subtitle: 'Hospitality', description: 'Monitoring and responding to reviews across major travel and booking platforms.' },
        { icon: 'Heart', subtitle: 'Healthcare', description: 'Maintaining trust and transparency for medical professionals and healthcare providers.' },
        { icon: 'Briefcase', subtitle: 'Real Estate', description: 'Managing online reviews and digital presence for property developers and brokers.' },
        { icon: 'Rocket', subtitle: 'Tech & Startups', description: 'Building credibility and investor trust for emerging tech companies and founders.' }
      ]
    },
    relatedServices: ['public-relation-management', 'digital-marketing', 'business-consultancy']
  },

  'business-consultancy': {
    id: 'business-consultancy',
    title: 'Business Consultancy',
    hero: {
      title: 'Business Consultancy',
      description: 'Prime Time provides best Business Consultancy Services in India. Prime Time, along with its subsidiaries is a leading provider of advisory, representation and services for business focused on entering the market. We offer a comprehensive range of services for penetrating the market to seize opportunities. These include advisory services, product potential, entry strategy, partner evaluation, legal & regulatory compliance and due diligence. We provide strategic corporate solutions for better growth and prosperity of the business. Our consulting services are always carrying the latest industrial practice and current corporate ethics. We provide the most suitable, advantageous and cost effective tool for your business and service. Our profound industry and domain knowledge enable us to develop a blueprint and roadmap that will align your technology and business strategies, making you more competitive, more agile, and more profitable.',
      image: '/services/BuisnessConsultancy/business.jpg'
    },
    benefits: {
      title: 'Key Benefits of Business Consultancy',
      cards: [
        {
          image: '/services/BuisnessConsultancy/benifts/business-strategy.jpg',
          subtitle: 'Business Strategy & Planning',
          description: 'Business Model Development, Business Plan & Pitch Deck Creation, Market Analysis & Competitive Benchmarking, Feasibility Studies.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/startup-consulting.jpg',
          subtitle: 'Startup Consulting',
          description: 'Idea Validation, Investor Pitching Support, Funding & Grant Assistance, Go-to-Market Strategy.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/financial-advisory.webp',
          subtitle: 'Financial & Tax Advisory',
          description: 'Financial Planning & Forecasting, Budgeting & Cash Flow Management, Business Valuation, Accounting & Compliance Consulting.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/branding-marketing.jpg',
          subtitle: 'Branding & Marketing',
          description: 'Brand Identity Development, Digital Marketing Strategy, Lead Generation & Sales Funnel Setup, Customer Engagement & Positioning.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/business-operations.jpg',
          subtitle: 'Business Operations Improvement',
          description: 'SOP (Standard Operating Procedures) Implementation, HR & Talent Management Solutions, Productivity & Efficiency Optimization, Automation & Technology Integration.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/digital-transformation.webp',
          subtitle: 'Digital Transformation Consulting',
          description: 'ERP/CRM Implementation, IT Strategy & Tech Advisory, AI & Automation Solutions, E-commerce & Online Business Setup.'
        },
        {
          image: '/services/BuisnessConsultancy/benifts/corporate-training.png',
          subtitle: 'Corporate Training & Leadership Development',
          description: 'Leadership Mentorship, Sales & Marketing Training, Corporate Behaviour & Soft Skills, Performance Management Systems.'
        }
      ]
    },
    whyItMatters: {
      title: 'Client Results That Speak',
      description: 'Our impact is measured in real, tangible growth for the clients we serve.',
      image: '/services/BuisnessConsultancy/business.jpg',
      points: [
        '50% average revenue growth for SMEs within 12 months',
        '200+ startups launched successfully',
        '95% client retention rate'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Tailored Strategies – No generic plans. Everything is customized for your business.',
        'Experienced Consultants – Backed by experts from global industries.',
        'End-to-End Support – From planning and setup to execution and scaling.',
        'Proven Success Track Record – Trusted by startups, SMEs, and enterprises.'
      ],
      highlight: '',
      footer: '',
      image: '/services/BuisnessConsultancy/WHY-US01.png'
    },
    middleImage: '',
    sectors: {
      title: 'Industries We Serve',
      cards: [
        { icon: 'Heart', subtitle: 'Healthcare', description: 'Driving operational excellence and strategic growth in healthcare.' },
        { icon: 'Landmark', subtitle: 'Construction & Real Estate', description: 'Advising property developers on market entry and compliance.' },
        { icon: 'Award', subtitle: 'Education & EdTech', description: 'Helping institutions navigate digital transformation and expansion.' },
        { icon: 'ShoppingCart', subtitle: 'Retail & E-Commerce', description: 'Scaling online and offline operations for maximum profitability.' },
        { icon: 'Briefcase', subtitle: 'Corporate Services', description: 'Optimizing B2B service models and strategic partnerships.' },
        { icon: 'Car', subtitle: 'Hospitality & Food Business', description: 'Improving customer experience and operational efficiency.' },
        { icon: 'Rocket', subtitle: 'Startups & Technology', description: 'Validating ideas and securing funding for tech innovators.' },
        { icon: 'Activity', subtitle: 'Finance & Investment', description: 'Guiding wealth management and fintech strategies.' }
      ]
    },
    relatedServices: ['market-research', 'brand-reputation-management', 'digital-marketing']
  },

  'public-relation-management': {
    id: 'public-relation-management',
    title: 'Public Relation Management',
    hero: {
      title: 'Public Relation Management',
      description: 'In today\'s highly competitive market, a strong reputation is essential for survival and growth. At Prime Time, we understand that building a positive brand image directly drives business success. We act as your strategic communicators, engaging with the public and media to highlight the true quality of your services.\n\nThrough our extensive network of media partners across India, we deliver cost-effective and result-oriented PR strategies—from digital PR and press releases to crisis management and promotional events—ensuring your brand message is heard loud and clear.',
      image: '/services/publicRelations/pr_hero_1784181613020.webp'
    },
    benefits: {
      title: 'Key Benefits of PR Management',
      cards: [
        {
          image: '/services/publicRelations/pr_digital_1784181622759.png',
          subtitle: 'Digital Public Relations',
          description: 'Leveraging digital platforms, SEO, and online publications to strategically manage and elevate your brand presence in the digital space.'
        },
        {
          image: '/services/publicRelations/pr_social_1784181632592.png',
          subtitle: 'Social Media Public Relations',
          description: 'Cultivating strong relationships and engagement directly with your audience through powerful social media strategies and influencer collaborations.'
        },
        {
          image: '/services/publicRelations/pr_press_1784181642138.png',
          subtitle: 'Press Releases & Media Bytes',
          description: 'Crafting compelling press releases and securing high-impact placements in top-tier national and local media houses.'
        },
        {
          image: '/services/publicRelations/pr_employee_1784181681955.png',
          subtitle: 'Employee Communications',
          description: 'Building a strong internal culture and aligning your workforce with your corporate vision through effective internal communication strategies.'
        },
        {
          image: '/services/publicRelations/pr_event_1784181692689.png',
          subtitle: 'Product Launches & Promotional Events',
          description: 'Organizing and managing high-profile product launches and promotional events to generate maximum buzz and market impact.'
        },
        {
          image: '/services/publicRelations/pr_crisis_1784181652530.png',
          subtitle: 'Crisis Communication & Issues Management',
          description: 'Providing immediate, strategic response planning to mitigate negative press, address issues, and protect your long-term reputation.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why PR Matters',
      description: 'A strong public image isn\'t just about visibility; it\'s the foundation of your business viability in a cut-throat market.',
      image: '/services/publicRelations/pr_why_matters_1784181702925.png',
      points: [
        'Protects and enhances your brand image',
        'Builds long-term customer trust and loyalty',
        'Creates a competitive edge in saturated markets',
        'Ensures positive stakeholder relationships'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Elite Media Network – Deep-rooted alliances with national and local media houses across India.',
        'Strategic Communication – We craft messages that resonate and build trust.',
        'Agile & Responsive – Swift, result-oriented action during critical issues to protect your brand.',
        'Proven Results – A track record of elevating brands and shaping positive public perception.'
      ],
      highlight: '',
      footer: '',
      image: '/services/publicRelations/pr_why_us_1784181662063.png'
    },
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'Globe', subtitle: 'Government & NGOs', description: 'Managing public communications and policy awareness campaigns.' },
        { icon: 'Briefcase', subtitle: 'Corporate Enterprises', description: 'Handling investor relations, CSR announcements, and corporate storytelling.' },
        { icon: 'MonitorSmartphone', subtitle: 'Entertainment', description: 'Building hype, managing press tours, and handling crisis communications.' },
        { icon: 'Heart', subtitle: 'Healthcare', description: 'Navigating sensitive health communications and hospital PR.' },
        { icon: 'Activity', subtitle: 'Startups', description: 'Securing early media visibility and investor attention.' },
        { icon: 'Landmark', subtitle: 'Real Estate', description: 'Managing reputation and launch buzz for major property developers.' }
      ]
    },
    relatedServices: ['brand-reputation-management', 'social-media-management', 'business-consultancy']
  },

  'social-media-management': {
    id: 'social-media-management',
    title: 'Social Media Management',
    hero: {
      title: 'Social Media Management',
      description: 'Prime Time Media helps brands with different aspects of their social media management strategy by deploying result-driven services around social strategy, content production, community management, paid social advertising, influencer marketing, and more. They split their services into creative and production, community management, social media strategy, and social paid advertising.\n\nTransform Website Content Into High-Value Social Media Impact\nYour website is the digital identity of your business—but without the right strategy, valuable content can go unnoticed. Our Social Media Management service turns your website content into engaging, high-performing social media posts designed to drive traffic, boost brand authority, and convert audience engagement into measurable results.',
      image: '/services/socialMediaManagement/smm-hero.jpg'
    },
    benefits: {
      title: 'Key Benefits of Social Media Management',
      cards: [
        {
          image: '/services/socialMediaManagement/benefits/infographics.jpg',
          subtitle: 'Infographics',
          description: 'Boost brand awareness using informative infographics. More shares, better understanding, stronger reach.'
        },
        {
          image: '/services/socialMediaManagement/benefits/reels.webp',
          subtitle: 'Reels & short videos',
          description: 'Boost your brand with engaging reels and short videos. Grab attention, increase reach, and drive results.'
        },
        {
          image: '/services/socialMediaManagement/benefits/carousel-posts.webp',
          subtitle: 'Carousel posts',
          description: 'Share your story step-by-step with creative carousel posts. Increase engagement and keep users scrolling.'
        },
        {
          image: '/services/socialMediaManagement/benefits/testimonial.webp',
          subtitle: 'Testimonial & review graphics',
          description: 'Build trust with impactful testimonial and review graphics. Show real feedback that strengthens your brand credibility.'
        },
        {
          image: '/services/socialMediaManagement/benefits/offers.png',
          subtitle: 'Offers & announcement creatives',
          description: 'Make your announcements stand out with creative designs. Perfect for offers, launches, and updates.'
        }
      ]
    },
    whyItMatters: {
      title: 'SEO & Hashtag Intelligence',
      description: 'All posts are optimized with keywords, trending hashtags, and CTAs to improve reach and search visibility.',
      image: '/services/socialMediaManagement/results.jpg',
      points: [
        'Increase website traffic',
        'Strengthen brand positioning',
        'Improve engagement & follower growth',
        'Build trust and digital credibility',
        'Convert views into leads and inquiries'
      ]
    },
    whyChooseUs: {
      title: 'What We Do',
      description: 'Content Extraction & Optimization',
      highlight: 'We review blogs, service pages, case studies, and product pages from your website and transform them into compelling posts tailored for multiple platforms.',
      footer: '',
      image: '/services/socialMediaManagement/what-we-do.jpg'
    },
    extraSections: [
      {
        title: 'Monthly Deliverables Include',
        description: '',
        points: [
          'Content calendar & posting schedule',
          '12–30 branded content posts',
          'Captions + Hashtags + Keyword optimization',
          'Graphic design and video editing',
          'Reposting of website blogs and updates',
          'Community engagement (likes, replies, inbox handling)',
          'Monthly analytics & performance reporting'
        ],
        image: '/services/socialMediaManagement/deliverables.jpg'
      },
      {
        title: 'Why This Works',
        description: 'Most brands only post content—we post with purpose. By aligning your website content with your social media storytelling, we increase your visibility and consistency across platforms, ensuring that every piece of content works toward your business goals.',
        image: '/services/socialMediaManagement/social-media.png'
      },
      {
        title: 'Ideal For',
        description: '',
        points: [
          'Businesses with active websites',
          'Brands with blogs or service pages',
          'Companies needing consistent branding',
          'Organizations wanting to scale digital presence'
        ],
        image: '/services/socialMediaManagement/what-we-do.jpg'
      },
      {
        title: 'Results You Can Expect',
        description: '',
        points: [
          'Higher website visits & audience engagement',
          'More leads and inquiries',
          'Strong brand identity and recognition'
        ],
        image: '/services/socialMediaManagement/results.jpg'
      }
    ],
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'ShoppingCart', subtitle: 'Retail & D2C', description: 'Driving direct sales through Instagram/TikTok shops and influencer collaborations.' },
        { icon: 'Car', subtitle: 'Lifestyle & Travel', description: 'Showcasing visually driven experiences to inspire bookings and visits.' },
        { icon: 'Briefcase', subtitle: 'B2B Corporate', description: 'Building authoritative thought leadership and lead generation on LinkedIn.' },
        { icon: 'Heart', subtitle: 'Healthcare & Wellness', description: 'Building patient trust through educational content and community management.' },
        { icon: 'MonitorSmartphone', subtitle: 'Tech & SaaS', description: 'Creating engaging product demos, feature highlights, and user communities.' },
        { icon: 'Award', subtitle: 'Education', description: 'Attracting students and building alumni networks through interactive campaigns.' }
      ]
    },
    relatedServices: ['digital-marketing', 'public-relation-management', 'web-development']
  },

  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    hero: {
      title: 'Web Development',
      description: 'Prime Time Media provide expert web application development and web design services to our clients. Appnovation offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. With up to 85% of consumers visiting company’s or service provider’s website before making a purchase, more and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.',
      image: '/services/webDevelopment/web-hero.jpg'
    },
    benefits: {
      title: 'Key Benefits of Web Development',
      cards: [
        {
          image: '/services/webDevelopment/benefits/website-development.jpg',
          subtitle: 'Website Development',
          description: 'Custom-coded websites built using the latest technologies with clean architecture and fast loading speed.'
        },
        {
          image: '/services/webDevelopment/benefits/web-app.webp',
          subtitle: 'Web Application Development',
          description: 'Highly scalable and secure web apps tailored to business workflows.'
        },
        {
          image: '/services/webDevelopment/benefits/ecommerce.webp',
          subtitle: 'E-Commerce Development',
          description: 'We build high-conversion online stores on platforms like Shopify, WooCommerce, Magento, and custom frameworks.'
        },
        {
          image: '/services/webDevelopment/benefits/uiux.jpg',
          subtitle: 'UI/UX Design',
          description: 'We design experiences that are visually appealing, intuitive, and customer-centric.'
        },
        {
          image: '/services/webDevelopment/benefits/maintenance.webp',
          subtitle: 'Website Maintenance & Support',
          description: 'Keep your website secure, updated, backed-up, and fully optimized.'
        },
        {
          image: '/services/webDevelopment/benefits/seo-v2.jpg',
          subtitle: 'SEO & Digital Growth',
          description: 'Technical SEO, speed optimization, on-page SEO, keyword mapping & analytics setup.'
        }
      ]
    },
    whyItMatters: {
      title: 'Why It Matters',
      description: 'Your website is your digital storefront. Without a professional, high-performance website, you risk losing credibility, visibility, and conversions in an increasingly digital-first world.',
      image: '/services/webDevelopment/web_why_matters_1784183322101.png',
      points: [
        'Establishes instant brand credibility and trust',
        'Functions as a 24/7 sales and lead generation engine',
        'Improves visibility through organic search (SEO)',
        'Enhances customer experience and journey'
      ]
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      description: '',
      points: [
        'Cutting-Edge Technology – We build with the latest, scalable frameworks (React, Node.js, etc.).',
        'Custom Solutions – No cookie-cutter templates. Everything is tailored to your business.',
        'Performance Obsessed – We prioritize speed, security, and seamless mobile responsiveness.',
        'End-to-End Delivery – From UI/UX design to final launch and ongoing maintenance.'
      ],
      highlight: '',
      footer: '',
      image: '/services/webDevelopment/web_why_us_1784183313031.png'
    },
    extraSections: [
      {
        title: 'Website Development Includes',
        description: '',
        points: [
          'Custom UI/UX Design',
          'Responsive Layout',
          'SEO & Speed Optimization',
          'Content Setup'
        ],
        image: '/services/webDevelopment/benefits/website-development.jpg'
      },
      {
        title: 'Web Application Tech Stack',
        description: '',
        points: [
          'React & Modern Frontend Frameworks',
          'Cloud & DevOps',
          'Mobile App Development',
          'AI & Machine Learning',
          'AI-based automation & more'
        ],
        image: '/services/webDevelopment/benefits/web-app.webp'
      },
      {
        title: 'E-Commerce Features',
        description: '',
        points: [
          'Payment Gateway Integration',
          'Inventory & Order Management',
          'User Dashboard & Analytics',
          'Secure Checkout Experiences'
        ],
        image: '/services/webDevelopment/benefits/ecommerce.webp'
      }
    ],
    middleImage: '',
    sectors: {
      title: 'Our Sectors',
      cards: [
        { icon: 'ShoppingCart', subtitle: 'E-Commerce Platforms', description: 'Building highly secure, scalable online stores with complex inventory systems.' },
        { icon: 'Heart', subtitle: 'Healthcare Portals', description: 'Developing HIPAA-compliant patient booking and telemedicine platforms.' },
        { icon: 'MonitorSmartphone', subtitle: 'SaaS Platforms', description: 'Creating robust frontend architectures for complex software-as-a-service products.' },
        { icon: 'Briefcase', subtitle: 'Corporate & B2B', description: 'Developing professional portals, lead-gen websites, and secure intranets.' },
        { icon: 'Activity', subtitle: 'Startups & Technology', description: 'Building MVPs, scalable web applications, and interactive dashboards.' },
        { icon: 'Award', subtitle: 'Education & eLearning', description: 'Crafting learning management systems (LMS) and engaging student portals.' }
      ]
    },
    relatedServices: ['digital-marketing', 'social-media-management', 'market-research']
  }
};

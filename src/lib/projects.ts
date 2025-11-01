export type Project = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    siteLink: string;
    };
    
    export const PROJECTS = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ecommerce: [
    {
    title: "T29 Customs",
    description: "This is an e-commerce platform for custom camper van roofs and accessories for retail and trade customers.",
    image: "/ecommerce-t29.png",
    tech: ["WordPress", "WooCommerce", "Impreza Theme", "Elementor", "Custom PHP Development", "SEO Optimization", "Responsive Design"],
    siteLink: "https://t29customs.uk/"
    },
    {
    title: "MughalBaba",
    description: "This is an e-commerce platform offering curated products in jewelry, home decor, and fashion accessories.",
    image: "/ecommerce-mughalBaba.png",
    tech: ["WordPress", "WooCommerce", "Elementor", "E-Commerce Strategy", "Dokan Marketplace", "SEO Optimization", "Analytics Integration"],
    siteLink: "https://mughalbaba.com/"
    },
    {
    title: "Candle Delirium",
    description: "This is an e-commerce platform offering a curated selection of luxury candles and home fragrances.",
    image: "/ecommerce-candle.png",
    tech: ["WordPress", "WooCommerce", "Dokan Multi-Vendor", "Elementor", "SEO Optimization", "Analytics Setup","E-Commerce Functionality", "Responsive Design"],
    siteLink: "https://www.candledelirium.com"
    },
    {
    title: "Betterbodyfoods",
    description: "This is an online store offering a wide range of health-focused products, including superfood blends, plant-based protein, oils, sweeteners, and snacks.",
    image: "/ecommerce-bodyfood.png",
    tech: ["WordPress", "WooCommerce", "Elementor", "Custom Creative Design", "SEO Optimization", "Analytics Integration", "Mobile-Responsive Layout"],
    siteLink: "https://betterbodyfoods.com/"
    },
    // {
    // title: "Groomarts",
    // description: "This is an online store for professional dog grooming products, including scissors, shampoos, brushes, and accessories.",
    // image: "/ecommerce-groomarts.png",
    // tech: ["WordPress", "WooCommerce", "Custom E-Commerce Setup", "Email Marketing (Mailchimp)", "Sentry Error Tracking", "SEO Optimization", "Analytics Integration", "Responsive Design"],
    // siteLink: "https://groomarts.shop/"
    // },
    {
    title: "Elevationize",
    description: "This is a platform offering stylish TV lift beds and settees that blend aesthetics with functionality",
    image: "/ecommerce-furniture.png",
    tech:["WordPress", "WooCommerce", "SEO Optimization", "Email Marketing (Mailchimp)", "Analytics Integration",  "Performance Monitoring", "Responsive Design"],
    siteLink: "https://elevationize.com/"
    },
    {
    title: "Collectible",
    description: "This is an online store selling rare and vintage collectibles, including diecast cars, Pokémon cards, and vintage toys.",
    image: "/ecommerce-nowandthen.png",
    tech: ["WordPress", "WooCommerce", "Elementor","E-Commerce Checkout Flow", "SEO Optimization",  "PayPal Integration", "Google Pay Integration"],
    siteLink: "https://www.nowandthencollectibles.com/"
    }
    ],

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    saas: [
    {
    title: "SocialTalent",
    description: "This is an AI-powered training platform for recruiting teams, offering courses and tools to improve hiring and decision-making.",
    image: "/saas-socialtalent.png",
    tech: ["WordPress", "Elementor",  "Yoast SEO", "SaaS Platform Architecture","Creative UI Design", "Performance Optimization", "Responsive Design"],
    siteLink: "https://www.socialtalent.com/"
    },
    {
    title: "Noda",
    description: "This is a telehealth platform offering remote autism assessments for children via video and online consultations.",
    image: "/saas-noda.png",
    tech: ["WordPress", "Divi", "Telehealth Integration", "Video Conferencing", "Marketing Automation", "SEO Optimization", "Secure Contact Forms"],
    siteLink: "https://remoteautismdiagnosis.com/"
    },
    {
    title: "AlphaCropAI",
    description: "This is a web-based platform that lets users chat with multiple AI models under a single subscription.",
    image: "/saas-alphacrop.png",
    tech:["WordPress", "Elementor", "AI Model Integration", "HTTPS & HSTS Security", "Creative UX Design", "Performance Optimization", "Analytics Integration", "Responsive Design"],
    siteLink: "https://alphacorp.ai/"
    },
    {
    title: "MyDateJar",
    description: "This is a platform offering AI-curated date and outing ideas personalized to users’ preferences.",
    image: "/sass-mydatejar.png",
    tech: ["WordPress", "Divi", "AI-Driven Personalization", "Marketing Automation", "Responsive Design", "Analytics Integration", "Performance Optimization"],
    siteLink: "https://mydatejar.com/"
    },
    {
    title: "GuidePlan",
    description: "This is a financial wellness SaaS helping employers optimize 401(k) plans, manage debt, and build employee savings.",
    image: "/saas-guideplan.png",
    tech:["WordPress", "HubSpot CRM", "HubSpot Live Chat","SaaS Implementation", "Analytics Integration", "Secure Forms", "Responsive Design"],
    siteLink: "https://guideplan.ai/"
    },
    {
    title: "LivePropFirmTrading",
    description: "This is a trading platform that lets users participate in funded trading programs, manage virtual accounts, and track performance online.",
    image: "/saas-liveprop.png",
    tech: ["WordPress", "Elementor", "Stripe Payments", "Hostinger VPS", "Trading Platform Integration", "Analytics Tracking", "Secure Checkout"],
    siteLink: "https://livepropfirmtrading.com/"
    }
    ],
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    informational: [
    {
    title: "UniTravel",
    description: "This is a demo travel platform built with the Unitravel theme, showcasing travel itineraries and booking features.",
    image: "/informational-unitravel.png",
    tech: ["WordPress", "Elementor", "API Integration", "Travel & Booking System", "Google Maps", "SEO Optimization", "Responsive Design"],
    siteLink: "https://unitravel.ancorathemes.com/"
    },
    // {
    // title: "Advantage1st",
    // description: "This is a lending site, offering mortgage, refinancing, and home equity solutions while guiding prospective borrowers to request quotes or apply online.",
    // image: "/informational-advantagefirst.png",
    // tech:  ["WordPress", "Elementor", "Lead Generation System", "SEO Optimization", "Marketing Automation", "Google Analytics", "Contact Forms", "Performance Optimization", "Responsive Design"],
    // siteLink: "https://advantage1st.com/"
    // },
    {
    title: "Byrnecut",
    description: "This is a corporate website for Byrnecut, an Australian underground contract mining and mining-services group.",
    image: "/informational-byrnecut.png",
    tech: ["WordPress", "Elementor", "SEO Optimization", "Contact Form Integration", "Analytics Tracking", "Performance Optimization"],
    siteLink: "https://www.byrnecut.com/"
    },
    {
    title: "Arise WakeUp",
    description: "This is a platform offering faith-based inspiration and practical tools to help individuals live with purpose and intentionality.",
    image: "/informational-arise.png",
    tech:["WordPress", "Elementor", "API Integration", "SEO Optimization", "Email Newsletter Automation", "Responsive Design", "Performance Optimization"],
    siteLink: "https://arisewakeup.com/"
    },
    // {
    // title: "Immobilien GmbH",
    // description: "This is a website of IHL Immobilien, a Tyrol-based property developer specializing in residential condominiums.",
    // image: "/informational-ihl.png",
    // tech: ["WordPress", "Elementor", "Real Estate API Integration", "Google Maps Integration", "Property Listing System", "SEO Optimization", "Marketing Automation", "Responsive Design", "Performance Optimization"],
    // siteLink: "https://ihlimmobilien.com/"
    // },
    {
    title: "Vale",
    description: "This is a corporate website for Vale S.A., a global mining and metals company headquartered",
    image: "/informational-vale.png",
    tech: ["WordPress", "Elementor", "API Integration", "Corporate SEO", "Interactive Maps", "Property Showcase", "Responsive Design"],
    siteLink: "https://vale.com/"
    },
    {
    title: "Minds For Health",
    description: "This is a website of Minds For Health, offering mental, behavioral, and developmental services for children and young adults.",
    image: "/informational-minds.png",
    tech: ["WordPress", "Elementor", "Marketing Automation", "Healthcare Services Integration", "Google Analytics", "SEO Optimization", "Responsive Design"],
    siteLink: "https://mindsforhealth.com/"
    },
    {
    title: "Upright",
    description: "This is a website that provides stage, truss, LED walls, audio-visual equipment, and other event production rentals and services.",
    image: "/informational-upright.png",
    tech:["WordPress", "WooCommerce", "Elementor", "Astra Theme", "Event Booking System", "SEO Optimization", "Google Maps Integration"],
    siteLink: "https://upright-productions.com/"
    }
    ],
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    leadGen: [
    {
    title: "Wolf Creek",
    description: "This is a website of 1224 Wolf Creek, a luxury vacation home in Big Bear Lake.",
    image: "/lead-wolf.png",
    tech: ["WordPress", "Divi", "Lead Generation Funnels", "Google Maps Integration", "SEO Optimization", "Analytics Tracking", "Caching Optimization"],
    siteLink: "https://www.1224wolfcreek.com/"
    },
    // {
    // title: "Pipe Patrol",
    // description: "This is a website promoting plumbing services and encouraging customers to request quotes or book services online.",
    // image: "/lead-pipepatrol.png",
    // tech:  ["WordPress", "Hostinger Hosting", "Lead Generation Funnel", "Marketing Automation", "SEO Optimization", "Google Analytics", "Email Marketing (Mailchimp)", "Contact Forms", "Landing Page Design", "Responsive Design"],
    // siteLink: "https://pipepatrolplumbing.com/"
    // },
    {title: "Epicurean",
    description: "This is the website of Epicurean Group Co., a full-service catering and event hospitality provider.",
    image: "/lead-epicurean.png",
    tech: ["WordPress", "Hostinger", "Lead Generation Strategy", "Marketing Automation", "SEO Optimization","Email Marketing", "Landing Page Design"],
    siteLink: "https://epicureangroupco.com/"
    },
    {
    title: "Stephanie Slays Hair",
    description: "This is a website of Stephanie Slays Hair, a Houston-based stylist specializing in cut, color, and extension services.",
    image: "/lead-hair.png",
    tech:["WordPress", "Hostinger", "Lead Generation", "Appointment Booking System", "Email Newsletter", "Social Media Integration", "SEO Optimization"],
    siteLink: "https://stephanieslayshair.com/"
    },
    {
    title: "Dream Wedding with Travel",
    description: "This is a website of Travel With Class LLC, a boutique agency for destination weddings, honeymoons, and luxury travel.",
    image: "/lead-wedding.png",
    tech: ["WordPress", "Hostinger", "Lead Generation Website", "Booking & Inquiry Forms", "Social Media Widgets", "SEO Optimization","Analytics Integration"],
    siteLink: "https://travelwithclassllc.com/"
    },
    {
    title: "Baked Goods",
    description: "This is a website that shares personal stories and reflections while promoting and selling handmade baked goods like toffee, pound cakes, and gift boxes.",
    image: "/lead-bakedgoods.png",
    tech:["WordPress", "Elementor", "Landing Page Design", "Email Marketing", "E-Commerce Integration", "SEO Optimization", "Social Media Integration"],
    siteLink: "https://beautifulonpurpose.com/"
    },
    {
    title: "MAADI",
    description: "This is an official site of MAADI Group, a Canadian firm building custom aluminum structures.",
    image: "/lead-maadi.png",
    tech:["WordPress", "WP Engine Hosting", "Project Showcase", "Marketing Automation", "SEO Optimization", "Google Analytics", "Responsive Design", "Performance Optimization"],
    siteLink: "https://maadigroup.com/"
    }
    ]
    } as const;
    
    export type CategoryKey = keyof typeof PROJECTS;
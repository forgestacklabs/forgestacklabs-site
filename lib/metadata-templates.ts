// Metadata Best Practices for Different Page Types
// Use these templates for consistent SEO across your site

// ============================================
// HOMEPAGE - Maximum SEO Impact
// ============================================
export const homepageMetadata = {
  title: "ForgeStack Labs | Forge Stack Labs - Premium Software Development & Design Talent",
  description: "We design, engineer, and scale reliable digital products for modern businesses—focused on performance, security, and long-term value.",
  keywords: [
    "ForgeStack Labs",
    "Forge Stack Labs", 
    "ForgeStack",
    "software development",
    "web development",
    "mobile app development",
    "design talent",
    "developer opportunities"
  ],
  openGraph: {
    title: "ForgeStack Labs | Connect with Top Tech Talent",
    description: "ForgeStack Labs connects verified developers and designers with companies that need skilled talent.",
    url: "https://forgestacklabs.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

// ============================================
// ABOUT PAGE - Brand Recognition
// ============================================
export const aboutMetadata = {
  title: "About Forge Stack Labs (ForgeStack Labs) - Our Story & Mission",
  description: "Learn about Forge Stack Labs, also known as ForgeStack Labs. We connect skilled developers and designers with companies seeking premium talent. Founded in 2024 with a vision for precision engineering.",
  keywords: [
    "about ForgeStack Labs",
    "about Forge Stack Labs",
    "ForgeStack company",
    "software development company",
    "tech talent platform"
  ],
  openGraph: {
    title: "About Forge Stack Labs | Our Mission",
    description: "Discover how Forge Stack Labs (ForgeStack) is revolutionizing tech talent connections.",
  },
}

// ============================================
// SERVICES PAGE - Keyword Rich
// ============================================
export const servicesMetadata = {
  title: "Services - ForgeStack Labs | Software Development, Web & Mobile Apps",
  description: "ForgeStack Labs offers premium software development services: custom web applications, mobile app development, digital product design, and technology consulting. Expert developers and designers ready to build your vision.",
  keywords: [
    "software development services",
    "web development",
    "mobile app development",
    "custom software",
    "digital product design",
    "technology consulting",
    "ForgeStack services"
  ],
  openGraph: {
    title: "Our Services | ForgeStack Labs",
    description: "Premium software development, web apps, mobile apps, and digital products.",
  },
}

// ============================================
// CONTACT PAGE - Local SEO
// ============================================
export const contactMetadata = {
  title: "Contact ForgeStack Labs | Get In Touch with Our Team",
  description: "Get in touch with ForgeStack Labs (Forge Stack Labs). Whether you're seeking tech talent or looking for opportunities, we're here to help. Email, phone, or fill out our contact form.",
  keywords: [
    "contact ForgeStack Labs",
    "contact Forge Stack",
    "hire developers",
    "hire designers",
    "software development inquiry"
  ],
  openGraph: {
    title: "Contact Us | ForgeStack Labs",
    description: "Ready to connect? Reach out to ForgeStack Labs today.",
  },
}

// ============================================
// BLOG/ARTICLES - Content Marketing
// ============================================
export const blogPostMetadata = (post: {
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  tags: string[];
}) => ({
  title: `${post.title} | ForgeStack Labs Blog`,
  description: post.excerpt,
  keywords: [...post.tags, "ForgeStack Labs", "Forge Stack", "tech blog"],
  authors: [{ name: post.author }],
  publishedTime: post.publishedDate,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    type: "article",
    publishedTime: post.publishedDate,
    authors: [post.author],
  },
  // Article schema
  articleSchema: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ForgeStack Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://forgestacklabs.com/logo.png"
      }
    },
    "datePublished": post.publishedDate,
  }
})

// ============================================
// CAREERS/OPPORTUNITIES PAGE
// ============================================
export const careersMetadata = {
  title: "Careers & Opportunities at ForgeStack Labs | Join Our Team",
  description: "Join ForgeStack Labs (Forge Stack Labs). We're looking for talented developers, designers, and engineers. Explore opportunities to grow your career with a team that values precision and innovation.",
  keywords: [
    "ForgeStack Labs careers",
    "Forge Stack jobs",
    "developer opportunities",
    "designer jobs",
    "tech careers",
    "software engineer jobs"
  ],
  openGraph: {
    title: "Join ForgeStack Labs | Careers",
    description: "Build your career with ForgeStack Labs. Opportunities for developers and designers.",
  },
  // JobPosting schema
  jobPostingSchema: {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Software Developer",
    "description": "Join our team...",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ForgeStack Labs",
      "sameAs": "https://forgestacklabs.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "Worldwide"
      }
    }
  }
}

// ============================================
// PORTFOLIO/WORK PAGE
// ============================================
export const portfolioMetadata = {
  title: "Our Work - ForgeStack Labs Portfolio | Case Studies & Projects",
  description: "Explore ForgeStack Labs' portfolio of premium software projects. See how we've helped companies build exceptional digital products with precision engineering and innovative design.",
  keywords: [
    "ForgeStack portfolio",
    "software development case studies",
    "web development projects",
    "mobile app examples",
    "digital product design"
  ],
  openGraph: {
    title: "Our Work | ForgeStack Labs Portfolio",
    description: "Premium software projects built with precision.",
  },
}

// ============================================
// PRICING PAGE
// ============================================
export const pricingMetadata = {
  title: "Pricing - ForgeStack Labs | Software Development & Design Rates",
  description: "Transparent pricing for ForgeStack Labs services. From custom software development to design talent placement. Get a quote for your project or learn about our flexible engagement models.",
  keywords: [
    "software development pricing",
    "web development cost",
    "mobile app development rates",
    "ForgeStack Labs pricing",
    "hire developer cost"
  ],
  openGraph: {
    title: "Pricing | ForgeStack Labs",
    description: "Transparent pricing for premium software development services.",
  },
}

// ============================================
// TIPS FOR IMPLEMENTATION
// ============================================

/*
1. TITLE TAG BEST PRACTICES:
   - Include primary keyword at the beginning
   - Keep under 60 characters
   - Use brand name variations naturally
   - Make it compelling for clicks

2. DESCRIPTION BEST PRACTICES:
   - 150-160 characters is ideal
   - Include primary and secondary keywords
   - Write for humans first, search engines second
   - Include call-to-action when appropriate
   - Use both "ForgeStack" and "Forge Stack" naturally

3. KEYWORD STRATEGY:
   - Research with Google Keyword Planner
   - Mix high-volume and long-tail keywords
   - Include brand name variations in every page
   - Don't keyword stuff - keep it natural

4. OPEN GRAPH:
   - Always include unique OG image per page type
   - Ensure images are 1200x630px
   - Write compelling OG descriptions
   - Set correct OG type (website, article, etc.)

5. SCHEMA MARKUP:
   - Add relevant schema for each page type
   - Use Article schema for blog posts
   - Use JobPosting for careers page
   - Use Product schema if selling services/products
   - Validate with schema.org validator

6. INTERNAL LINKING:
   - Link between related pages
   - Use descriptive anchor text
   - Include brand name variations in links
   - Create topic clusters

7. BRAND NAME USAGE:
   - Use "ForgeStack Labs" most prominently
   - Naturally include "Forge Stack Labs" throughout
   - Mention both variations in first paragraph
   - Don't force it - keep it readable
*/
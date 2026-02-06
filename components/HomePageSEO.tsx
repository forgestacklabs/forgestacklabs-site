import React from 'react';

export default function HomePageSEO() {
  return (
    <>
      {/* Hidden but crawlable H1 for search engines */}
      <h1 className="sr-only">
        ForgeStack Labs - Forge Stack Labs - Premium Software Development and Design Talent
      </h1>
      
      {/* Semantic HTML structure for better SEO */}
      <article itemScope itemType="https://schema.org/Organization">
        {/* Company name variations for search engines */}
        <meta itemProp="name" content="ForgeStack Labs" />
        <meta itemProp="alternateName" content="Forge Stack Labs" />
        <meta itemProp="alternateName" content="ForgeStack" />
        <meta itemProp="url" content="https://forgestacklabs.com" />
        
        {/* Main description */}
        <p itemProp="description" className="sr-only">
          ForgeStack Labs connects verified developers and designers with companies 
          that need skilled talent. Find real opportunities, grow your career. 
          We build software systems and digital products with precision and long-term intent.
        </p>
        
        {/* Keywords naturally embedded */}
        <div className="sr-only">
          <span itemProp="knowsAbout">software development</span>
          <span itemProp="knowsAbout">web development</span>
          <span itemProp="knowsAbout">mobile app development</span>
          <span itemProp="knowsAbout">digital product design</span>
          <span itemProp="knowsAbout">custom software solutions</span>
        </div>
      </article>
    </>
  );
}
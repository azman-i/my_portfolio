import React, { useState } from 'react';
import { Award, GraduationCap, FileText, Building } from 'lucide-react';

function RecentNewsSection({ newsItems = [] }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Map icon types to components
  const getIcon = (iconType) => {
    switch(iconType) {
      case 'award':
        return <Award size={20} color="#F59E0B" />;
      case 'education':
        return <GraduationCap size={20} color="#10B981" />;
      case 'university':
        return <Building size={20} color="#3B82F6" />;
      case 'publication':
        return <FileText size={20} color="#8B5CF6" />;
      default:
        return <Award size={20} color="#6B7280" />;
    }
  };

  // Always show the first item or nothing if no items
  const visibleItems = expanded ? (newsItems || []) : (newsItems || []).slice(0, 2);

  return (
    <section id="recent-news">
      <h2 className="section-title">Recent News</h2>
      <ul className="news-list">
        {visibleItems.map((item, index) => (
          <li key={index} className="news-item">
            <span className="news-icon">{getIcon(item.iconType)}</span>
            <span className="news-content">
              <span className="news-date">{item.date}:</span> {item.content}
            </span>
          </li>
        ))}
      </ul>
      
      {newsItems && newsItems.length > 1 && (
        <button 
          onClick={toggleExpand} 
          className="see-more-button"
        >
          {expanded ? "See less" : "See more"}
          <svg 
            className={`chevron-icon ${expanded ? 'rotated' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </section>
  );
}

export default RecentNewsSection;
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Building, 
  Award, 
  School 
} from 'lucide-react';
function RecentNewsSection({ newsItems = [] }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Map icon types to components
  const getIcon = (iconType) => {
    switch(iconType) {
      case 'Award':
        return <Award size={20} color="#F59E0B" />; // Amber
      case 'Graduation':
        return <GraduationCap size={20} color="#10B981" />; // Emerald
      case 'university':
        return <Building size={20} color="#3B82F6" />; // Blue
      
      case 'Job':
        return <Briefcase size={20} color="#EF4444" />; // Red
      case 'Promotion':
        return <TrendingUp size={20} color="#EC4899" />; // Pink
      case 'PhD':
        return <School size={20} color="#6366F1" />; // Indigo
      // case 'achievement':
      //   return <Medal size={20} color="#F97316" />; // Orange
      // case 'research':
      //   return <BookOpen size={20} color="#14B8A6" />; // Teal  
      // case 'honor':
      //   return <Star size={20} color="#FBBF24" />; // Yellow
      // case 'highlight':
      //   return <Flame size={20} color="#DC2626" />; // Red
      default:
        return <Award size={20} color="#6B7280" />; // Gray
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
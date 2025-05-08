import React from 'react';

function Biography({ paragraphs }) {
  const formatText = (text) => {
    // Define university links with their lengths for proper matching
    const universityLinks = [
      {
        text: 'Dr Shibbir Ahmed',
        url: 'https://shibbirtanvin.github.io/',
        class: 'university-link shibbir'
      },
      {
        text: 'Bangladesh University of Engineering and Technology',
        url: 'https://www.buet.ac.bd/',
        class: 'university-link buet'
      },
      {
        text: 'Computer Science and Engineering',
        url: 'https://cse.buet.ac.bd/',
        class: 'university-link cse'
      },
      {
        text: 'Texas State University',
        url: 'https://www.txstate.edu/',
        class: 'university-link txstate'
      },
      {
        text: 'Computer Science',
        url: 'https://www.txstate.edu/cs/',
        class: 'university-link cs'
      }
    ].sort((a, b) => b.text.length - a.text.length); // Sort by length to match longer phrases first

    const words = text.split(' ');
    const result = [];
    let i = 0;

    while (i < words.length) {
      let matched = false;

      // Try to match each university link
      for (const link of universityLinks) {
        const linkWords = link.text.split(' ');
        const remainingWords = words.slice(i, i + linkWords.length).join(' ');

        if (remainingWords === link.text) {
          result.push(
            <a 
              key={i}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={link.class}
            >
              {link.text}
            </a>
          );
          i += linkWords.length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        result.push(words[i] + (i < words.length - 1 ? ' ' : ''));
        i++;
      }
    }

    return result;
  };

  return (
    <section id="biography" className="biography">
      <h2 className="section-title">Biography</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{formatText(paragraph)}</p>
      ))}
    </section>
  );
}

export default Biography;
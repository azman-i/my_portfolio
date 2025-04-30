// App.js - Main component
import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Footer from './components/Footer';
import RecentNewsSection from './components/RecentNews';

function App() {
  // Portfolio data - you can later move this to separate files or fetch from an API
  const portfolioData = {
    profile: {
      name: "Khairul Azman",
      title: "Incoming PhD Student",
      image: "profile_photo.jpg", // Place your image in the public folder
      links: [
        { name: "GitHub", url: "https://github.com/azman-i/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/khairul-azman-376bb8181/" },
        { name: "Google Scholar", url: "https://scholar.google.com/citations?user=8SPzljkAAAAJ" },
        { name: "CV", url: "https://drive.google.com/file/d/1yjF9i4fVvo6nGlWU5PKzq2gxyjAKZloa/view?usp=sharing" },
        { name: "Email", url: "mailto:khairul.md.azman@gmail.com" }
      ]
    },
   biography: {
      paragraphs: [
        "I am a incoming PhD student in Computer Science at abcd uni. My research focuses on the intersection of large language models and software engineering. I am interested in making the outputs of large language models reliable and trustworthy. I am currently working  under the supervision of professor shibbir ahmed.",
        "Prior to my PhD, I completed my BSc in Computer Science and Engineering at Bangladesh University of Engineering and Technology. My undergraduate thesis on determining protein protein interaction in a combinatorial way. I am passionate about large language models and its future effects on software engineering. My goal is to provide reliable and trustworthy solution to large language model"
      ]
    },
    publications: [
      {
        title: "Title of Your First Publication",
        authors: "Your Name, Co-author One, Co-author Two",
        venue: "Conference/Journal Name, Year",
        description: "Brief description of the publication and its contributions to the field.",
        links: [
          { name: "PDF", url: "#" },
          { name: "Code", url: "#" }
        ]
      },
      {
        title: "Title of Your Second Publication",
        authors: "Your Name, Co-author One, Co-author Two",
        venue: "Conference/Journal Name, Year",
        description: "Brief description of the publication and its contributions to the field.",
        links: [
          { name: "PDF", url: "#" },
          { name: "Code", url: "#" }
        ]
      }
    ],
    teaching: [
      {
        title: "Course Name",
        institution: "University Name, Semester Year",
        description: "Description of your role and responsibilities in this course. What did you teach? How did you contribute to student learning?"
      },
      {
        title: "Another Course Name",
        institution: "University Name, Semester Year",
        description: "Description of your role and responsibilities in this course. What did you teach? How did you contribute to student learning?"
      }
    ],
    newsData : [
      {
        date: "August 2024",
        content: "Joined as an Assistant Professor in the Department of Computer Science at Texas State University!",
        iconType: "university"
      },
      {
        date: "June 2024",
        content: "Defended my PhD Final Oral Exam!",
        iconType: "education"
      },
      {
        date: "May 2024",
        content: "Awarded Research Excellence Award by Iowa State University!",
        iconType: "award"
      }
    ]
  };

  return (
    <div className="App">
      <div className="container">
        <Header 
          name={portfolioData.profile.name} 
          title={portfolioData.profile.title} 
          image={portfolioData.profile.image}
          links={portfolioData.profile.links}
        />
        

        <Biography paragraphs={portfolioData.biography.paragraphs} />
        <RecentNewsSection newsItems={portfolioData.newsData} />
        <Publications publications={portfolioData.publications} />
        <Teaching teachings={portfolioData.teaching} />
        <Footer name={portfolioData.profile.name} />
      </div>
    </div>
  );
}

export default App;
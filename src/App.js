// App.js - Main component
import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Footer from './components/Footer';

function App() {
  // Portfolio data - you can later move this to separate files or fetch from an API
  const portfolioData = {
    profile: {
      name: "Your Name",
      title: "PhD Student",
      image: "../public/profile_photo.jpg", // Place your image in the public folder
      links: [
        { name: "GitHub", url: "https://github.com/yourusername" },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
        { name: "Google Scholar", url: "https://scholar.google.com/citations?user=yourid" },
        { name: "CV", url: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
        { name: "Email", url: "mailto:your.email@university.edu" }
      ]
    },
    biography: {
      paragraphs: [
        "I am a PhD student in [Your Field] at [Your University] aBCD. My research focuses on [Your Research Area]. I am interested in [Your Research Interests]. I am currently working on [Your Current Project] under the supervision of [Your Advisor].",
        "Prior to my PhD, I completed my [Previous Degree] at [Previous Institution], where I worked on [Previous Work]. I am passionate about [Your Passion] and aim to [Your Career Goal]."
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
        <Publications publications={portfolioData.publications} />
        <Teaching teachings={portfolioData.teaching} />
        <Footer name={portfolioData.profile.name} />
      </div>
    </div>
  );
}

export default App;
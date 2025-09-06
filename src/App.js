// App.js - Main component
import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Footer from './components/Footer';
import RecentNewsSection from './components/RecentNews';
import Services from './components/Services';

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
        "I am an incoming Ph.D. student in Computer Science at Texas State University . My research lies at the intersection of large language models (LLMs) and software engineering, with a particular focus on improving the reliability and trustworthiness of LLM outputs.",

        "Before beginning my Ph.D., I completed my B.Sc. in Computer Science and Engineering at Bangladesh University of Engineering and Technology (BUET). My undergraduate thesis focused on determining protein-protein interactions using a combinatorial approach.",

        "I am deeply passionate about the future of large language models and their potential to transform software engineering. My goal is to develop methods that ensure LLMs produce reliable and verifiable results, enabling their safe and effective application in real-world systems."

      ]
      
    },
    publications: [
      
      {
        title: "A heuristic computational approach for global protein protein alignment of multiple biological networks",
        authors: "Khairul Azman, Quazi Asif Sadmine, Shahibur Rahman, Abul kashem Mia",
        venue: "Undergraduate Thesis, BUET, 2021",
"description": "Collaborated with two teammates under Professor Dr. Abul Kashem Mia to tackle the NP-Hard problem of global protein-protein interactions using a heuristic approach. Optimized MAPPIN algorithm, integrated Dago-Fun and NaviGo for functional similarity, and replaced BLAST with MMseqs2, reducing runtime from 39 to 3 minutes.",  
        links: [
          { name: "PDF", url: "#" },
          { name: "Code", url: "#" }
        ]
      },
      // {
      //   title: "Title of Your Second Publication",
      //   authors: "Your Name, Co-author One, Co-author Two",
      //   venue: "Conference/Journal Name, Year",
      //   description: "Brief description of the publication and its contributions to the field.",
      //   links: [
      //     { name: "PDF", url: "#" },
      //     { name: "Code", url: "#" }
      //   ]
      // }
    ],
    teaching: [
      {
        title: "Computer System Fundamentals| CS3360",
        institution: "Texas State University, Fall 2025",
        description: "Responsible for grading projects and assignments, and providing student support during office hours (two sessions per week, two hours each)."
      },
      {
        title: "Operating Systems | CS 4460",
        institution: "Texas State University, Fall 2025",
        description: "Responsible for grading projects and assignments, and providing student support during office hours (two sessions per week, two hours each)."
      }
    ],
    newsData : [
      {
        date: "August 2025",
        content: "Started as a Doctoral Instructional Assistant at Texas State University.",
        iconType: "PhD"
      },
      {
        date: "February 2025",
        content: "Received full funding for PhD admission at Texas State University.",
        iconType: "Award"
      },
      {
        date: "July 2023",
        content: "Joined Teletalk Bangladesh Limited as an Assistant Manager.",
        iconType: "Job"
      },
      {
        date: "May 2022",
        content: "Promoted to Software Engineer at Reve Systems.",
        iconType: "Promotion"
      },
      {
        date: "April 2021",
        content: "Joined Reve Systems as a Junior Software Engineer.",
        iconType: "Job"
      },
      {
        date: "February 2021",
        content: "Graduated with a BSc in Computer Science and Engineering from Bangladesh University of Engineering and Technology.",
        iconType: "Graduation"
      }
    ],
    services: [
      {
        section: "Sports & Fitness",
        description: "Play football and cricket regularly with friends, which helps me stay disciplined and enjoy teamwork."
      },
      {
        section: "Cultural Participation",
        description: "Performed in annual cultural evenings at university."
      },
      {
        section: "Community Support",
        description: "Assisted in organizing local events and university programs."
      },
      {
        section: "Personal Learning",
        description: "Take part in online programming challenges to sharpen problem-solving skills."
      }
    ],
    
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
       <Services services={portfolioData.services} />
    <Footer name={portfolioData.profile.name} />
      </div>
    </div>
  );
}

export default App;
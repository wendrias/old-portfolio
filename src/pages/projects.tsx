import React from "react";
import "./projects.css";
import ProjectCard from "../components/ProjectCard.tsx";

function Projects() {
  // var setExpandedCard = (proj) => {
  //   console.log(proj);
  // };
  return (
    <div id="projects-container">
      <p>Here are a few things I've created recently, for work or for fun:</p>
      <div id="project-cards-container">
        <ProjectCard
          title="PixelWorld Mini-Game"
          description="A Pokemon-inspired mini game."
          tech={["HTML/CSS", "JavaScript", "Python"]}
          picture="./img/pixelworld.png"
          link="https://wendrias.github.io/pixelworld/"
        />
        <ProjectCard
          title="Prince George's County Schools Air Quality Tool"
          description="An air quality sensor map and dashboard created for a local education center's environmental curriculum."
          tech={["HTML/CSS", "JavaScript", "React", "NodeJS", "REST API"]}
          picture="./img/schmidt/map.png"
          link="https://schmidt-center-dashboard.netlify.app/"
        />
        <ProjectCard
          title="Pic2Playlist (Beta)"
          description="A tool that takes user-inputted image and creates a Spotify playlist based on data from Google Cloud Vision and Clarifai image processing AIs."
          tech={["one", "two", "three", "four"]}
          picture="./img/p2p.png"
          link="/"
        />
        <ProjectCard
          title="CSS Toaster"
          description="A fun exercise in UI design and CSS animation."
          tech={["HTML/CSS", "JavaScript"]}
          picture="./img/toaster.png"
          link="https://codepen.io/wendrias/pen/RwMYxZX"
        />
        <ProjectCard
          title="Easy GPA Calculator"
          description="Quick, no-hassle grade average calculation--no converting needed. Parameters can be entered as letters, percentages, or a mix of both."
          tech={["HTML/CSS", "Bootstrap", "JavaScript"]}
          picture="./img/gpa.png"
          link="https://codepen.io/wendrias/pen/ZEJwWzJ"
        />
        <ProjectCard
          title="Artist Porfolio Site"
          description="An artist portfolio site created for a freelance client. Includes custom carousel, about page, gallery of work, and contact page. Anonymized to protect privacy."
          tech={["HTML/CSS", "JavaScript", "PHP"]}
          picture="./img/portfolio/1.png"
          link="/"
        />
        <ProjectCard
          title="Slide-Up Music Player Design"
          description="Prototype of music player that slides up when toggled."
          tech={["HTML/CSS", "JavaScript", "PHP"]}
          picture="./img/music.png"
          link="/"
        />
      </div>
    </div>
  );
}

export default Projects;

// import React from "react";
// import "./projects.css";
// import ProjectCard from "../components/ProjectCard.tsx";

// function Projects() {
//   return (
//     <div id="projects-container">
//       <p>Here are a few things I've created recently, for work or for fun:</p>
//       <div className="proj-carousel">
//         <div className="left-swipe"></div>
//         <div className="carousel-content">
//           <ProjectCard
//             title="Prince George's County Schools Air Quality Tool"
//             description="An air quality sensor map and dashboard created for a local education center's environmental curriculum."
//             tech={["HTML/CSS", "JavaScript", "NodeJS", "REST API"]}
//             picture="./img/schmidt.png"
//           />
//           <ProjectCard
//             title="Pic2Playlist (Beta)"
//             description="A tool that takes user inputted image and creates a Spotify playlist based on data from Google Cloud Vision and Clarifai image processing AIs."
//             tech={["one", "two", "three", "four"]}
//             picture="./img/p2p.png"
//           />
//           <ProjectCard
//             title="CSS Toaster"
//             description="A fun exercise in UI design and CSS animation."
//             tech={["HTML/CSS", "JavaScript"]}
//             picture="./img/toaster.png"
//           />
//           <ProjectCard
//             title="Easy GPA Calculator"
//             description="Quick, no-hassle grade average calculation--no converting needed. Parameters can be entered as letters, percentages, or a mix of both."
//             tech={["HTML/CSS", "Bootstrap", "JavaScript"]}
//             picture="./img/gpa.png"
//           />
//           <ProjectCard
//             title="Artist Porfolio Site"
//             description="An artist portfolio site created for a freelance client. Includes custom carousel, about page, gallery of work, and contact page. Anonymized to protect privacy."
//             tech={["HTML/CSS", "JavaScript", "PHP"]}
//             picture="./img/portfolio/1.png"
//           />
//           <ProjectCard
//             title="Slide-Up Music Player Design"
//             description="Prototype of music player that slides up when toggled."
//             tech={["HTML/CSS", "JavaScript", "PHP"]}
//             picture="./img/music.png"
//           />
//         </div>
//         <div className="right-swipe"></div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

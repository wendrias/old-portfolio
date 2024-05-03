import React, { useState } from "react";
import "./ProjectCard.css";
import LinkIcon from "@mui/icons-material/Link";

interface ProjectCardProps {
  title: string;
  picture: string;
  description: string;
  tech: string[];
  link: string;
}

function ProjectCard({
  title,
  picture,
  description,
  tech,
  link,
}: ProjectCardProps) {
  const hasLink = link !== "/";

  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="project-card-overlay"></div>
      <div className="project-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-card-tech-list">
          {tech.length > 0 &&
            tech.map((t, index) => (
              <li
                key={t}
                className="project-tech-item"
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {t}
              </li>
            ))}
        </ul>
      </div>
      {hasLink && (
        <a className="link-icon-container" href={link}>
          <LinkIcon className="link-icon" />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;

// function ProjectCard({ title, picture, description, tech }: ProjectCardProps) {
//   return (
//     <div className="project-card">
//       <div className="project-image-div">
//         <img src={picture} />
//       </div>
//       <div className="project-card-text">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <ul className="project-card-tech-list">
//           {tech.length > 0 &&
//             tech.map((t) => <li className="project-tech-item">{t}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }

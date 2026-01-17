import React from "react";
import "./ProjectTech.css";

// 1. Importer dynamiquement toutes les icônes SVG du dossier TechIcons.
const techIcons = ((r) => {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.match(/\.\/(.*)\.svg/)[1];
    images[key] = r(item);
  });
  return images;
})(require.context("../../Assets/TechIcons", false, /\.svg$/));

// 2. Créer une carte pour les alias ou les noms qui diffèrent des noms de fichiers.
const nameToIconKey = {
  JS: "Javascript",
  JavaScript: "Javascript",
  "Node.js": "Node",
  "Next.js": "Next",
  "TypeScript": "typescript-original",
  "Tailwind": "Tailwind",
  "PHP": "php-original",
  "HTML": "html5-original",
  "CSS": "css3-original",
  "Symfony 7": "symfony-original-wordmark",
  "Figma": "figma-original",
  "WordPress": "wordpress-original",
  "WooCommerce": "woocommerce-original-wordmark",
  "PostgreSQL": "postgresql-original-wordmark",
  "MySQL": "mysql-original-wordmark",
  "Chart.js": "chartjs-original",
  // Nouveaux alias pour tes SVGs ajoutés
  "TurboRepo": "turborepo-icon",
  "Express.js": "express-original",
  "Socket.io": "socketio-original",
};

function ProjectTech({ techs }) {
  return (
    <ul className="project-tech-list">
      {techs.map((tech, index) => {
        const iconKey = nameToIconKey[tech] || tech;
        const iconSrc = techIcons[iconKey];

        return (
          <li key={index} className="tech-pill">
            {iconSrc && (
              <img
                src={iconSrc}
                alt={`${tech} icon`}
                className="tech-icon"
              />
            )}
            <span>{tech}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectTech;

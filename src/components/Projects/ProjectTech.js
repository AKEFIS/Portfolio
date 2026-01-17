import React from "react";
import "./ProjectTech.css";

// 1. Importer dynamiquement toutes les icônes SVG du dossier TechIcons.
// Les clés de cet objet seront les noms de fichiers sans l'extension .svg.
const techIcons = ((r) => {
  let images = {};
  r.keys().forEach((item) => {
    // Extrait le nom du fichier pour l'utiliser comme clé.
    const key = item.match(/\.\/(.*)\.svg/)[1];
    images[key] = r(item);
  });
  return images;
})(require.context("../../Assets/TechIcons", false, /\.svg$/));

// 2. Créer une carte pour les alias ou les noms qui diffèrent des noms de fichiers.
const nameToIconKey = {
  // Alias pour correspondre aux noms de fichiers
  JS: "Javascript",
  Go: "go",
  "IntelliJ IDEA": "intellij-idea",
  "C++": "C++",
  Node: "Node",
  React: "React",
  Docker: "Docker",
  Git: "Git",
  Typescript: "typescript-original", // Garde la clé minuscule pour la robustesse
  TypeScript: "typescript-original", // Ajoute la clé avec la bonne casse
  Tailwind: "Tailwind",
  PHP: "php-original",
  HTML: "html5-original",
  CSS: "css3-original",
  "Symfony 7": "symfony-original-wordmark",
  Figma: "figma-original",
  WordPress: "wordpress-original",
  WooCommerce: "woocommerce-original-wordmark",
  PostgreSQL: "postgresql-original-wordmark",
  MySQL: "mysql-original-wordmark",
  "Node.js": "Node",
  
  // Technologies avec icône correspondante
  "Chart.js": "chartjs-original",
};

function ProjectTech({ techs }) {
  return (
    <ul className="project-tech-list">
      {techs.map((tech, index) => {
        // Déterminer la clé correcte pour l'objet techIcons.
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

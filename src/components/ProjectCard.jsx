import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);

  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "15px",
      width: "100%",
      maxWidth: "280px",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      transition: "0.3s ease",
      boxShadow: hover
        ? "0 6px 15px rgba(0,0,0,0.15)"
        : "0 2px 6px rgba(0,0,0,0.1)",
      transform: hover ? "translateY(-5px)" : "translateY(0px)",
    },
    img: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "12px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "6px",
    },
    desc: {
      fontSize: "14px",
      color: "#444",
      marginBottom: "10px",
    },
    date: {
      fontSize: "12px",
      color: "#777",
      marginBottom: "10px",
    },
    button: {
      padding: "8px 12px",
      background: "#007bff",
      color: "#fff",
      textDecoration: "none",
      textAlign: "center",
      borderRadius: "6px",
      fontSize: "14px",
      marginTop: "auto",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={project.image} alt={project.name} style={styles.img} />
      <h3 style={styles.title}>{project.name}</h3>
      <p style={styles.desc}>{project.description}</p>
      <small style={styles.date}>Created: {project.created}</small>

      <a href={project.path} style={styles.button}>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

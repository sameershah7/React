import { Link } from "react-router";
import HeroImg from "../../public/images/Hero.jpg";

export default function Hero() {
  const styles = {
    container: {
      width: "100%",
      height: "500px",
      backgroundImage: `url(${HeroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      overflow: "hidden",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.67)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      maxWidth: "700px",
      padding: "0 20px",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      letterSpacing: "2px",
    },
    p: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
      color: "#ddd",
    },
    button: {
      marginTop: "2rem",
      padding: "12px 30px",
      backgroundColor: "#ff7f50",
      borderRadius: "25px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      color: "#212121",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.h1}>Welcome To My Resume</h1>
        <p style={styles.p}>
          I’m passionate about creating meaningful digital experiences.
          Explore my work, skills, and projects to see how I can bring your
          ideas to life.
        </p>
        <Link to={"/projects"}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff5722")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff7442ff")}
        >
          View My Work
        </Link>
      </div>
    </div>
  );
}

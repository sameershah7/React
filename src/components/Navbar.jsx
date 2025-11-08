import { Link } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const styles = {
    nav: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 18px",
      background: "#ff7f50",
    },
    
    logo: {
      fontSize: "22px",
      fontWeight: "700",
      textDecoration: "none",
      color: "#212121",
    },

    ul: {
      display: "flex",
      gap: "18px",
      listStyle: "none",
      margin: 0,
      padding: 0
    },

    link: {
      textDecoration: "none",
      color: "#212121",
      fontWeight: "bold",
      padding: "6px 10px",
      borderRadius: "5px",
      transition: "0.2s ease-in-out",
    },

    hoverStyle: {
      background: "#ff5722",
      color: "white",
    }
  };

  return (
    <nav style={styles.nav}>

      <Link to="/" style={styles.logo}>MyPortfolio</Link>

      <ul style={styles.ul}>
        {[
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li
            key={item.name}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              to={item.path}
              style={{
                ...styles.link,
                ...(hovered === item.name ? styles.hoverStyle : {})
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

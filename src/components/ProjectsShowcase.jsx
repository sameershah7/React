import ProjectCard from "./ProjectCard";

export default function ProjectsShowcase() {
  const projects = [
    {
      name: "Weather App",
      description: "View real-time weather updates using OpenWeather API",
      image: "/images/weather-app.png",
      created: "Feb 05 2025",
      path: "/weather-app",
    },
    {
      name: "Movie Finder",
      description: "Search movies and display ratings & posters using OMDB API",
      image: "/images/movie-finder.png",
      created: "Jan 18 2025",
      path: "/movie-finder",
    },
    {
      name: "Recipe Explorer",
      description: "Search your favorite recipes and view cooking instructions",
      image: "/images/recipe-explorer.png",
      created: "Mar 10 2025",
      path: "/recipe-explorer",
    },
    {
      name: "E-Commerce Product Catalog",
      description: "Browse store items and filter by category and price",
      image: "/images/ecommerce-catalog.png",
      created: "Sep 28 2024",
      path: "/product-catalog",
    },
    {
      name: "Dictionary App",
      description: "Look up word meanings, synonyms & pronunciation",
      image: "/images/dictionary-app.png",
      created: "Mar 02 2025",
      path: "/dictionary",
    },
    {
      name: "AI ChatBot UI",
      description: "Chat interface UI that mimics AI assistant layout",
      image: "/images/chatbot-ui.png",
      created: "Feb 25 2025",
      path: "/chatbot-ui",
    },
  ];

  return (
    <div style={{padding: "10px 20px"}}>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Project Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "10px"
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

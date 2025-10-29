import React from "react";

const cards = [
  {
    color: "#FF6B6B",
    title: "Exploring the Future of AI",
    publishTime: "2025-10-15 09:30 AM",
    description: "An overview of how artificial intelligence is shaping industries and daily life."
  },
  {
    color: "#4ECDC4",
    title: "The Art of Minimalist Design",
    publishTime: "2025-09-22 04:10 PM",
    description: "Discover the beauty and efficiency behind minimalist user interfaces."
  },
  {
    color: "#FFD93D",
    title: "10 Ways to Boost Your Productivity",
    publishTime: "2025-08-10 07:45 AM",
    description: "Simple habits and tools to help you get more done in less time."
  },
  {
    color: "#8338EC",
    title: "Top 5 JavaScript Frameworks in 2025",
    publishTime: "2025-10-10 03:50 PM",
    description: "A quick comparison of the most popular frameworks and their use cases."
  },
];


// Now we can use this card multiple times with the helps of props
const Card = ({ color, title, publishTime, description }) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p className="publish-time">{publishTime}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};


// and here we map the array 
export default function CardList()  {
  return (
    <div className="card-container">
      {cards.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

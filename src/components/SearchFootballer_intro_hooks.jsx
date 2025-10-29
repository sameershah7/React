import React, { useRef, useState, useEffect } from "react";

// the footballers array
const footballersApi = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar Jr",
  "Kylian Mbappe",
  "Mohamed Salah",
  "Sadio Mane",
  "Kevin De Bruyne",
  "Robert Lewandowski",
  "Harry Kane",
  "Sergio Ramos",
  "Virgil van Dijk",
  "Alisson Becker",
  "Joshua Kimmich",
  "Manuel Neuer",
  "Karim Benzema",
  "Thibaut Courtois",
  "Eden Hazard",
  "Raheem Sterling",
  "Bruno Fernandes",
  "Trent Alexander-Arnold",
  "Son Heung-min",
  "Pierre-Emerick Aubameyang",
  "Sergio Aguero",
  "Luis Suarez",
  "Luka Modric",
  "Casemiro",
  "Frenkie de Jong",
  "Gerard Pique",
  "Marc-Andre ter Stegen",
  "Keylor Navas",
  "Angel Di Maria",
  "N'Golo Kante",
  "Kai Havertz",
  "Timo Werner",
  "Hakim Ziyech",
  "Christian Pulisic",
  "Mason Mount",
  "Olivier Giroud",
  "Tammy Abraham",
  "Kepa Arrizabalaga",
  "Ben Chilwell",
  "Thiago Silva",
  "Kurt Zouma",
  "John Terry",
  "Didier Drogba",
  "Frank Lampard",
  "Ashley Cole",
  "Petr Cech",
];

// Custom hook i should have create in another file
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  // I can used another hook inside
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default function SearchFootballer() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const debouncedQuery = useDebounce(query, 800);

  useEffect(() => {
    const result = footballersApi.filter((footballer) =>
      footballer.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setResponse(result);
  }, [debouncedQuery]);

  return (
    <div
      style={{
        border: "solid #f1f1f1",
        width: "50vw",
        margin: "auto",
        marginTop: "25px",
        borderRadius: "6px",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Footballers</h2>
      <div>
        <label htmlFor="search" style={{ display: "block" }}>
          Search for footballer
        </label>
        <input
          style={{ padding: "12px" }}
          value={query}
          id="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {response.length > 0
            ? response.map((player, i) => (
                <li key={i} style={{ listStyle: "none" , padding: "4px 10px", marginTop: "2px", borderBottom: "1px solid"}}>
                  {player}
                </li>
              ))
            :
            <li style={{listStyle: "none", padding: "10px"}}>Result Not found</li> 
          }
        </ul>
      </div>
    </div>
  );
}

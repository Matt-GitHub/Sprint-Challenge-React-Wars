import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import InfoCard from "./components/infoCard";

const App = () => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setInput(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {input.map((data, key) => {
          return <InfoCard data={data} key={key} />;
        })}
      </div>
    </div>
  );
};

export default App;

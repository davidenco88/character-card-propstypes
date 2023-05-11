import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {data.map((character) => {
          return (<CharacterCard 
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            origin={character.origin}
            location={character.location}
          />)
        })}
        
      </div>
    </div>
  );
}

export default App;

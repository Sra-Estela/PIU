import React, { useState } from 'react';
import './CharacterSelection.css';

const characters = [
  {
    id: 1,
    name: "Ash Ketchum",
    description: "",
    thumb: "src\\assets\\ash.png",
    large: "src\\assets\\ash.png",
  },
  {
    id: 2,
    name: "Naruto",
    description: "",
    thumb: "src\\assets\\naruto.png",
    large: "src\\assets\\naruto.png",
  },
  {
    id: 3,
    name: "Aang",
    description:
      "Aang foi um Nômade do Ar nascido em 12 A.G e o Avatar durante o conflito conhecido como Guerra dos Cem Anos. Seu antecessor imediato foi o Avatar Roku, e sua sucessora foi o Avatar Korra.",
    thumb: "src\\assets\\aang.png",
    large: "src\\assets\\aang.png",
  },
  {
    id: 4,
    name: "Visconde",
    description: "",
    thumb: "src\\assets\\visconde.png",
    large: "src\\assets\\visconde.png",
  },
  {
    id: 5,
    name: "Goku",
    description: "",
    thumb: "src\\assets\\goku.png",
    large: "src\\assets\\goku.png",
  },
  {
    id: 6,
    name: "Luffy",
    description: "",
    thumb: "src\\assets\\luffy.png",
    large: "src\\assets\\luffy.png",
  },
];

function CharacterSelection() {
  const [selectedId, setSelectedId] = useState(3); // Aang selected by default

  const selectedCharacter = characters.find((c) => c.id === selectedId);

  return (
    <div className="container">
      <button className="theme-button">Mudar Tema</button>
      <h1>Galeria de Personagens</h1>
      <div className="character-list">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => setSelectedId(char.id)}
            className={`character-item ${char.id === selectedId ? "selected" : ""}`}
          >
            <img
              src={char.thumb}
              alt={char.altThumb}
              className="character-image"
              width={96}
              height={128}
            />
          </div>
        ))}
      </div>
      <div className="character-details">
        {selectedCharacter.large && (
          <img
            src={selectedCharacter.large}
            alt={selectedCharacter.altLarge}
            className="character-large"
            width={256}
            height={256}
          />
        )}
        <h2>{selectedCharacter.name}</h2>
        <p>{selectedCharacter.description}</p>
      </div>
    </div>
  );
}

export default CharacterSelection;

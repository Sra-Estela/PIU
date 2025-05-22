import React, { useState } from 'react';
import './CharacterSelection.css';

const characters = [
  {
    id: 1,
    name: "Ash Ketchum",
    description: "",
    thumb: "https://storage.googleapis.com/a1aa/image/85ceee57-41e2-4ef6-a15b-51b910e32a65.jpg",
    large: "",
    altThumb: "Ash Ketchum with Pikachu standing in a battle pose, wearing a cap, jacket, and sneakers",
  },
  {
    id: 2,
    name: "Naruto",
    description: "",
    thumb: "https://storage.googleapis.com/a1aa/image/b3db305e-9208-4a63-f4a7-8a035e5be37b.jpg",
    large: "",
    altThumb: "Naruto Uzumaki standing confidently with arms crossed, wearing his orange ninja outfit",
  },
  {
    id: 3,
    name: "Aang",
    description:
      "Aang foi um Nômade do Ar nascido em 12 A.G e o Avatar durante o conflito conhecido como Guerra dos Cem Anos. Seu antecessor imediato foi o Avatar Roku, e sua sucessora foi o Avatar Korra.",
    thumb: "https://storage.googleapis.com/a1aa/image/64626415-335e-4df6-fde3-e6d09bf467ee.jpg",
    large: "https://storage.googleapis.com/a1aa/image/d607756f-b306-4569-ba59-1214dc263613.jpg",
    altThumb: "Aang crouching in a battle stance holding a staff, wearing traditional Air Nomad clothing",
    altLarge: "Large image of Aang in an action pose with his staff and swirling air around him",
  },
  {
    id: 4,
    name: "Mr. Peanut",
    description: "",
    thumb: "https://storage.googleapis.com/a1aa/image/b4ce880e-a138-419c-102d-c3a6ee5426aa.jpg",
    large: "",
    altThumb: "Mr. Peanut character standing with one hand on his chin, wearing a green suit and top hat",
  },
  {
    id: 5,
    name: "Goku",
    description: "",
    thumb: "https://storage.googleapis.com/a1aa/image/74e6a293-bc02-4d80-00d0-32096dc01c80.jpg",
    large: "",
    altThumb: "Goku standing confidently with arms crossed, wearing his orange martial arts gi",
  },
];

function CharacterSelection() {
  const [selectedId, setSelectedId] = useState(3); // Aang selected by default

  const selectedCharacter = characters.find((c) => c.id === selectedId);

  return (
    <div className="container">
      <button className="theme-button">Mudar Tema</button>
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

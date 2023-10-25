import React, {useState} from 'react';
import './App.css';
import InputCommands from "./components/InputCommands";
import GridMap from "./components/GridMap";
import {Grid} from "./components/Cell";

const initialGridSize = 10;

const initialGrid: Grid = Array.from({ length: initialGridSize }, () => Array.from({ length: initialGridSize }, () => ({})));

// Colocar un Rover en la posición (2,2)
initialGrid[2][2].hasRover = true;

// Colocar un obstáculo en la posición (4,4)
initialGrid[4][4].hasObstacle = true;

function App() {
  const [grid, setGrid] = useState(initialGrid);

  return (
    <div>
        <GridMap grid={grid} />
        <InputCommands/>
    </div>
  );
}

export default App;

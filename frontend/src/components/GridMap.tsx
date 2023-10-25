import React from 'react';
import Cell, {Grid} from './Cell';

interface GridMapProps {
    grid: Grid;
}

const GridMap: React.FC<GridMapProps> = ({ grid }) => {
    return (
        <div className="grid-map">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <Cell key={cellIndex} {...cell} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GridMap;

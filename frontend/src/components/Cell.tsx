import React from 'react';

interface CellProps {
    hasRover?: boolean;
    hasObstacle?: boolean;
}

const Cell: React.FC<CellProps> = ({ hasRover, hasObstacle }) => {
    if (hasRover) return <div className="cell rover"></div>;
    if (hasObstacle) return <div className="cell obstacle"></div>;
    return <div className="cell"></div>;
};

export default Cell;

export type Cell = {
    hasRover?: boolean;
    hasObstacle?: boolean;
};

export type Grid = Cell[][];



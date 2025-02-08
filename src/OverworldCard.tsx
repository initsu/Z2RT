import React from 'react';
import { CheckOffImage } from './CheckOffImage';
import { DM_ARRAY, DM_ARRAY_START, EAST_ARRAY, EAST_ARRAY_START, MI_ARRAY, MI_ARRAY_START, WEST_ARRAY, WEST_ARRAY_START } from './Data';

export interface OverworldCardProps {
    stateArray: boolean[];
    onClick: (index: number) => void;
}

export const OverworldCard: React.FC<OverworldCardProps> = ({ stateArray, onClick }) => {
    return (
        <div className="overworld">
            <div className="overworld-row">
                {WEST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[WEST_ARRAY_START + index]} onClick={() => onClick(WEST_ARRAY_START + index)} />
                ))}
            </div>
            <div className="overworld-row">
                {EAST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[EAST_ARRAY_START + index]} onClick={() => onClick(EAST_ARRAY_START + index)} />
                ))}
            </div>
            <div className="overworld-row">
                {DM_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[DM_ARRAY_START + index]} onClick={() => onClick(DM_ARRAY_START + index)} />
                ))}
                {MI_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[MI_ARRAY_START + index]} onClick={() => onClick(MI_ARRAY_START + index)} />
                ))}
            </div>
        </div>
    );
};

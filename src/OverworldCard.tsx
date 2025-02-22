import React from 'react';
import { CheckOffImage } from './CheckOffImage';
import { DM_ARRAY, DM_ARRAY_START, EAST_ARRAY, EAST_ARRAY_START, MI_ARRAY, MI_ARRAY_START, TOWN_EAST_ARRAY, TOWN_EAST_ARRAY_START, TOWN_WEST_ARRAY, TOWN_WEST_ARRAY_START, WEST_ARRAY, WEST_ARRAY_START } from './Data';

export interface OverworldCardProps {
    stateArray: boolean[];
    onClick: (index: number) => void;
}

export const OverworldCard: React.FC<OverworldCardProps> = ({ stateArray, onClick }) => {
    return (
        <div className="overworld">
            <div className="overworld-wrap">
                {TOWN_WEST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[TOWN_WEST_ARRAY_START + index]} onClick={() => onClick(TOWN_WEST_ARRAY_START + index)} />
                ))}
                {WEST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[WEST_ARRAY_START + index]} onClick={() => onClick(WEST_ARRAY_START + index)} />
                ))}
            </div>
            <div className="overworld-wrap">
                {TOWN_EAST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[TOWN_EAST_ARRAY_START + index]} onClick={() => onClick(TOWN_EAST_ARRAY_START + index)} />
                ))}
                {EAST_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[EAST_ARRAY_START + index]} onClick={() => onClick(EAST_ARRAY_START + index)} />
                ))}
            </div>
            <div className="overworld-wrap">
                {DM_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[DM_ARRAY_START + index]} onClick={() => onClick(DM_ARRAY_START + index)} />
                ))}
                <div className="overworld-continent-title">Death Mountain</div>
                <div className="overworld-continent-title">Maze Island</div>
                {MI_ARRAY.map((obj, index) => (
                    <CheckOffImage key={index} obj={obj} state={stateArray[MI_ARRAY_START + index]} onClick={() => onClick(MI_ARRAY_START + index)} />
                ))}
            </div>
            <div className="overworld-continent-group west" />
            <div className="overworld-continent-group east" />
            <div className="overworld-continent-group dm" />
            <div className="overworld-continent-group mi" />
        </div>
    );
};

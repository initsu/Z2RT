import React from 'react';
import { CheckOffImage } from './CheckOffImage';
import { BOSS_ARRAY, BOSS_ARRAY_START, PALACE_ITEM_ARRAY, PALACE_ITEM_ARRAY_START } from './Data';

export interface PalaceCardProps {
    stateArray: boolean[];
    onClick: (index: number) => void;
}

export const PalaceCard: React.FC<PalaceCardProps> = ({ stateArray, onClick }) => {
    return (
        <div className="palaces">
            <div className="checkoff-items-wrap">
                {Array.from({ length: 6 }, (_, i) => i).map((index) => (
                    <div key={index} className="checkoff-item-group">
                        <CheckOffImage obj={BOSS_ARRAY[index]} state={stateArray[BOSS_ARRAY_START + index]} onClick={() => onClick(BOSS_ARRAY_START + index)} />
                        <CheckOffImage obj={PALACE_ITEM_ARRAY[index]} state={stateArray[PALACE_ITEM_ARRAY_START + index]} onClick={() => onClick(PALACE_ITEM_ARRAY_START + index)} />
                    </div>
                ))}
                <div className="checkoff-item">
                    <CheckOffImage obj={BOSS_ARRAY[6]} state={stateArray[BOSS_ARRAY_START + 6]} onClick={() => onClick(BOSS_ARRAY_START + 6)} />
                </div>
            </div>
        </div>
    );
};

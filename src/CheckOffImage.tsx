import React from 'react';
import { CheckOffType } from './Data';

export interface CheckOffImageProps {
    obj: CheckOffType;
    state: boolean;
    onClick: () => void;
}

export const CheckOffImage: React.FC<CheckOffImageProps> = ({ obj, state, onClick }) => {
    let style = {
        filter: '',
    } as any;
    if (obj.hue != null) {
        style.filter = `hue-rotate(${obj.hue}deg)`;
    }
    if (obj.saturation != null) {
        style.filter += ` saturate(${obj.saturation})`;
    }
    let src = obj.img;
    if (state && obj.imgChecked) {
        src = obj.imgChecked;
    }
    return (
        <div
            className={`location state-${state}`}
        >
            <img
                className={`${obj.nn ? 'nn' : ''}`}
                style={style}
                src={src}
                onClick={onClick}
            />
        </div>
    );
};

import React from 'react';
import {SuperButton} from "../SuperButton";




export type CounterPropsType = {
    value: number
    maxValue: number
    onCLickUp: () => void
    onCLickHandlerStart: () => void
    disable: boolean
}

export const Counter = (props:CounterPropsType) => {

    let {value, maxValue, onCLickUp, onCLickHandlerStart, disable} = props;

    return (
        <div className="counterStyle">
            <div className={`numStyle ${value === 5 ? 'maxValue' : ''}`}>
                {value}
            </div>
            <SuperButton title="inc" onClick={onCLickUp} disable={value === maxValue} />
            <SuperButton title="reset" onClick={onCLickHandlerStart} disable={disable} />
        </div>
    );
};


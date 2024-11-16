import React from 'react';
import {SuperButton} from "../SuperButton";


export type CounterSetPropsType = {
    value: number;
    maxValue: number;
    startValue: number;
    inkUpMaxHandler: () => void;
    inkDownMaxHandler: () => void;
    inkUpStartHandler: () => void;
    inkDownStartHandler: () => void;
    setLocalStorageHandler: () => void;
    disable: boolean;
}

export const CounterSet = (props:CounterSetPropsType) => {
    let {value, maxValue , startValue, inkUpMaxHandler, inkDownMaxHandler, inkUpStartHandler, inkDownStartHandler, setLocalStorageHandler, disable} = props;

    return (
        <div className="counterSetStyle">
            <div className={`numStyle ${startValue === 0 ? 'lastNumber' : ''}`}>
                <SuperButton title="+" onClick={inkUpMaxHandler} disable={!disable}/>
                <SuperButton title="-" onClick={inkDownMaxHandler} disable={!disable}/>
            </div>
            <>max value: {maxValue}</>
            <div className={`numStyle ${startValue === 10 ? 'maxValue' : ''}`}>
                <SuperButton title="+" onClick={inkUpStartHandler} disable={!disable}/>
                <SuperButton title="-" onClick={inkDownStartHandler} disable={!disable}/>
            </div>
            <>start value: {startValue}</>
            <SuperButton onClick={setLocalStorageHandler} disable={value === maxValue } title={"set Value"}/>
        </div>
    );
}

export default CounterSet;


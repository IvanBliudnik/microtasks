import React, {useState} from 'react';
import {CounterIncBtn} from "./CounterIncBtn";
import {CounterResetBtn} from "./CounterResetBtn";

export const Counter = () => {
    let [num, setNum] = useState(0);
    const onCLickUp = () => {
        setNum(++num);
    }
    const onCLickHandlerStart = () => {
        setNum(0);
    }
    return (
        <div>
            <div className={"numStyle"}>{num}</div>
            <CounterIncBtn onClick={onCLickUp} />
            <CounterResetBtn onClick={onCLickHandlerStart} />
        </div>
    );
};


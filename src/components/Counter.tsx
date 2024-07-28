import React, {useEffect, useState} from 'react';
import {CounterIncBtn} from "./CounterIncBtn";
import {CounterResetBtn} from "./CounterResetBtn";

export const Counter = () => {
    let initialValue = 0;
    let [num, setNum] = useState(initialValue);
    let [disable, setDisabled] = useState(true);

    useEffect(() => {
        if (num === 5) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [num]);
    const onCLickUp = () => {
        setNum((num) => num + 1);
    }
    const onCLickHandlerStart = () => {
        setNum(0);
    }
    return (
        <div className="counterStyle">
            <div className={`numStyle ${num === 5 ? 'maxValue' : ''}`}>
                {num}
            </div>
            <CounterIncBtn onClick={onCLickUp} disabled={disable} className="inc"/>
            <CounterResetBtn className="reset" onClick={onCLickHandlerStart} disabled={num === initialValue}/>
        </div>
    );
};


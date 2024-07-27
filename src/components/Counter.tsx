import React, {useEffect, useState} from 'react';
import {CounterIncBtn} from "./CounterIncBtn";
import {CounterResetBtn} from "./CounterResetBtn";

export const Counter = () => {
    let [num, setNum] = useState(0);
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
        <div>
            <div className={"numStyle"}>{num}</div>
            <CounterIncBtn onClick={onCLickUp} disabled={disable}/>
            {disable && <div className={"lastNumber"}>{num}</div>}
            <CounterResetBtn onClick={onCLickHandlerStart} disabled={num === 0}/>
            {num === 0 && <div className={"lastNumber"}></div> }
        </div>
    );
};


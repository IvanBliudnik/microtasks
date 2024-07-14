import React from 'react';

type ButtonPropsType = {
    result: number
    onClick?: () => void,
    disabled?: boolean,
    classes?: string
}

export const CounterBtn = ({result, onClick, disabled, classes}:ButtonPropsType) => {

    const onCLickUp = () => {
        if(result >= 5) {
            {setCo}
        }
        setCount(count + 1);
    }
    const onCLickHandlerStart = () => {
        setCount(0);
    }
    return (
        <>
            <button className={classes} onClick={onCLickUp} disabled={disabled}>{result}</button>
            <button className={classes} onClick={onCLickHandlerStart} disabled={disabled}>{result}</button>
        </>
    )
}

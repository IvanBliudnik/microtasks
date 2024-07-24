import React from 'react';


export const CounterBtn = () => {
    let [num, setNum] = React.useState(0);

    const onCLickUp = () => {
        setNum(++num);
    }
    const onCLickHandlerStart = () => {
        setNum(0);
    }
    const errorNum = () => {
        if (num >= 5) {
            setError("")
        } else {
            setError("Title is required")
        }
    }
    return (
        <>
            <h1 className={"numStyle"}>{num}</h1>
            <button className={"inc"} onClick={onCLickUp}>inc</button>
            <button className={"reset"} onClick={onCLickHandlerStart}>reset</button>
        </>
    )
}

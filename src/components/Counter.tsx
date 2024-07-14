import React from 'react';
import {CounterBtn} from "./CounterBtn";

export type CounterPropsType = {

}

export const Counter = () => {
    let [count, setCount] = React.useState(0);
    return (
        <div className={"taskWrapper"}>
            <CounterBtn result={count} onClick={setCount}/>
        </div>
    );
};


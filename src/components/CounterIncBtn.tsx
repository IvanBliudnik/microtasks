import React from 'react';

type CounterIncBtnProps = {
    onClick: () => void;
    disabled: boolean;
    className: string;
}

export const CounterIncBtn = (props: CounterIncBtnProps) => {
    return (
        <div>
            <button onClick={()=>{props.onClick()}} disabled={props.disabled}>inc</button>
        </div>
    )
}

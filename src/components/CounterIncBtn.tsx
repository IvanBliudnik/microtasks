import React from 'react';

type CounterIncBtnProps = {
    onClick: () => void;
    disabled: boolean;
}

export const CounterIncBtn = (props: CounterIncBtnProps) => {
    return (
        <div>
            <button className={"inc"} onClick={()=>{props.onClick()}} disabled={props.disabled}>inc</button>
        </div>
    )
}

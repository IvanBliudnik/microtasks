import React from 'react';
type CounterResetBtnProps = {
    onClick: () => void;
    disabled: boolean;
    className: string;
}

export const CounterResetBtn = (props:CounterResetBtnProps) => {
    return (
        <div>
            <button onClick={()=>{props.onClick()}} disabled = {props.disabled}>reset</button>
        </div>
    );
};


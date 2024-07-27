import React from 'react';
type CounterResetBtnProps = {
    onClick: () => void;
    disabled: boolean;
}

export const CounterResetBtn = (props:CounterResetBtnProps) => {
    return (
        <div>
            <button className={"reset"} onClick={()=>{props.onClick()}} disabled = {props.disabled}>reset</button>
        </div>
    );
};


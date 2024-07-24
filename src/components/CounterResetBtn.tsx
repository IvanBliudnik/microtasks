import React from 'react';
type CounterResetBtnProps = {
    onClick: () => void;
}

export const CounterResetBtn = (props:CounterResetBtnProps) => {

    return (
        <div>
            <button className={"reset"} onClick={()=>{props.onClick()}}>reset</button>
        </div>
    );
};


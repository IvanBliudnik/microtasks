import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: () => void,
}
export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
       props.callback()
        //что будет делать кнопка при нажатии на нёё
    }
    return (
        <div>
           <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

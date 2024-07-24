import React from 'react';

type CounterIncBtnProps = {
    onClick: () => void;
}

export const CounterIncBtn = (props: CounterIncBtnProps) => {


    // const onChangeTitleHandler = (num: ChangeEvent<HTMLInputElement>) => setNum(num.currentTarget.value);
    // const addTask = () => {
    //     if (newTaskTitle.trim() !== "") {
    //         props.addTask(newTaskTitle.trim()); //защита от пустового добавления newTaskTitle
    //         setNewTaskTitle("");
    //     } else {
    //         setError("Title is required")
    //     }
    // const errorNum = () => {
    //     if (num >= 5) {
    //         props.errorNum(setNum(num))
    //     } else {
    //         setError("Title is required")
    //     }
    // }
    return (
        <div>
            <button className={"inc"} onClick={()=>{props.onClick()}}>inc</button>
        </div>
    )
}

// import React, {useState} from 'react';
import './App.css';
// import {NewComponentTaskFull} from "./NewComponentTaskFull";
// import {FullInput} from "./components/FullInput";
// import {Input} from "./components/Input";
// import {Button} from "./components/Button";
import {CounterBtn} from "./components/CounterBtn";
// import {NewComponentTaskFull} from "./NewComponentTaskFull";
// import {Button} from "./Button";
// import {TopCar} from "./topCarsArr";
// import {Button} from "./Button";

// export type FilterType = "All" | "Dollars" | "Rubles"
//типизируем кнопку
// export type ArrayCurrentMoneyProps = {
//     banknots: string,
//     value: number,
//     number: string,
// };
//типизируем кошелёк

export const App = () => {
//1
//     const topCars = [
//         {manufacturer: 'BMW', model: 'm5cs'},
//         {manufacturer: 'Mercedes', model: 'e63s'},
//         {manufacturer: 'Audi', model: 'rs6'}
//     ]
//2
//     const Button1Foo1 = (s:string, age:number, address:string) => {
//         console.log(s, age, address)
//     }
//     const Button2Foo2 = (subscriber:string) => {
//         console.log(subscriber)
//     }
//     const Button3Foo3 = (WhatBtn: string) => {
//         console.log(WhatBtn)
//     }
//
//
// 3
//     let [a, setA] = useState(1) //a - переменная, setA - функция в которой находится a
//     const onclickHandler = () => {
//         setA(++a)
//         console.log(a)
//     }
//     const onclickHandlerStart = () => {
//         setA(0) //сбрасываем на ноль хук setA
//         console.log(a)
//     }
//4
//     const initialMoney = [
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'Rubles', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'Rubles', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'Rubles', value: 50, number: ' v1234567890'},
//         {banknots: 'Rubles', value: 50, number: ' v1234567890'},
//     ];
//     const [money, setMoney] = useState<Array<ArrayCurrentMoneyProps>>(initialMoney)
//     let [filter, setFilter] = useState<FilterType>("All")
//     //создали useState чтобы реагировал React на filter и nameButton
//     let currentMoney = money;
//     //currentMoney(отфильтрованные значения мы должны передать в map для отрисовки)
//
//     const onClickFilterHandler = (filter: FilterType) => {
//         setFilter(filter)
//     }
//     const filteredMoney = filter === 'All'
//         ? money
//         : money.filter(item => item.banknots === filter);
    //Если filter равно 'All', вернуть весь массив money.
    // Если filter не равно 'All', вернуть массив, содержащий только те элементы, у которых значение banknots совпадает с filter.
    // 5
//     let [message, setMessage] = useState([
//         {message: "message1"},
//         {message: "message2"},
//         {message: "message3"},
//     ])
//     let [title, setTitle] = useState("")
//
//     const AddMessage = (title:string) => {
//         let NewMessage = {message: title};
//         setMessage([NewMessage, ...message])
//     }
//
//     const callBackButtonHandler = () => {
//         AddMessage(title);
//         setTitle("")// оставить пустой input
//     }
//

    return (
        <div className="counterStyle">
            <CounterBtn/>
            {/*<Input title={title} setTitle={setTitle}/>*/}
            {/*<Button name={")"} callback={callBackButtonHandler}/>*/}
            {/*/!*<FullInput addNewMessage={AddMessage}/>*!/*/}
            {/*{message.map((el, index) => {*/}
            {/*    return (*/}
            {/*        <div key={index}>{el.message}</div>*/}
            {/*    )*/}
            {/*})}*/}
            {/*4*/}
            {/*<NewComponentTaskFull onClickFilterHandler={onClickFilterHandler} currentMoney={filteredMoney}/>*/}
        </div>
            // </div>
    );
};
// {/*1*/}
// {/*<TopCar topCar={topCars}/>*/}
// {/*2*/}
// <Button name = {"MyYouTubeChannel - 1"} callback={() => Button1Foo1("I am Vasya", 21, "Live in Minsk")}/>
// <Button name = {"MyYouTubeChannel - 2"} callback={() => Button2Foo2("I am Ivan")}/>
// <Button name = {"StupidBtn"} callback={() => Button3Foo3("I am Stupid Button")}/>
// {/*3*/}
// {/*<h1>{a}</h1>*/}
// {/*<button onClick={onclickHandler}>number</button>*/}
// {/*<button onClick={onclickHandlerStart}>0</button>*/}
// {/*5*/}
import React, {useState} from 'react';
import './App.css';
import {NewComponentTaskFull} from "./NewComponentTaskFull";
// import {TopCar} from "./topCarsArr";
// import {Button} from "./Button";

export type FilterType = "All" | "Dollars" | "Rubles"
//типизируем кнопку
export type CurrentMoneyProps = {
    banknots:string,
    value:number,
    number:string,
    onClickFilterHandler:()=> FilterType,
}
//типизируем кошелёк


export const App = () => {
//1
//     const topCars = [
//         {manufacturer: 'BMW', model: 'm5cs'},
//         {manufacturer: 'Mercedes', model: 'e63s'},
//         {manufacturer: 'Audi', model: 'rs6'}
//     ]
//2
    // const Button1Foo1 = (subscriber:string, age:number, address:string) => {
    //     console.log(subscriber, age, address)
    // }
    // const Button2Foo2 = (subscriber:string) => {
    //     console.log(subscriber)
    // }
    // const Button3Foo3 = (WhatBtn: string) => {
    //     console.log(WhatBtn)
    // }
//3
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
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState<FilterType>("all")
    //создали useState чтобы реагировал React на filter и nameButton
    let currentMoney = money;
    //currentMoney(отфильтрованные значения мы должны передать в map для отрисовки)
    //если nameButton === "Dollars", то отрисуй
    if (filter === "Dollars") {
        currentMoney = money.filter(filteredMoney =>
            filteredMoney.banknots === 'Dollars');
    }
    if (filter === 'Rubles') {
        //если nameButton === "Rubles", то отрисуй
        currentMoney = money.filter(filteredMoney =>
            filteredMoney.banknots === 'Rubles');
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponentTaskFull/>
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromWallet,index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}><span>{objFromWallet.banknots}</span>*/}
            {/*                <span>{objFromWallet.value}</span>*/}
            {/*                <span>{objFromWallet.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*    <div style={{marginLeft:"35px"}}>*/}
            {/*        <button onClick={() => onClickFilterHandler("all")}>all</button>*/}
            {/*        <button onClick={() => onClickFilterHandler("Rubles")}>Ruble</button>*/}
            {/*        <button onClick={() => onClickFilterHandler("Dollars")}>Dollar</button>*/}
            {/*    </div>*/}
        </>
    )

    return (
        <div className="App">
            {/*1*/}
            {/*<TopCar topCar={topCars}/>*/}
            {/*2*/}
            {/*<Button name = {"MyYouTubeChannel - 1"} callback={() => Button1Foo1("I am Vasya", 21, "Live in Minsk")}/>*/}
            {/*<Button name = {"MyYouTubeChannel - 2"} callback={() => Button2Foo2("I am Ivan")}/>*/}
            {/*<Button name = {"StupidBtn"} callback={() => Button3Foo3("I am Stupid Button")}/>*/}
            {/*3*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onclickHandler}>number</button>*/}
            {/*<button onClick={onclickHandlerStart}>0</button>*/}
            {/*4*/}
            {/*<button onClick={}>What Wallet</button>*/}
        </div>
    );
}


import React from 'react';
import './App.css';
import {TopCar} from "./Task1";



export const App = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <TopCar topCar={topCars}/>
        </div>
    );
}


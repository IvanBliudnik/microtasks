import React from "react";

export type TopCarsTypeProps = {
    topCar: CarsTypeProps[],
}

export type CarsTypeProps = {
    manufacturer: string,
    model: string,
}

export const TopCar = (props: TopCarsTypeProps) => {
    return (
        <ul>
            {props.topCar.map((objTopCar, index) => {
                return (
                    <li key={index}>
                        <span>{objTopCar.model}</span>
                        <span>{objTopCar.manufacturer}</span>
                    </li>
            )})}
        </ul>
    )
}
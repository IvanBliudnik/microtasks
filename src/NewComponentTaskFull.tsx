import React from 'react';
import {CurrentMoneyProps} from "./App";


export const NewComponentTaskFull = (props:CurrentMoneyProps) => {

    return (
        <div>
            <>
                <ul>
                    {currentMoney.map((objFromWallet,index) => {
                        return (
                            <li key={index}><span>{objFromWallet.banknots}</span>
                                <span>{objFromWallet.value}</span>
                                <span>{objFromWallet.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft:"35px"}}>
                    <button onClick={() => onClickFilterHandler("all")}>all</button>
                    <button onClick={() => onClickFilterHandler("Rubles")}>Ruble</button>
                    <button onClick={() => onClickFilterHandler("Dollars")}>Dollar</button>
                </div>
            </>
        </div>
    );
};

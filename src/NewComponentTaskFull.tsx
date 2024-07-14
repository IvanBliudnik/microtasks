import React from 'react';
// import {ArrayCurrentMoneyProps, FilterType} from "./App";

// type ArrayMoney = {
//     currentMoney: Array<ArrayCurrentMoneyProps>;
//     onClickFilterHandler: (filter: FilterType) => void;
// };
//
export const NewComponentTaskFull = (props:ArrayMoney) => {
const {currentMoney, onClickFilterHandler} = props;
    return (
        <div>
            {/*<>*/}
            {/*    <ul>*/}
            {/*        {currentMoney.map((objFromWallet,index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}><span>{objFromWallet.banknots}</span>*/}
            {/*                    <span>{objFromWallet.value}</span>*/}
            {/*                    <span>{objFromWallet.number}</span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*    <div style={{marginLeft:"35px"}}>*/}
            {/*        <button onClick={() => onClickFilterHandler("All")}>all</button>*/}
            {/*        <button onClick={() => onClickFilterHandler("Rubles")}>Ruble</button>*/}
            {/*        <button onClick={() => onClickFilterHandler("Dollars")}>Dollar</button>*/}
            {/*    </div>*/}
            {/*</>*/}
        </div>
    );
};

import React, {useState} from 'react';
import arrow from './assets/right-arrow-svgrepo-com.svg'

const Currencies = ['UAH', 'USD', 'EUR'];

export const Converter = ({ value, currency, onChangeValue, onChangeCurrency }) => (

    <div className="container">
        <input
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            type="number"
            placeholder={0}
            className='container-input'
        />
        <ul className="currencies">
            {/*<li>*/}
            {/*    <img style={{width: '15px', height: '15px'}} src={arrow} alt=""/>*/}
            {/*</li>*/}
            {Currencies.map((cur) => (
                <li
                    className={currency === cur ? 'active' : ''}
                    onClick={() => onChangeCurrency(cur)}
                    key={cur}>
                    {cur}
                </li>
            ))}
        </ul>

    </div>
);
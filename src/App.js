import './index.css';
import {Converter} from "./Converter";
import {useEffect, useState} from "react";
import logo from './assets/dollar-svgrepo-com.svg'

function App() {
    const [rates, setRates] = useState([]);
    const [sum, setSum] = useState('');
    const [toSum, setToSum] = useState('');
    const [price, setPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);

    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then((res) => res.json())
            .then((json) => {
                setRates(json.rates)
            })
    }, [])

    const handleChangeFromPrice = (value) => {
        const price = value / rates[sum]
        const res = price * rates[toSum]
        setToPrice(res)
        setPrice(value)
    }
    const handleChangePrice = (value) => {
        const res = (rates[sum] / rates[toSum] * value)
        setPrice(res)
        setToPrice(value)
    }

    useEffect(() => {
        handleChangeFromPrice(price)
    }, [sum])

    useEffect(() => {
        handleChangePrice(toPrice)
    }, [toSum])

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            <div className='header'>
                <img src={logo} alt=""/>
                <h3>{rates.UAH}</h3>
            </div>
            <div className='wrapper'>
                <Converter value={price}
                           currency={sum}
                           onChangeCurrency={setSum}
                           onChangeValue={handleChangeFromPrice}
                />
                <Converter value={toPrice}
                           currency={toSum}
                           onChangeCurrency={setToSum}
                           onChangeValue={handleChangePrice}
                />
            </div>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";

function App() {
    let [num, setNum] = useState<number>(0)
    const callBackInc = ()=>{
        num<5 && setNum(num+1)
    }
    const callBackReset = ()=>{
        setNum(0)
    }

    return (
        <div className={'App'}>
            <Display value={num}/>
            <div>
                <Button name={'inc'} callBack={callBackInc}/>
                <Button name={'reset'} callBack={callBackReset}/>
            </div>

        </div>
    );
}

export default App;

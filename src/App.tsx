import React, {useState} from 'react';
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
                <Button isDisable={num<5 ?false :true} name={'inc'} callBack={callBackInc}/>
                <Button isDisable={num<=0 ?false :true} name={'reset'} callBack={callBackReset}/>
            </div>

        </div>
    );
}

export default App;

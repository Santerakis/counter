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
                <Button isDisable={num>=5} name={'inc'} callBack={callBackInc}/>       {/*num<5 ?false :true*/}
                <Button isDisable={num<=0} name={'reset'} callBack={callBackReset}/>   {/*num<=0 ?false :true*/}
            </div>

        </div>
    );
}

export default App;

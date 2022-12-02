import React, {useState} from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";

function App() {
    let [num, setNum] = useState<number>(0)
    const MAX_VALUE = 5
    const callBackInc = ()=>{
        num<5 && setNum(num+1)
    }
    const callBackReset = ()=>{
        setNum(0)
    }
    return (
        <div className={'App'}>
            <Display value={num} maxValue={MAX_VALUE}/>
            <div>
                <Button isDisable={num>=MAX_VALUE} name={'inc'} callBack={callBackInc}/>       {/*num<5 ?false :true*/}
                <Button isDisable={num<=0} name={'reset'} callBack={callBackReset}/>           {/*num<=0 ?false :true*/}
            </div>
        </div>
    );
}
export default App;

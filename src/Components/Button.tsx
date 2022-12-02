import React from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
    isDisable: boolean
}
export const Button:React.FC<ButtonProps> = (props) => {

    return (
        <span>
            <button disabled={props.isDisable} onClick={props.callBack}>{props.name}</button>
        </span>
    );
};





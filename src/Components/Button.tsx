import React from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
}
export const Button:React.FC<ButtonProps> = (props:ButtonProps) => {

    return (
        <span>
            <button onClick={props.callBack}>{props.name}</button>
        </span>
    );
};





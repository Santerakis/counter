import React from 'react';

type DisplayProps = {
    value: number
    maxValue: number
}
export const Display = (props: DisplayProps) => {
    return (
        <div className={props.value===5 ?'red' :''}>
            {props.value}
        </div>
    );
};





import React from 'react';

type DeviceProps = {
    value: number
}
export const Display = (props: DeviceProps) => {
    return (
        <div className={props.value===5 ?'red' :''}>
            {props.value}
        </div>
    );
};





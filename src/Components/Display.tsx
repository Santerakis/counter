import React from 'react';

type DeviceProps = {
    value: number
}
export const Display = (props: DeviceProps) => {
    return (
        <div>
            {props.value}
        </div>
    );
};





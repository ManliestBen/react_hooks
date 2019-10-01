import React, {useState} from 'react';
import Battery from '../Battery/Battery';

function BatteryHookContainer() {
    const arr = useState(.55);
    const level = arr[0];
    const setLevel = arr[1];
    return (
    <Battery level={level} />
    )
}

export default BatteryHookContainer;
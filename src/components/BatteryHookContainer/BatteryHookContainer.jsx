import React, {useState, useEffect} from 'react';
import Battery from '../Battery/Battery';
import {register, unregister} from '../../utils/battery';


function BatteryHookContainer() {
    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    });

    useEffect(() => {
        register(updateBattery);
        return () => {
            unregister(updateBattery);
        }
    });
    
    function updateBattery(data) {
        setBatteryData(data);
    }
    return (
        <>
          <Battery 
          level={batteryData.level}
          charging={batteryData.charging}
          />
        </>
    );
}

export default BatteryHookContainer;
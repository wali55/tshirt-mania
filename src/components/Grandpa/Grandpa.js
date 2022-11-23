import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'diamond ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className="grandpa">
                <h3>Grandpa</h3>
                <button onClick={handleBuyAHouse}>Buy a house</button>
                <p>House: {house}</p>
                <div style={{display: 'flex'}}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
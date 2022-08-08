import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // const ring = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            {/* <small>Special: {ring}</small> */}
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Special;
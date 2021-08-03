import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h2>Shipment: {category}</h2>
            <hr />
        </div>
    );
};

export default Shipment;
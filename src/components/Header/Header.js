import React, {useContext} from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h2>Header : {category}</h2>
            <button onClick={() => setCount("Laptop")}>Laptop</button>
            <button onClick={() => setCount("Mobile")}>Mobile</button>
            <button onClick={() => setCount("Camera")}>Camera</button>
            <button onClick={() => setCount("")}>Reset</button>
            <hr />
        </div>
    );
};

export default Header;
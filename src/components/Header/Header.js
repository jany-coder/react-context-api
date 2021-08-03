import React, {useContext} from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h2>Header : {category}</h2>
            <button onClick={() => setCount(category + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <hr />
        </div>
    );
};

export default Header;
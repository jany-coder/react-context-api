import React from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h2>Header : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <hr />
        </div>
    );
};

export default Header;
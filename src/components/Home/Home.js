import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from './../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>Home (Parent): {category}</h1>
            <Categories></Categories>
            <hr />
        </div>
    );
};

export default Home;
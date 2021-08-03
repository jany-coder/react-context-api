import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from './../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h2>Home : {category}</h2>
            <Categories></Categories>
            <hr />
        </div>
    );
};

export default Home;
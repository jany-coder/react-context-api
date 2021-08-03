import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
  const category = useContext(CategoryContext)
    return (
        <div>
            <h3>CategoryDetail (grand-child) : {category}</h3>
        </div>
    );
};

export default CategoryDetail;
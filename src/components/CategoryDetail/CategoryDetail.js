import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
  const category = useContext(CategoryContext)
    return (
        <div>
            <h2>CategoryDetail : {category}</h2>
        </div>
    );
};

export default CategoryDetail;
import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
  const category = useContext(CategoryContext)

  const {name} = props.product;


    return (
        <div>
            <h3>This is your category detail</h3>
            <h3>Selected Product : {category}</h3>
            <p>{name}</p>
        </div>
    );
};

export default CategoryDetail;
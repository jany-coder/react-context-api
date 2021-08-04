import React, { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{ name: 'Lenove', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' },
{ name: 'Samsung', category: 'mobile' }, { name: 'Xiaomi', category: 'mobile' }, { name: 'Apple', category: 'mobile' },
{ name: 'Canon', category: 'camera' }, { name: 'Nikon', category: 'camera' }, { name: 'Sony', category: 'camera' }]

const Categories = () => {
    const [category] = useContext(CategoryContext);

    const [products, setProducts] = useState([]);

    console.log("product",products)

    useEffect(() => {
       const matchedProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
       setProducts(matchedProduct)
    }, [category])
    return (
        <div>
            <h2>Select your category: {category} </h2>
            { 
                products.map((pd, index) => <CategoryDetail key={index} product={pd} />)
            }
        </div>
    );
};

export default Categories;
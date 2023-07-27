import React from 'react';
import SingleFeature from '../../components/singleFeature/SingleFeature';
import { singleProduct } from '../../Data';

const Product = () => {
    return (
        <div>
            <SingleFeature singleData={singleProduct} />
        </div>
    );
};

export default Product;
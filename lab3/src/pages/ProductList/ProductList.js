
import React from 'react';
import { Card as ProductCard } from '../../reusableCompnent/Card';
import productData from '../../assets/Products.json';

function ProductList() {
    const products = productData.products;
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
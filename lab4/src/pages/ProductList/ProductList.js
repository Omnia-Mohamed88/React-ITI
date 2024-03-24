
import React from 'react';
import { Card as ProductCard } from '../../reusableCompnent/Card';
import productData from '../../assets/Products.json';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products";


function ProductList() {
    const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (!Array.isArray(productsList)) {
    return null;
  }

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
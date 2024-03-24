
import React from 'react';
import { useParams } from 'react-router-dom';
// import productData from '../../assets/Products.json';
import { Card as ProductCard } from '../../reusableCompnent/Card';
import './ProductDetails.css'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/slices/products";

function ProductDetails() {
    const { productId } = useParams();
    const productIdNumber = parseInt(productId);
    const product = productData.products.find(product => product.id === productIdNumber);
    const btn = "Add to cart";
    const { productsList, isLoading } = useSelector((state) => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProduct(id));
    }, [dispatch, id]);
    console.log(productsList);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
   
    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>{product.title}</h2>
                    <img src={product.thumbnail} alt={product.name} />
                    <div>
                        {product.images.map((image, index) => (
                            <img key={index} className='smallimages' src={image} alt={`${product.name}`} />
                        ))}
                    </div>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;


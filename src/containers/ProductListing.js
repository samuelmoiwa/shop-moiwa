import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const URL = 'https://fakestoreapi.com/products';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const response = await axios
      .get(URL)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('Products :', products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;

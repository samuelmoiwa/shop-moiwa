/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import backArrow from './back_arrow.png';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsActions';

const URL = 'https://fakestoreapi.com/products/';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(URL + id)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };

  const navigateBack = useHistory();

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <img src={backArrow} alt="back" className="back_arrow" onClick={() => navigateBack.goBack()} />
          <div className="ui two column stackable center aligned grid testF">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="product" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">
                    $
                    {price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

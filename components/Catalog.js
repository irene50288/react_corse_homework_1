import ProductCard from "./ProductCard";
import React, {Component} from "react";
import PropTypes from 'prop-types';

class Catalog extends Component {

  render() {
    const products = this.props.products;
    return (
      <ul>
        {
          products.map(product => {
            return <li key = {product.id}><ProductCard product={product}/></li>
          })
        }
      </ul>
    )
  }
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired
};

export default Catalog;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '~src/components/pages/shared/Image';
import TextBox from '~src/components/pages/shared/TextBox';
import Price from '~src/components/pages/shared/Price';
import cartContext from '~src/helpers/contexts/CartContext';


class CartProductCard extends Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        <TextBox text={product.title} id={product.id}/>
        <Price price={product.price}/>
        <Image photos={product.photos}/>
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart, removeFromCart}) => (
              <button onClick={() => removeFromCart(product.id) }>Remove from cart</button>
            )
          }
        </cartContext.Consumer>

      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
  }),
};

export default CartProductCard;

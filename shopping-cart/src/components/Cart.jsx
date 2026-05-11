import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cartSlice';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name} (${item.price}) x {item.quantity} = ${item.price * item.quantity}</span>
          <div>
            <button onClick={() => dispatch(updateQuantity({id: item.id, amount: 1}))}>+</button>
            <button onClick={() => dispatch(updateQuantity({id: item.id, amount: -1}))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <h3>Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
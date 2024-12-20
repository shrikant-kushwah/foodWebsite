import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = ({price}) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Total Price Calculation with safe handling
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.price || 0; 
    const quantity = item.quantity || 0; 
    return total + price * quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* If cart is empty */}
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl text-gray-600 mb-4">Your cart is empty!</h2>
              <p className="text-gray-500">Add some delicious items to your cart and come back!</p>
            </div>
          ) : (
            <div>
              {/* Cart Items Section */}
              <div className="flex flex-col items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Items in Cart</h2>
                <button
                  onClick={handleClearCart}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
                >
                  Clear Cart
                </button>
              </div>

              {/* Cart Items List */}
              <ItemList items={cartItems} />

              {/* Total Price & Checkout Button */}
              <div className="flex justify-between items-center mt-8 border-t pt-4">
                <h3 className="text-xl font-semibold text-gray-800">Total: ₹ {totalPrice}</h3>
                <button
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

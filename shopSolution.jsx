// This React component represents a simple shopping cart application.

// ShoppingCart component takes a prop 'availableItems' which is an array of objects representing available items in the store.
function ShoppingCart({ availableItems }) {
  const { Button } = ReactBootstrap;

  // State variables for managing stock and cart using React.useState
  const [stock, setStock] = React.useState(availableItems);
  const [cart, setCart] = React.useState([]);

  // Function to handle adding an item to the cart
  const moveToCart = (e) => {
    // Extract the product name and the number of items in stock from the button's innerHTML
    let [product, numInStock] = e.target.innerHTML.split(':');

    // Check if the number of items in stock is greater than 0, if not, return (no items to add)
    if (numInStock <= 0) return; // zero items in stock

    // Find the item in the stock based on the clicked product
    let item = stock.filter((item) => item.product === product);

    // Create a new array with updated stock counts
    let newStock = stock.map((item) => {
      if (item.product === product) {
        item.inStock--;
      }
      return item;
    });

    // Updating the stock state with the new stock array
    setStock([...newStock]);

    // Updating the cart state by adding the selected item
    setCart([...cart, ...item]);

    // Logging the current cart contents
    console.log(`Cart: ${JSON.stringify(cart)}`);
  };

  // Generate buttons for available items in the store
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );
  });

  // Note: React requires a single Parent element, that's why we use <> (React.Fragment)
  return (
    <>
      <ul key="stock" style={{ listStyleType: 'none' }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      {/* Render the Cart component and pass the 'cart' state as 'cartitems' prop */}
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}

// Cart component represents the items added to the cart.
function Cart({ cartitems }) {
  const { Button } = ReactBootstrap;

  // Log that the Cart component is being rendered
  console.log('rendering Cart');

  // Generate buttons for each item in the cart
  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button id={item.product} key={index}>
        {item.product}
      </Button>
    );
  });

  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
      {availableItemsButtons}
    </ul>
  );
}

// Initial available items in the store
const availableItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];

// Render the ShoppingCart component with the availableItems prop into the HTML element with the id 'root'
ReactDOM.render(<ShoppingCart availableItems={availableItems} />, document.getElementById('root'));

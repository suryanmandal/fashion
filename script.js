const cartItems = [];
    let total = 0;

    function addToCart(productName, price) {
      cartItems.push({ name: productName, price: price });
      total += price;

      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart-items');
      const totalElement = document.getElementById('cart-total');

    
      cartList.innerHTML = '';

     
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: Rs.${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
      });

    
      totalElement.textContent = total.toFixed(2);
    }
  
  function addToCart(name, price) {
    const item = { name, price };

  
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);
    params.append('cart', JSON.stringify(item));

   
    currentUrl.search = params.toString();
    window.history.pushState({}, '', currentUrl);

   
    updateCartDisplay();
  }
 function updateCartDisplay() {
    
  }

  
  updateCartDisplay();


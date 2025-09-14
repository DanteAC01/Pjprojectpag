
// Guardar y redirigir al carrito
function addToCartAndGo(name, price) {
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
   cart.push({ name, price });
   localStorage.setItem("cart", JSON.stringify(cart));
   window.location.href = "/pages/shopping.html"; // tu página de carrito
}

// Renderizar carrito en shopping.html
function renderCart() {
   const cartItems = document.getElementById("cart-items");
   const cartTotal = document.getElementById("cart-total");
   if (!cartItems) return;

   let cart = JSON.parse(localStorage.getItem("cart")) || [];
   cartItems.innerHTML = "";
   let total = 0;

   cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="flex justify-between items-center border-b border-gray-200 pb-3">
          <div>
            <h3 class="font-semibold text-gray-800">${item.name}</h3>
            <p class="text-yellow-600">S/. ${item.price}</p>
          </div>
          <button onclick="removeFromCart(${index})" 
            class="text-red-500 hover:text-red-700">Eliminar</button>
        </div>
      `;
   });

   cartTotal.textContent = `S/. ${total}`;
}

// Eliminar producto
function removeFromCart(index) {
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
   cart.splice(index, 1);
   localStorage.setItem("cart", JSON.stringify(cart));
   renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);


  function openRegisterModal() {
    document.getElementById("registerModal").classList.remove("hidden");
  }

  function closeRegisterModal() {
    document.getElementById("registerModal").classList.add("hidden");
  }

  function registerAndCheckout() {
    closeRegisterModal();
    alert("🎉 ¡Gracias por registrarte!. Se enviará un correo con la confirmación de su cuenta.");
  }

        // Variables globales
        let products = [];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCartUI();
            setupFormValidation();
        });

        // Cargar productos desde API
        async function loadProducts() {
            try {
                const response = await fetch('https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font');
                products = await response.json();
                displayProducts();
                document.getElementById('loading').style.display = 'none';
            } catch (error) {
                console.error('Error cargando productos:', error);
                document.getElementById('loading').innerHTML = 'Error cargando productos. Intenta de nuevo más tarde.';
            }
        }

        // Mostrar productos
        function displayProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: contain;" 
                             onerror="this.style.display='none'; this.parentElement.innerHTML='📱'">
                    </div>
                    <div class="product-info">
                        <div class="product-title">${product.title.substring(0, 50)}...</div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            Agregar al carrito
                        </button>
                    </div>
                `;
                grid.appendChild(productCard);
            });
        }

        // Agregar al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            showNotification('Producto agregado al carrito');
        }

        // Actualizar UI del carrito
        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

            updateCartModal();
        }

        // Actualizar modal del carrito
        function updateCartModal() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
                cartTotal.textContent = 'Total: $0';
                return;
            }

            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title.substring(0, 30)}...</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <input type="number" class="quantity" value="${item.quantity}" min="1" 
                                   onchange="setQuantity(${item.id}, this.value)">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
                `;
                cartItems.appendChild(cartItem);
            });

            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        }

        // Actualizar cantidad
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartUI();
                }
            }
        }

        // Establecer cantidad
        function setQuantity(productId, quantity) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = Math.max(1, parseInt(quantity) || 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartUI();
            }
        }

        // Eliminar del carrito
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            showNotification('Producto eliminado del carrito');
        }

        // Toggle carrito
        function toggleCart() {
            const modal = document.getElementById('cartModal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }

        // Finalizar compra
        function checkout() {
            if (cart.length === 0) {
                showNotification('Tu carrito está vacío', 'error');
                return;
            }

            if (confirm('¿Confirmas tu compra?')) {
                cart = [];
                localStorage.removeItem('cart');
                updateCartUI();
                toggleCart();
                showNotification('¡Compra realizada con éxito!');
            }
        }

        // Mostrar notificación
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            if (type === 'error') {
                notification.style.background = '#ff4757';
            }
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

       

        // Cerrar modal al hacer clic fuera
        document.getElementById('cartModal').addEventListener('click', function(e) {
            if (e.target === this) {
                toggleCart();
            }
        });

    
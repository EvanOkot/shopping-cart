document.addEventListener('DOMContentLoaded', () => {
    updateTotal();

    // Attach event listeners to buttons
    document.querySelectorAll('.increase, .decrease, .delete, .like').forEach(button => {
        button.addEventListener('click', function(event) {
            const cartItem = this.closest('.cart-item');
            const quantitySpan = cartItem.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent, 10);

            switch (this.className) {
                case 'increase':
                    quantitySpan.textContent = quantity + 1;
                    break;
                case 'decrease':
                    if (quantity > 1) {
                        quantitySpan.textContent = quantity - 1;
                    }
                    break;
                case 'delete':
                    cartItem.remove();
                    break;
                case 'like':
                    this.classList.toggle('liked');
                    break;
            }
            updateTotal();
        });
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
            total += price * quantity;
        });
        document.getElementById('total-price').textContent = total.toFixed(2);
    }
});

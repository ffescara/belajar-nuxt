import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as { id: number; name: string; price: number; quantity: number }[],
  }),
  actions: {
    addToCart(product: { id: number; name: string; price: number }) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
  getters: {
    totalPrice: (state) =>
      state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
});

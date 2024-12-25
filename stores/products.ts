import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Produk A', price: 50000, stock: 10 },
      { id: 2, name: 'Produk B', price: 75000, stock: 8 },
      { id: 3, name: 'Produk C', price: 100000, stock: 5 },
    ],
  }),
  actions: {
    addProduct(product: { id: number; name: string; price: number; stock: number }) {
      this.products.push(product);
    },
    updateStock(productId: number, quantity: number) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        product.stock -= quantity;
      }
    },
  },
  getters: {
    availableProducts: (state) => state.products.filter((product) => product.stock > 0),
  },
});

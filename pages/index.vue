<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { useCartStore } from '~/stores/cart';

const productsStore = useProductsStore();
const cartStore = useCartStore();

const addToCart = (product: { id: number; name: string; price: number }) => {
  cartStore.addToCart(product, 1);
  productsStore.updateStock(product.id, 1);
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Daftar Produk</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="product in productsStore.availableProducts"
        :key="product.id"
        class="p-4 bg-white shadow rounded"
      >
        <h3 class="text-lg font-bold">{{ product.name }}</h3>
        <p>Harga: Rp{{ product.price }}</p>
        <p>Stok: {{ product.stock }}</p>
        <button
          class="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          :disabled="product.stock <= 0"
          @click="addToCart(product)"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  </div>
</template>

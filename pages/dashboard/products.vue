<script setup lang="ts">
import { useProductsStore } from '~/stores/products';

definePageMeta({
  middleware: 'auth',
});

const productsStore = useProductsStore();

const newProduct = {
  id: 0,
  name: '',
  price: 0,
  stock: 0,
};

const addProduct = () => {
  if (newProduct.name && newProduct.price > 0 && newProduct.stock > 0) {
    productsStore.addProduct({
      id: Date.now(),
      name: newProduct.name,
      price: newProduct.price,
      stock: newProduct.stock,
    });
    newProduct.name = '';
    newProduct.price = 0;
    newProduct.stock = 0;
  }
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Manajemen Produk</h2>
    <form @submit.prevent="addProduct" class="mb-4">
      <div class="mb-2">
        <label class="block font-bold">Nama Produk</label>
        <input
          v-model="newProduct.name"
          type="text"
          class="w-full border px-3 py-2 rounded"
        />
      </div>
      <div class="mb-2">
        <label class="block font-bold">Harga</label>
        <input
          v-model.number="newProduct.price"
          type="number"
          class="w-full border px-3 py-2 rounded"
        />
      </div>
      <div class="mb-2">
        <label class="block font-bold">Stok</label>
        <input
          v-model.number="newProduct.stock"
          type="number"
          class="w-full border px-3 py-2 rounded"
        />
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Tambah Produk
      </button>
    </form>

    <table class="w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-4 py-2">Nama Produk</th>
          <th class="border border-gray-300 px-4 py-2">Harga</th>
          <th class="border border-gray-300 px-4 py-2">Stok</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsStore.products" :key="product.id">
          <td class="border border-gray-300 px-4 py-2">{{ product.name }}</td>
          <td class="border border-gray-300 px-4 py-2">Rp{{ product.price }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

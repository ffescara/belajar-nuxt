<script setup lang="ts">
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Keranjang</h2>

      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Produk</th>
            <th class="border border-gray-300 px-4 py-2 text-right">Harga</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Jumlah</th>
            <th class="border border-gray-300 px-4 py-2 text-right">Subtotal</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartItems" :key="item.id">
            <td class="border border-gray-300 px-4 py-2">{{ item.name }}</td>
            <td class="border border-gray-300 px-4 py-2 text-right">Rp{{ item.price }}</td>
            <td class="border border-gray-300 px-4 py-2 text-center">{{ item.quantity }}</td>
            <td class="border border-gray-300 px-4 py-2 text-right">
              Rp{{ item.price * item.quantity }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button
                @click="cartStore.removeFromCart(item.id)"
                class="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="cartStore.cartItems.length">
          <tr>
            <th colspan="3" class="text-right border-t border-gray-300 px-4 py-2">Total</th>
            <th class="text-right border-t border-gray-300 px-4 py-2">
              Rp{{ cartStore.totalPrice }}
            </th>
          </tr>
        </tfoot>
      </table>

      <div v-if="cartStore.cartItems.length" class="text-right">
        <NuxtLink
          to="/checkout"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lanjut ke Checkout
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

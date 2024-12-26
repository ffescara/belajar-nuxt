<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { useRouter } from '#app';
import { useFetch } from '#app';

const cartStore = useCartStore();
const router = useRouter();

const completeCheckout = async () => {
  if (cartStore.cartItems.length === 0) {
    alert('Keranjang kosong!');
    return;
  }

  const transactionData = {
    items: cartStore.cartItems,
    total: cartStore.totalPrice,
  };

  try {
    const response = await $fetch('/api/transactions', {
      method: 'POST',
      body: transactionData,
    });

    if (response.success) {
      cartStore.clearCart(); // Kosongkan keranjang
      alert('Transaksi berhasil!');
      router.push('/');
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    alert('Gagal menyelesaikan transaksi!');
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Checkout</h2>

      <table class="w-full border-collapse border border-gray-300 mb-4">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Produk</th>
            <th class="border border-gray-300 px-4 py-2 text-right">Harga</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Jumlah</th>
            <th class="border border-gray-300 px-4 py-2 text-right">Subtotal</th>
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
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3" class="text-right border-t border-gray-300 px-4 py-2">Total</th>
            <th class="text-right border-t border-gray-300 px-4 py-2">
              Rp{{ cartStore.totalPrice }}
            </th>
          </tr>
        </tfoot>
      </table>

      <button
        @click="completeCheckout"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Selesaikan Pembelian
      </button>
    </div>
  </div>
</template>

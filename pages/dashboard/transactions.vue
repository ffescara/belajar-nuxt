<script setup lang="ts">
const { data: transactions } = await useFetch('/api/transactions');
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Riwayat Transaksi</h2>

      <table class="w-full border-collapse border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2">ID</th>
            <th class="border border-gray-300 px-4 py-2">Tanggal</th>
            <th class="border border-gray-300 px-4 py-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td class="border border-gray-300 px-4 py-2">{{ transaction.id }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ new Date(transaction.date).toLocaleString() }}</td>
            <td class="border border-gray-300 px-4 py-2 text-right">Rp{{ transaction.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

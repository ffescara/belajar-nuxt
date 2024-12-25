<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useRouter } from '#app';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<template>
  <div class="min-h-screen flex">
    <aside class="w-64 bg-gray-800 text-white">
      <nav class="p-4">
        <ul>
          <li class="mb-2">
            <NuxtLink to="/dashboard" class="block py-2 px-3 bg-blue-600 rounded">Dashboard</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/dashboard/products" class="block py-2 px-3 hover:bg-blue-500 rounded">
              Produk
            </NuxtLink>
          </li>
          <li class="mb-2">
            <button
              @click="logout"
              class="block py-2 px-3 text-left w-full bg-red-600 hover:bg-red-700 rounded"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>

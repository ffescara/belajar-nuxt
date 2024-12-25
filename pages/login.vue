<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useRouter } from '#app';

const authStore = useAuthStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const login = () => {
  if (username.value === 'admin' && password.value === 'admin') {
    authStore.login('admin', 'admin'); // username: admin, role: admin
    router.push('/dashboard');
  } else {
    errorMessage.value = 'Username atau password salah!';
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block font-bold mb-1">Username</label>
          <input
            v-model="username"
            type="text"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block font-bold mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return navigateTo('/');
  }

  // Tambahan: cek role jika halaman tertentu hanya untuk admin
  if (to.path.startsWith('/dashboard') && !authStore.isAdmin) {
    return navigateTo('/');
  }
});

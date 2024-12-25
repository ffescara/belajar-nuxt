<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl">Toko Online</h1>
      <nav>
        <NuxtLink to="/" class="mr-4">Home</NuxtLink>
        <NuxtLink to="/cart" class="bg-white text-blue-600 px-3 py-1 rounded">
          Keranjang
        </NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

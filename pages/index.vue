<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w[1200px] mx-auto px-2">
      <div
        v-if="products"
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
  {
    id: 1,
    title: "Title 1",
    description: "This is Description for product 1",
    url: "https://picsum.photos/id/20/800/800",
    price: 999,
  },
  {
    id: 2,
    title: "Title 2",
    description: "This is Description for product 2",
    url: "https://picsum.photos/id/6/800/800",
    price: 999,
  },
  {
    id: 3,
    title: "Title 3",
    description: "This is Description for product 3",
    url: "https://picsum.photos/id/7/800/800",
    price: 999,
  },
  {
    id: 4,
    title: "Title 4",
    description: "This is Description for product 4",
    url: "https://picsum.photos/id/70/800/800",
    price: 999,
  },
  {
    id: 5,
    title: "Title 5",
    description: "This is Description for product 5",
    url: "https://picsum.photos/id/8/800/800",
    price: 999,
  },
  {
    id: 6,
    title: "Title 6",
    description: "This is Description for product 51",
    url: "https://picsum.photos/id/8/800/800",
    price: 999,
  },
  {
    id: 7,
    title: "Title 7",
    description: "This is Description for product 51",
    url: "https://picsum.photos/id/80/800/800",
    price: 999,
  },
  {
    id: 8,
    title: "Title 8",
    description: "This is Description for product 51",
    url: "https://picsum.photos/id/70/800/800",
    price: 999,
  },
  {
    id: 9,
    title: "Title 9",
    description: "This is Description for product 51",
    url: "https://picsum.photos/id/170/800/800",
    price: 999,
  },
];
</script>


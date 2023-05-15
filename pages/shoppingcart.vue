<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img class="mx-auto" width="250" src="/cart-empty.png" alt />

          <div class="text-xl text-center mt-4">No items yet?</div>

          <div v-if="true" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >Sign in</NuxtLink>
          </div>
        </div>
      </div>

      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
          </div>

          <div class="bg-[#feeeef] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item</div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products" :key="product">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $
                <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="flex items-center justify-center bg-[#fd374f] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >Checkout</button>
          </div>

          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards" :key="card">
                <img class="h-6" :src="card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const cards = ref(["visa.png", "mastercard.png", "paypal.png", "applepay.png"]);

const products = [
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
    price: 299,
  },
];

const totalPriceComputed = computed(() => {
  let price = 0;

  userStore.cart.forEach((item) => {
    price += item.price;
  });

  return price / 100;
});

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e);
    return;
  }

  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e);
    } else {
      selectedArray.value.splice(index, 1);
    }
  });
};
const goToCheckout = () => {
  let ids = [];
  userStore.checkout = [];
  selectedArray.value.forEach((item) => ids.push(item.id));

  let result = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1;
  });
  // toRaw is used to convert reactive object to normal object, removes the need for .value in reactive objects
  result.forEach((item) => userStore.checkout.push(toRaw(item)));

  return navigateTo("/checkout");
};
</script>


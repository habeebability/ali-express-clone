<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>

            <div v-if="true">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <Icon name="mdi:plus" size="18" class="mr-2" />Update Address
              </NuxtLink>

              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>

                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact name:</div>
                    <div class="font-bold">{{ "TEST" }}</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">{{ "TEST" }}</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Zip code:</div>
                    <div class="font-bold">{{ "TEST" }}</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>CITY:</div>
                    <div class="font-bold">{{ "TEST" }}</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>COUNTRY:</div>
                    <div class="font-bold">{{ "TEST" }}</div>
                  </li>
                </ul>
              </div>
            </div>

            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />Add New Address
            </NuxtLink>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products" :key="product">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-">
              <div>Total Shipping</div>
              <div>Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $
                <span class="font-extrabold">{{ total/100 }}</span>
              </div>
            </div>
            <form @submit.prevent="pay">
              <div class="border border-gray-500 p-2 rounded-sm" id="card-element" />

              <p id="card-error" role="alert" class="text-red-700 text-center font-bold" />

              <button
                id="submit"
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#fe630c] to-[#ff3200] text-white font-semibold w-full text-[21px] p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70 cursor-not-allowed' : 'opacity-100'"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />

                <div v-else>Place Order</div>
              </button>
            </form>
          </div>

          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semi-bold mb-2 mt-2">AliExpress</div>
            <p class="my-2">AliExpress Keeps your information and payment safe</p>
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

const route = useRoute();

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

onMounted(() => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInit();
    }
  }
);

const stripeInit = async () => {};
const pay = async () => {};
const createOrder = async (stripeId) => {};
const showError = async (errorMsgText) => {};

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
</script>
  
  
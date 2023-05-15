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
                  <div class="flex items-center gap-2"></div>
                </ul>
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
  
  
<template>
  <MainLayout>
    <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-white rounded-lg p-3">
        <div class="text-xl text-bold mb-2">Address Details</div>

        <form @submit.prevent="submit">
          <TextInput
            class="w-full"
            placeholder="Contact Name"
            v-model:input="contactName"
            inputType="text"
            :error="error && error.type == 'contactName' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Address"
            v-model:input="address"
            inputType="text"
            :error="error && error.type == 'address' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Zip Code"
            v-model:input="zipCode"
            inputType="text"
            :error="error && error.type == 'zipCode' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="City"
            v-model:input="city"
            inputType="text"
            :error="error && error.type == 'city' ? error.message : ''"
          />
          <TextInput
            class="w-full mt-2"
            placeholder="Country"
            v-model:input="country"
            inputType="text"
            :error="error && error.type == 'country' ? error.message : ''"
          />

          <button
            :disabled="isWorking"
            type="submit"
            class="mt-6 bg-gradient-to-r from-[#fe630c] to-[#ff3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
          >
            <div v-if="!isWorking">Update Address</div>
            <Icon v-else name="eos-icons:loading" size="25" class="mr-2" />
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const zipCode = ref("");
const city = ref("");
const country = ref("");
const address = ref("");
const contactName = ref("");

const currentAddress = ref(null);
const error = ref(null);
const isWorking = ref(false);
const isUpdate = ref(false);

watchEffect(() => {
  userStore.isLoading = false;
});

const submit = async () => {
  isWorking.value = true;
  error.value = null;

  if (!contactName.value) {
    error.value = {
      type: "contactName",
      message: "Contact name is required",
    };
  } else if (!address.value) {
    error.value = {
      type: "address",
      message: "Address is required",
    };
  } else if (!zipCode.value) {
    error.value = {
      type: "zipCode",
      message: "Zip Code is required",
    };
  } else if (!city.value) {
    error.value = {
      type: "city",
      message: "City is required",
    };
  } else if (!country.value) {
    error.value = {
      type: "country",
      message: "Country is required",
    };
  } else if (!contactName.value) {
    error.value = {
      type: "contactName",
      message: "Contact name is required",
    };
  }

  if (error.value) {
    isWorking.value = false;
    return;
  }

  //   more here
};
</script>

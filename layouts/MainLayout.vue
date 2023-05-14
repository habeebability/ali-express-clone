<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
      <ul
        class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#fafafa] max-w-[1200px]"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >Sell on Ali express</li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >Cookie Preferences</li>
        <li class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer">Help</li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer"
        >Buyer Protection</li>

        <li class="px-3 hover:text-[#ff4646] cursor-pointer">
          <Icon name="ic:sharp-install-mobile" size="17" />App
        </li>

        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2.5 hover:text-[#ff4646] cursor-pointer"
          :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' : 'border border-[#fafafa]'"
        >
          Account
          <!-- <Icon name="ph:user-thin" size="15" class="ml-5" /> -->
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />

          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="-translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div
              id="AccountMenu"
              v-show="isAccountMenu"
              class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
            >
              <div v-if="true">
                <div class="text-semibold text-[15px] my-4 px-3">Welcome to AliExpress</div>

                <div class="flex items-center gap-1 px-3 mb-3">
                  <NuxtLink
                    to="/auth"
                    class="bg-[#ff4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
                  >Login / Register</NuxtLink>
                </div>
              </div>

              <!-- Test -->
              <!-- <div class="antialiased font-sans flex justify-center mt-8">
                
                <div class="fixed inset-0" @click="isVisible = false"></div>
                <div
                  class="relative inline-block"
                  @mouseover="isVisible = true"
                  @mouseleave="isVisible = false"
                  @keydown.enter="isVisible = !isVisible"
                >
                  <button
                    type="button"
                    class="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline"
                  >
                    <span class="flex-shrink-0">Menu</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
                      <path
                        :class="{ 'rotate-180': isVisible }"
                        class="transition duration-300 ease-in-out origin-center transform"
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <transition
                    enter-active-class="transition duration-300 ease-out transform"
                    enter-class="-translate-y-3 scale-95 opacity-0"
                    enter-to-class="translate-y-0 scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-class="translate-y-0 opacity-100"
                    leave-to-class="-translate-y-3 opacity-0"
                  >
                    <div v-show="isVisible" class="absolute pt-2">
                      <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                        <div
                          class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
                        ></div>
                        <div class="relative">
                          <a
                            href="#"
                            class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                          >Submenu Link #1</a>
                          <a
                            href="#"
                            class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                          >Submenu Link #2</a>
                          <a
                            href="#"
                            class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                          >Submenu Link #3</a>
                          <a
                            href="#"
                            class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                          >Submenu Link #4</a>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>-->
              <!-- Test end -->

              <div class="border-b" />
              <ul class="bg-white">
                <li
                  @click="navigateTo('/orders')"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
                >My Orders</li>
                <li v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">Sign out</li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </div>

    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div
        class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
      >
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="/AliExpress-logo.png" alt />
        </NuxtLink>
        <div class="max-w-[700px] w-full md:block hidden">
          <div class="relative">
            <div class="flex items-center border-2 border-[#ff4646] rounded-md w-full">
              <input
                type="text"
                class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                placeholder="kitchen accessories"
                v-model="searchItem"
              />

              <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />

              <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#ff4646]">
                <Icon name="ph:magnifying-glass" size="20" color="ffffff" />
              </button>
            </div>

            <div class="absolute bg-white max-w-[700px] h-auto w-full">
              <div v-if="false" class="p-1">
                <NuxtLink
                  to="/item/1"
                  class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <img
                      width="40"
                      src="https://picsum.photos/id/82/300/300"
                      alt
                      class="rounded-md"
                    />
                    <div class="truncate ml-2">TESTING</div>
                  </div>
                  <div class="truncate">$ 98.99</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink to="/shoppingcart" class="flex items-center">
          <button
            class="relative md:block hidden"
            @mouseenter="isCartHover= true"
            @mouseleave="isCartHover = false"
          >
            <span
              class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#ff4646] h-[17px] text-xs text-white px-0.5 rounded-full"
            >0</span>
            <div class="min-w-[40px]">
              <Icon
                name="ph:shopping-cart-simple-light"
                size="33"
                :color="isCartHover ? '#ff4646' : ''"
              />
            </div>
          </button>
        </NuxtLink>

        <button
          @click="userStore.isMenuOverlay = true"
          class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
        >
          <Icon name="radix-icons:hamburger-menu" size="33" />
        </button>
      </div>
    </div>
  </div>

  <Loading v-if="userStore.isLoading" />

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <slot />

  <Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let isAccountMenu = ref(false);
let isCartHover = ref(false);
let isSearching = ref(false);
let searchItem = ref("");
</script>

<style>
</style>
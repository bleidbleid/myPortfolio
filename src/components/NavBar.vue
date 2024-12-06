<template>
  <div class="bg-white font-display relative">
    <div class="max-w-full px-4 md:px-8 lg:px-16">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Toggle menu</span>
            <!-- Icon changes based on open state -->
            <i v-if="!menuOpen" class="burger h-6 w-6 text-black" aria-hidden="true"></i>
          </button>
        </div>

        <!-- Logo and Desktop Links -->
        <div class="flex w-full sm:justify-between justify-center">
          <router-link :to="{ name: 'home' }">
            <i class="block h-8 w-auto lg:hidden">
              <svg
                class="stroke-accent hover:stroke-2 stroke-1 hover:cursor-pointer transition-all duration-300 transform ease"
                width="33" height="33" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.9416 12.1219C26.5046 12.1219 21.0455 11.9139 15.6104 12.1219C13.4529 12.2045 16.4666 31.1565 17.3536 33.1127C19.2391 37.2703 23.4309 39.7026 26.6661 41.1107C27.5994 41.5168 34.4188 45.3542 34.4188 42.1539C34.4188 37.2085 31.5538 32.2835 29.3727 28.7501C25.4569 22.4064 22.5761 17.283 16.0921 18.887C12.6794 19.7312 10.5185 21.5097 10.0826 26.316C9.80168 29.4132 10.565 32.3537 11.7799 34.9146C14.9676 41.6337 19.1368 46.3443 25.0605 46.2635C26.3264 46.2462 30.3176 46.5481 30.1067 43.2919C29.9168 40.3616 28.1182 36.9167 27.079 34.5036C25.219 30.185 22.8966 26.2813 20.8401 22.1431C18.8681 18.175 16.6906 14.5442 14.6241 10.6994C13.0958 7.85577 13.3734 7.23067 15.3352 4.97749C19.2689 0.459541 26.3498 0.651487 31.1159 1.43689C39.7903 2.86633 42.6762 20.0208 42.6762 29.6353C42.6762 30.2065 42.8678 31.7208 42.6074 32.2591C42.3174 32.8586 41.4928 32.2811 41.2541 32.1959C38.9204 31.3634 36.3838 30.1559 34.1895 28.9398C32.1914 27.8325 25.9814 25.189 25.4734 21.1631C25.2745 19.5868 30.2948 19.2746 30.8407 19.2031C34.8424 18.6794 40.9168 17.6255 44.6947 19.9619C49.0832 22.6759 52.7874 28.7546 53.5942 35.3256C54.4105 41.9733 54.5802 50.2135 51.874 56.1266C49.0847 62.221 43.2697 65.5889 38.1346 64.9149C32.0358 64.1144 28.3907 56.4219 25.6569 49.6777C24.0699 45.7627 22.1039 38.7897 22.9274 34.0611C23.997 27.9185 38.1097 26.2828 41.3458 28.7501C42.182 29.3877 43.164 31.3389 43.0891 32.7333C42.9137 35.9959 33.229 35.3788 31.7352 35.4204C21.5719 35.7034 11.6804 30.6992 6.80259 17.5593C5.87845 15.0698 5.29059 12.2328 5.12818 9.43487C5.10629 9.05775 4.98869 6.44281 4.87587 6.84264C4.0832 9.65188 3.75207 12.9456 3.13265 15.8522C0.345211 28.9324 -2.0951 54.4975 12.1699 56.0634C16.9842 56.5919 23.5414 58.2467 24.4183 49.4248C24.945 44.1251 25.7038 37.4331 22.6062 33.2707C19.8918 29.6232 16.0817 27.3008 13.4085 32.0379C12.2335 34.1199 12.6455 36.3363 13.3167 38.6133C15.7822 46.9774 20.0679 53.6685 26.9872 54.1983C28.9121 54.3456 30.8625 54.2299 32.7903 54.2299C36.6268 54.2299 38.8564 52.0287 41.8734 48.7293C47.3026 42.7919 52.4205 35.5807 55.154 26.7902C56.2396 23.2988 57.2168 18.2666 60.5901 18.9819C64.4311 19.7963 64.9312 29.3283 64.971 33.1759C64.9953 35.519 65.2451 36.3543 63.6866 37.5384C60.697 39.8099 57.2014 41.6637 53.8236 42.5016C48.021 43.9411 43.4786 42.0689 39.8779 35.452C39.0689 33.9655 39.3732 31.8178 39.3732 30.0779C39.3732 25.8671 39.3524 22.4564 41.644 19.298C43.9257 16.1533 46.578 14.9671 49.6949 14.9671"
                  stroke-linecap="round" />
              </svg>
            </i>

            <i class="hidden h-8 w-auto lg:block" src="/icon.svg" alt="Maria Bladé">
              <svg
                class="stroke-accent hover:stroke-[#000000] stroke-1 hover:cursor-pointer transition-all duration-300 transform ease"
                width="33" height="33" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.9416 12.1219C26.5046 12.1219 21.0455 11.9139 15.6104 12.1219C13.4529 12.2045 16.4666 31.1565 17.3536 33.1127C19.2391 37.2703 23.4309 39.7026 26.6661 41.1107C27.5994 41.5168 34.4188 45.3542 34.4188 42.1539C34.4188 37.2085 31.5538 32.2835 29.3727 28.7501C25.4569 22.4064 22.5761 17.283 16.0921 18.887C12.6794 19.7312 10.5185 21.5097 10.0826 26.316C9.80168 29.4132 10.565 32.3537 11.7799 34.9146C14.9676 41.6337 19.1368 46.3443 25.0605 46.2635C26.3264 46.2462 30.3176 46.5481 30.1067 43.2919C29.9168 40.3616 28.1182 36.9167 27.079 34.5036C25.219 30.185 22.8966 26.2813 20.8401 22.1431C18.8681 18.175 16.6906 14.5442 14.6241 10.6994C13.0958 7.85577 13.3734 7.23067 15.3352 4.97749C19.2689 0.459541 26.3498 0.651487 31.1159 1.43689C39.7903 2.86633 42.6762 20.0208 42.6762 29.6353C42.6762 30.2065 42.8678 31.7208 42.6074 32.2591C42.3174 32.8586 41.4928 32.2811 41.2541 32.1959C38.9204 31.3634 36.3838 30.1559 34.1895 28.9398C32.1914 27.8325 25.9814 25.189 25.4734 21.1631C25.2745 19.5868 30.2948 19.2746 30.8407 19.2031C34.8424 18.6794 40.9168 17.6255 44.6947 19.9619C49.0832 22.6759 52.7874 28.7546 53.5942 35.3256C54.4105 41.9733 54.5802 50.2135 51.874 56.1266C49.0847 62.221 43.2697 65.5889 38.1346 64.9149C32.0358 64.1144 28.3907 56.4219 25.6569 49.6777C24.0699 45.7627 22.1039 38.7897 22.9274 34.0611C23.997 27.9185 38.1097 26.2828 41.3458 28.7501C42.182 29.3877 43.164 31.3389 43.0891 32.7333C42.9137 35.9959 33.229 35.3788 31.7352 35.4204C21.5719 35.7034 11.6804 30.6992 6.80259 17.5593C5.87845 15.0698 5.29059 12.2328 5.12818 9.43487C5.10629 9.05775 4.98869 6.44281 4.87587 6.84264C4.0832 9.65188 3.75207 12.9456 3.13265 15.8522C0.345211 28.9324 -2.0951 54.4975 12.1699 56.0634C16.9842 56.5919 23.5414 58.2467 24.4183 49.4248C24.945 44.1251 25.7038 37.4331 22.6062 33.2707C19.8918 29.6232 16.0817 27.3008 13.4085 32.0379C12.2335 34.1199 12.6455 36.3363 13.3167 38.6133C15.7822 46.9774 20.0679 53.6685 26.9872 54.1983C28.9121 54.3456 30.8625 54.2299 32.7903 54.2299C36.6268 54.2299 38.8564 52.0287 41.8734 48.7293C47.3026 42.7919 52.4205 35.5807 55.154 26.7902C56.2396 23.2988 57.2168 18.2666 60.5901 18.9819C64.4311 19.7963 64.9312 29.3283 64.971 33.1759C64.9953 35.519 65.2451 36.3543 63.6866 37.5384C60.697 39.8099 57.2014 41.6637 53.8236 42.5016C48.021 43.9411 43.4786 42.0689 39.8779 35.452C39.0689 33.9655 39.3732 31.8178 39.3732 30.0779C39.3732 25.8671 39.3524 22.4564 41.644 19.298C43.9257 16.1533 46.578 14.9671 49.6949 14.9671"
                  stroke-linecap="round" />

                <path d="M31.9416 12.1219C26.5046 12.1219 21.0455 11.9139 ..." stroke-linecap="round" />
              </svg>
            </i>
          </router-link>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :to="{ name: item.to }"
                class="text-md px-3 py-2 hover:italic hover:text-accent hover:cursor-pointer transition-all duration-300 transform ease">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down" mode="out-in">
      <div v-if="menuOpen" class="absolute top-0 left-0 w-full bg-background z-50 sm:hidden navBar-underline ">
        <div class=" px-6 pt-3 pb-3 flex items-center min-h-16">
          <i @click="toggleMenu" class="cross h-6 w-6 p-2 text-black" aria-hidden="true"></i>
          <router-link v-for="item in navigation" :to="{ name: item.to }"
            class="block mt-0 text-md px-3 font-medium hover:italic hover:text-accent hover:cursor-pointer transition-all duration-300 transform ease">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define the state of the menu
const menuOpen = ref(false)

// Toggle the menu state
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Navigation items
const navigation = ref([
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
])
</script>

<style scoped>
/* Animation for slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-down-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.navBar-underline {
    background-image: url(/separator-mobile.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

.burger {
    background-image: url(/Burger.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
.cross {
    background-image: url(/Cross.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>

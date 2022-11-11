<template>
  <Disclosure as="nav" class="bg-transparent font-display" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-[64px] sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <i v-if="!open" class="block fa fa-bars h-6 w-6" aria-hidden="true"></i>
            <i v-else class="block fa fa-bars h-6 w-6" aria-hidden="true"></i>
          </DisclosureButton>
        </div>
        <div class="flex w-full justify-between">
          <router-link :to="{ name: 'home' }" class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="/icon.svg" alt="Maria Bladé" />
            <img class="hidden h-8 w-auto lg:block" src="/icon.svg" alt="Maria Bladé" />
          </router-link>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">

              <router-link v-for="item in navigation" :to="{ name: item.to }" class="text-2xl"
                :class="[item.current ? 'text-accent' : 'text-main hover:text-semantic hover:cursor-pointer', 'px-3 py-2 rounded-md text-sm font-medium']">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'text-accent' : 'text-main hover:text-semantic hover:cursor-pointer', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const myUrl = ref(window.location.href)
const myUrlSplited = myUrl.value.split("/")
const myUrlPosition = myUrlSplited[myUrlSplited.length - 1]

//TODO fer que la logica sigui instantania
const navigation = [
  { name: 'About', to: 'about', current: myUrlPosition === "about" ? true : false },
  { name: 'Projects', to: 'projects', current: myUrlPosition === "projects" ? true : false },
  { name: 'Contact', to: 'contact', current: myUrlPosition === "contact" ? true : false },
]
</script>
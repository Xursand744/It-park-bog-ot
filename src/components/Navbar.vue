<template>
  <div class="bg-[#052d45]">
    <div
      class="container py-1 text-white font-medium flex items-center justify-between h-16"
    >
      <router-link to="/" class="">
        <Icon icon="ph:student" class="text-4xl cursor-pointer mr-4 inline-block" />
      </router-link>
      <div
        :class="close ? 'hidden' : 'grup'"
        class="md:flex md:justify-between md:w-full text-center transition-all
         md:text-start bg-[#052d45] shadow-lg shadow-yellow-50 md:shadow-none 
         sm:rounded-br-2xl h-[50vh] md:h-max sm:w-64 w-full md:static absolute left-0 top-16 pt-3 md:p-0"
      >
        <ul class="md:flex">
          <!-- drapdown -->
          <div class="relative h-full">
            <button
              @click="drapDown = !drapDown"
              class="hover:btnHover btn flex items-center gap-2 justify-center mx-auto md:mx-0"
              
            >
              Kurslar Katalogi <Icon icon="mingcute:down-fill" />
            </button>
            <div
              :class="drapDown ? 'hidden' : 'relative'"
              class="md:absolute left-0 right-0 pt-2 bg-[#052d45] text-white rounded-b-3xl w-full flex flex-col"
            >
              <button class="hover:bg-[#007eb8] rounded-2xl btn">index</button>
              <button class="hover:bg-[#007eb8] rounded-2xl btn">index</button>
              <button class="hover:bg-[#007eb8] rounded-2xl rounded-b-3xl btn">
                index
              </button>
            </div>
          </div>
<!-- drapdown -->





<!-- Dropdown menu -->


          <li>
            <router-link to="/About" class="hover:btnHover btn inline-block">Loyihalar</router-link>
          </li>
          <li>
            <button class="hover:btnHover btn w-max">Video Darsliklar</button>
          </li>
        </ul>
        <ul class="md:flex">
          <li>
            <button class="hover:btnHover btn">Kontaktlar</button>
          </li>
        
        </ul>
      </div>

      <div class="">
        <Icon
          @click="close = !close"
          icon="line-md:close-to-menu-alt-transition"
          class="md:hidden cursor-pointer text-2xl font-medium text-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const close = ref(true);

const drapDown = ref(true);
</script>

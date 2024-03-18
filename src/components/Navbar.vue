<template>
  <div class="bg-black">
    <div
      class="container py-1 text-white font-medium flex items-center justify-between h-16"
    >
      <div>
        <Icon icon="ph:student" class="text-4xl cursor-pointer" />
      </div>
      <div
        :class="close ? 'translate-x-0' : 'how'"
        class="md:flex md:justify-between md:w-full text-center transition-all
         md:text-start bg-black shadow-lg shadow-yellow-50 md:shadow-none 
         sm:rounded-br-2xl h-[50vh] md:h-max sm:w-64 w-full md:static absolute left-0 top-16 pt-3 md:p-0"
      >
        <ul class="md:flex">
          <div class="relative h-full">
            <button
              @click="drapDown = !drapDown"
              class="hover:btnHover btn flex items-center gap-2 justify-center mx-auto md:mx-0"
            >
              Kurslar Katalogi <Icon icon="mingcute:down-fill" />
            </button>
            <div
              :class="drapDown ? 'hidden' : 'relative'"
              class="md:absolute left-0 right-0 pt-2 bg-black text-white rounded-b-3xl w-full flex flex-col"
            >
              <button class="hover:bg-[#09c2faf6] rounded-2xl btn">index</button>
              <button class="hover:bg-[#09c2faf6] rounded-2xl btn">index</button>
              <button class="hover:bg-[#09c2faf6] rounded-2xl rounded-b-3xl btn">
                index
              </button>
            </div>
          </div>

          <li>
            <button class="hover:btnHover btn">Loyihalar</button>
          </li>
          <li>
            <button class="hover:btnHover btn">Bog'lanish</button>
          </li>
        </ul>
        <ul class="md:flex">
          <li>
            <button class="hover:btnHover btn w-max">Ro'yxatdan o'tish</button>
          </li>
          <li>
            <button class="hover:btnHover btn w-max">Login</button>
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

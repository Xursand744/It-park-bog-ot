<template>
  <div>
    <!-- header start -->
    <div
      class="bg-[url('https://i.pinimg.com/originals/32/7b/2b/327b2bd5e15f14babee855b74ee4549b.gif')] bg-no-repeat bg-cover h-[90vh]"
    >
      <div class="container flex items-center justify-center flex-grow-1 h-full">
        <div class="text-center">
          <h1
            class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Zamonaviy IT Kurslari
          </h1>
          <button class="hover:btnHover btn border rounded-xl">Kursga yozilish</button>
        </div>
      </div>
    </div>
<!-- header end -->

<!-- coursel start -->

<swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>


<!-- coursel end -->

<!-- section 1 -->
    <div class="dark:bg-[#343a40] bg-slate-200 -z-20 dark:text-black text-white relative after:contnets[url('../../public/wide.png')] after:absolute after:top-0 after:left-0">
      <div
        class="container text-center md:text-start grid grid-cols-1 md:grid-cols-2 h-screen text-white place-items-center"
      >
        <div>
          <img class="absolute lg:top-[15%] top-[25%] left-[30%] -z-10  lg:left-[5%]" src="../../public/wide.png" alt="">
          <h2
            class="text-[#c4c4c5] text-2xl font-medium md:text-4xl lg:text-5xl mb-5 md:mb-[30px] lg:mb-[40px] relative z-10"
          >
            IT Biz bilan yanada qiziq
          </h2>
          <p class=" relative text-[#c4c4c5] font-medium ">
            Zamonaviy it yo'nalishlarini biz bilan o'rganing shuningdek tajribali
            Mentorlardan ta'lim oling va kelajakingizni quring Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem temporibus excepturi nobis repudiandae
            placeat natus possimus quisquam culpa, ullam quo corporis aliquid.
          </p>
        </div>
        <div class=""> 
          <img  src="https://it-park.uz/../images/startup-ac.png" alt="" />
        </div>
      </div>
    </div>
<!-- section 1 -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
// import './style.css';
const  modules = ref([Autoplay,  Navigation])
</script>

<style lang=""></style>

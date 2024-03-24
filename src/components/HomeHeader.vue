<template>
  <!-- -=-==-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- header start -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->

  <div class="bg-[url('https://i.pinimg.com/originals/32/7b/2b/327b2bd5e15f14babee855b74ee4549b.gif')] bg-no-repeat bg-cover h-[90vh]"
  >
    <div class="container flex items-center justify-center flex-grow-1 h-full">
      <div class="text-center">
        <h1
          class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-9"
        >
          Zamonaviy IT Kurslari
        </h1>
        <burron @click="call = !call" class="hover:btnHover btn border rounded-xl hover:w-max cursor-pointer">
          Kursga yozilish
        </burron>
      </div>
    </div>
  </div>

  <!---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-==- header end -=-==-=--=-=-=-=-=-=-=-==-=-=--=-=-=-=- -->

  <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-coursel start =-=-=-=-=-=-=-=-=-=-=-=-=-==-==-=-=-->
  
  <div class="max-w-[1600px] mx-auto px-4 ">
    <swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
       
        '415': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '640': {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '800': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '930': {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        '1094': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '1324': {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        '1600': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        '1700': {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper -mt-10 mb-5 h-52"
    >
      <swiper-slide v-for="item in items" :key="item.id" class="max-w-[330px] h-[190px]">
        <button
          class="relative flex cssbtn transition-all w-full h-full  rounded-2xl overflow-hidden"
        >
          <div class="w-full h-full">
            <img
              class="relative w-full h-full object-cover flex cssimg transition-transform"
              :src="item.img"
              alt=""
            />
            <p
              class="text-2xl absolute top-0 right-0 left-0 font-medium text-[#fff] mt-5"
            >
              {{ item.name }}
            </p>
          </div>
          <div
            class="absolute h-full w-full flex flex-col justify-center csstext csswrap transition-all"
          >
            <p class="font-medium text-[#dddada]">{{ item.text }}</p>
          <Icon icon="material-symbols:bottom-right-click" class="text-3xl text-[#dddada] mx-auto mt-4" />
          </div>
        </button>
      </swiper-slide>
    </swiper>
  </div>
  <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=- coursel end -=-=-=--=-=-=-=-=-=-=-=-=-==-=-=-=-=-= -->

      <!-- -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-==- 1 Section -=-==-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=- -->
  
  <div class=" bg-[#343a40]  py-[20px] md:py-[50px] lg:py-[100px] lg:px-[100px]">
    <div class="flex flex-col md:flex-row gap-9 md:justify-between container">
      <div class="max-w-[650px] mb-3 md:m-0 text-center md:text-start">
        <h2 class="md:text-4xl text-3xl  text-white font-medium  mt-3 md:mt-0">Bizdan <mark class="px-2 "> ta'lim</mark> olgan talabalar Qanday ko'nikmalarga ega bo'lishadi ?</h2>
        <p class="text-lg mt-6 text-white ">
        Bizda eng tajribali Mentorlar dars berishadi ular ko'pgina loyhalarda ishtirok
         etishgan va ishtirok etib kelishmoqda, Mentorlarimiz hozirda eng takommilashgan
          texnologiyalarda foydalanishadi va talabalarga o'rgatib kelishadi,    
       </p>
      <div class="text-center md:text-start">
        <span v-for="chec in checs" :key="chec" class="font-medium shadow-xl px-2 py-1 mr-4 inline-block mt-4 rounded-3xl border bg-[#007eb8] text-white">{{ chec }}</span>
      </div>
      </div>
      <div class="w-[220px] mx-auto">
        <div class="relative  flex items-center justify-center w-full">
          <div
            class="relative sm:p-10 p-9 border-2
             border-dashed rounded-full border-spacing-4
              border-gray-400/50"
          >
            <a href="https://github.com/" target="_blank"
              class="profile_item left-[25px] top-[11px] inline-block absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full" src="../../public/git.jpeg" alt="" />
              </span>
            </a>
            <a href="https://www.figma.com/" target="_blank"
              class="inline-block profile_item left-[105px] -top-[22px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full" src="../../public/figma.png" alt="" />
              </span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank"
              class="inline-block profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                    fill="#00acc1"
                  ></path>
                </svg>
              </span>
            </a>
            <a href="https://vuejs.org/" target="_blank"
              class="inline-block profile_item -left-4 top-[88px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img src="../../public/favicon.ico" alt="" />
              </span>
            </a>
            <a href="https://learn.javascript.ru/" target="_blank"
              class="inline-block profile_item -right-3 top-[60px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full" src="../../public/js.jpg" alt="" />
              </span>
            </a>
        
            <a href="https://css-tricks.com/" target="_blank"
              class="inline-block profile_item bottom-[60px] -left-3 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full" src="../../public/css.webp" alt="" />
              </span>
            </a>
            <a href="https://bem-cheat-sheet.9elements.com/" target="_blank"
              class="inline-block profile_item -bottom-1  left-[48px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full h-full w-full" src="../../public/bem.png" alt="" />
              </span>
            </a>
        
            <a href="https://html.com/" target="_blank"
              class="inline-block profile_item bottom-[88px] -right-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="w-full rounded-full" src="../../public/html.png" alt="" />
              </span>
            </a>
            <a href="https://getbootstrap.com/" target="_blank"
              class="inline-block profile_item right-[8%] bottom-3 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full w-full h-full" src="../../public/bootstrap.jpg" alt="" />
              </span>
            </a>
        
            <a href="https://sass-lang.com/" target="_blank"
              class="inline-block profile_item right-[100px] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
              >
                <img class="rounded-full h-full w-full" src="../../public/SCSS-or-CSS.webp" alt="" />
              </span>
            </a>
        
            <a href="#!" target="_blank"
              class="inline-block profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0"
            >
              <div
                class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500"
              >
                <span class="w-[200px] h-[170px] inline-block ">
                  <img class="rounded-full w-full h-full" src="../../public/student.png" alt="">
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <!-- -=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 2 Section -=--=-=-=-=-=-=-=-=-=-=-==-==-==-=-=-=-=-=- -->
<!-- -=-=--==-=-=-= Kursga yozilish-=-=-=-=-=-=-= -->
<div :class="call ? 'hidden' :'fixed'" class=" w-full top-0 bottom-0 z-50 drop-shadow-[0px_100px_100px_#fff]">
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<div class="h-full sm:h-[100vh] bg-inherit flex justify-center py-12 px-4 sm:px-6 lg:px-8 relative items-center">
	<div class="absolute bg-black opacity-60 inset-0 z-0"></div>
	<div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
		<div class="text-center">
            <div @click="call = !call" class="flex justify-end -mr-5 -mt-5 cursor-pointer">
    <Icon icon="mingcute:close-fill"  class="text-3xl" />
            </div>
			<h2 class="mt-2 sm:mt-6 text-lg sm:text-3xl font-bold text-gray-900">
				Bepul konsultatsiya
			</h2>
			<p class="mt-1 sm:mt-2 text-sm text-gray-600">So'rov qoldiring, biz siz bilan tez orada bog'lanamiz</p>
		</div>
		<div class="flex flex-row justify-center items-center space-x-5">
			<span class="w-8 sm:w-11 h-8 sm:h-11 items-center justify-center inline-flex rounded-full font-bold text-lg 
       text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                <Icon icon="skill-icons:instagram" class="w-full h-full rounded-full" />
                </span>
			<span class="w-8 sm:w-11 h-8 sm:h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                <Icon icon="logos:telegram" class="w-full h-full rounded-full" />
                </span>
			<span class="w-8 sm:w-11 h-8 sm:h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-red-500 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                <Icon icon="ph:play-fill" class="w-full h-full rounded-full p-3" />
                </span>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<span class="h-px w-16 bg-gray-300"></span>
			<span class="text-gray-500 font-normal">OR</span>
			<span class="h-px w-16 bg-gray-300"></span>
		</div>
		<form class="mt-6 sm:mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true">
			<div class="relative">
				
				<label class="text-sm font-bold text-gray-700 tracking-wide">Ism</label>
				<input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" Request placeholder="ism" >
            </div>
			<div class="mt-6 sm:mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					Tel
				</label>
				<input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="tel" placeholder="telefon">
            </div>
			<div class="mt-6 sm:mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					Telegram
				</label>
				<input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="user@name">
            </div>
		
			<div>
				<a href="#!" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                 shadow-lg cursor-pointer transition ease-in duration-300">
                    Jo'natish
                </a>
			</div>
			
		</form>
	</div>
</div>
    </div>
<!-- -=-=--==-=-=-= Kursga yozilish-=-=-=-=-=-=-= -->
  <!-- section 1 -->
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";


const modules = ref([Autoplay, Navigation]);

const call = ref(true)

const items = ref([
  {
    id: 1,
    name: "WEB DASTURLASH",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/web-developers.png",
  },
  {
    id: 2,
    name: "PRO DESIGN",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/PicWish-AI-photo-editor.jpg",
  },
  {
    id: 3,
    name: "MOBILAGIRAFIA",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/rollercoaster-1.webp",
  },
  {
    id: 4,
    name: "VIDEO MONTAJ",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/ВМ-УЗ.jpg",
  },
  {
    id: 5,
    name: "PYTHON",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/python.webp",
  },
  {
    id: 6,
    name: "MS OFFICE",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/msoffice.2bb6bc39.webp",
  },
  {
    id: 7,
    name: "ANDROID",
    text: "Web sayt va web dasturlarni yaratish",
    img: "../../public/android.webp",
  },
]);

const checs = ref([
  'HTML 5','CSS','JAVA SCRIPT','TYPE SCRIPT','VUE','GIT','GIT-HUB','SCSS','TAILWINDCSS','BOOTSTRAP 5','FIGMA','CHAT GPT-4','BEM'
])
</script>

<style scoped>
.csstext {
  transform: scale(0);
  transition: 0.5s;
}

.cssbtn:hover .csstext {
  transform: scale(1);
}

.cssbtn:hover .csswrap {
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.coverking {
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}
</style>

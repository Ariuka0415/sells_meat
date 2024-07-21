<template>
  <div
    class="navbar flex justify-around p-[6px] shadow-boxShadow items-center xl:py-[12px] xl:px-50px lg:py-[12px] lg:px-[30px] md:py-[5px] md:px-0 sm:py-[8px] sm:px-0"
    :class="{ 'bg-opacity-75': shift, 'bg-white': shift }"
  >
    <NuxtLink to="/">
      <div class="nav-logo flex items-center">
        <img
          class="xl:w-[60px] sm:w-[30px]"
          src="file:///C:/Users/Swift%203/Downloads/Component%2011.svg"
          alt=""
        />
      </div>
    </NuxtLink>
    <div
      class="hidden md:block w-[30px]"
      :class="{ 'rotate-90': toggle }"
      @click="toggleMenu"
    >
      <Icon name="ion:ios-arrow-dropdown" style="color: black" />
    </div>
    <ul
      class="nav-menu flex items-center list-none gap-[30px] text-[#3d4142] font-bold uppercase text-[12px] xl:gap-[30px] xl:text-[16px] lg:gap-[25px] lg:text-[11px] md:h-[80px] md:w-full md:absolute md:bg-white md:justify-center md:top-[50px] md:hidden"
    >
      <li
        class="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        @click="type('хонь')"
      >
        <NuxtLink to="/category/хонь">
          Хонь
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'хонь'"
          />
        </NuxtLink>
      </li>
      <li
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        @click="type('үхэр')"
      >
        <NuxtLink to="/category/үхэр">
          Үхэр
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'үхэр'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('ямаа')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/ямаа">
          Ямаа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'ямаа'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('тахиа')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/тахиа">
          Тахиа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'тахиа'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('гахай')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/гахай">
          Гахай
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'гахай'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('бусад')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/бусад">
          Бусад
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'бусад'"
          />
        </NuxtLink>
      </li>
    </ul>
    <!-- md -->
    <ul
      class="nav-menu flex items-center list-none gap-[30px] text-[#3d4142] font-bold uppercase text-[12px] xl:gap-[30px] xl:text-[16px] lg:gap-[25px] lg:text-[10px] md:h-[70px] md:w-full md:absolute md:bg-white md:justify-center md:top-[50px] md:flex md:z-30 md:text-[10px] sm:h-[70px] t-[50px]"
      v-if="toggle"
    >
      <li
        class="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        @click="type('хонь')"
      >
        <NuxtLink to="/category/хонь">
          Хонь
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'хонь'"
          />
        </NuxtLink>
      </li>
      <li
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        @click="type('үхэр')"
      >
        <NuxtLink to="/category/үхэр">
          Үхэр
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'үхэр'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('ямаа')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/ямаа">
          Ямаа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'ямаа'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('тахиа')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/тахиа">
          Тахиа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'тахиа'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('гахай')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/гахай">
          Гахай
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'гахай'"
          />
        </NuxtLink>
      </li>
      <li
        @click="type('бусад')"
        class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
      >
        <NuxtLink to="/category/бусад">
          Бусад
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'бусад'"
          />
        </NuxtLink>
      </li>
    </ul>

    <div class="nav-login-cart flex items-center gap-[25px] xl:gap-[30px] sm:justify-end ">
      <img
        class="w-[25px] text-[#333333] sm:w-[15px]"
        src="file:///C:/Users/Swift%203/Downloads/Vector%20(3).svg"
        alt=""
      />
      <NuxtLink to="/Login">
        <button
          class="loginBtn xl:w-[120px] xl:h-[45px] xl:text-[16px] w-[130px] h-[40px] outline-none border-border rounded-[75px] text-[#515151] text-[16px] font-medium bg-white cursor-pointer border border-gray-400 hover:bg-[#f3f3f3] duration-300 lg:w-[80px] lg:h-[35px] lg:text-[14px] sm:w-[60px] sm:h-[20px] sm:text-[10px]"
        >
          Нэвтрэх
        </button>
      </NuxtLink>
      <NuxtLink to="/Cart">
        <img
          class="w-[40px] lg:w-[30px] sm:w-[15px]"
          src="file:///C:/Users/Swift%203/Downloads/ion_cart-outline.svg"
          alt=""
        />
      </NuxtLink>
      <div
        class="nav-cart-count xl:ml-[-40px] xl:text-[12px] w-[18px] h-[18px] flex justify-center items-center mt-[-35px] ml-[-35px] text-[14px] bg-red-600 text-white rounded-[10px] lg:w-[16px] lg:h-[16px] sm:w-[8px] sm:h-[8px] sm:text-[4px] sm:mt-[1px]"
      >
        0
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref("");
const shift = ref(false);
const toggle = ref(false);

function toggleMenu() {
  toggle.value = !toggle.value;
  console.log("clik", toggle.value);
}

function type(animalType) {
  if (animalType === "хонь") {
    menu.value = "хонь";
    shift.value = true;
  } else if (animalType === "ямаа") {
    menu.value = "ямаа";
    shift.value = true;
  } else if (animalType === "үхэр") {
    menu.value = "үхэр";
    shift.value = true;
  } else if (animalType === "тахиа") {
    menu.value = "тахиа";
    shift.value = true;
  } else if (animalType === "гахай") {
    menu.value = "гахай";
    shift.value = true;
  } else {
    menu.value = "бусад";
    shift.value = true;
  }
}
</script>

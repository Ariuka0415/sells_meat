<template>
  <div class="navbar flex justify-around p-[6px] shadow-boxShadow items-center">
    <NuxtLink to="/">
      <div class="nav-logo flex items-center">
        <img
          src="file:///C:/Users/Swift%203/Downloads/Component%2011.svg"
          alt=""
        />
      </div>
    </NuxtLink>

    <ul
      class="nav-menu flex items-center list-none gap-[30px] text-[#3d4142] font-bold uppercase text-[12px]"
    >
      <NuxtLink to="хонь">
        <li
          class="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          @click="type('хонь')"
        >
          Хонь
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'хонь'"
          />
        </li>
      </NuxtLink>
      <NuxtLink to="үхэр">
        <li
          class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
          @click="type('үхэр')"
        >
          Үхэр
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'үхэр'"
          />
        </li>
      </NuxtLink>
      <NuxtLink to="ямаа">
        <li
          @click="type('ямаа')"
          class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        >
          Ямаа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'ямаа'"
          />
        </li>
      </NuxtLink>
      <NuxtLink to="тахиа">
        <li
          @click="type('тахиа')"
          class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        >
          Тахиа
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'тахиа'"
          />
        </li>
      </NuxtLink>
      <NuxtLink to="гахай">
        <li
          @click="type('гахай')"
          class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        >
          Гахай
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'гахай'"
          />
        </li>
      </NuxtLink>
      <NuxtLink to="бусад">
        <li
          @click="type('бусад')"
          class="flex flex-col column items-center justify-center gap-[3px] cursor-pointer"
        >
          Бусад
          <hr
            class="border-none w-full h-[3px] rounded-[10px] bg-[#ff4141]"
            v-if="menu === 'бусад'"
          />
        </li>
      </NuxtLink>
    </ul>

    <div class="nav-login-cart flex items-center gap-[25px]">
      <img
        class="w-[25px] text-[#333333]"
        src="file:///C:/Users/Swift%203/Downloads/Vector%20(3).svg"
        alt=""
      />
      <NuxtLink to="Login">
        <button
          class="loginBtn w-[130px] h-[40px] outline-none border-border rounded-[75px] text-[#515151] text-[16px] font-medium bg-white cursor-pointer border border-gray-400 hover:bg-[#f3f3f3] duration-300"
        >
          Нэвтрэх
        </button>
      </NuxtLink>
      <NuxtLink to="/Cart">
        <img
          class="w-[40px]"
          src="file:///C:/Users/Swift%203/Downloads/ion_cart-outline.svg"
          alt=""
        />
      </NuxtLink>
      <div
        class="nav-cart-count w-[18px] h-[18px] flex justify-center items-center mt-[-35px] ml-[-35px] text-[14px] bg-red-600 text-white rounded-[10px]"
      >
        0
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref("хонь");

function type(animalType) {
  if (animalType === "хонь") {
    menu.value = "хонь";
  } else if (animalType === "ямаа") {
    menu.value = "ямаа";
  } else if (animalType === "үхэр") {
    menu.value = "үхэр";
  } else if (animalType === "тахиа") {
    menu.value = "тахиа";
  } else if (animalType === "гахай") {
    menu.value = "гахай";
  } else {
    menu.value = "бусад";
  }
}
</script>

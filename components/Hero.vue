<template>
  <div class="hero relative flex flex-col">
    <img
      class="heroImg w-full h-[calc(100vh-80px)] object-cover"
      src="https://porterroad.com/cdn/shop/files/FarmRittenbery-7869_lo_1880x1050.jpg?v=1614333080"
      alt=""
    />
    <div
      class="absolute flex flex-col items-center justify-center left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 bg-[#462516] rounded-lg p-8 shadow-lg"
    >
      <h1 class="text-[50px] text-white font-bold mb-4">
        Та захиал Бид хүргэж өгөе
      </h1>
      <p class="text-white text-lg">
        Ховдын хаанаас ч хамгийн чанартай махыг таньд хүргэж өгнө.
      </p>
      <button
        class="text-[#462516] flex justify-center items-center w-[200px] h-[50px] rounded-[75px] bg-[#ffffff] text-[20px] font-semibold mt-6 cursor-pointer hover:bg-[#eae9e9] hover:shadow-md transition duration-300"
      >
        Захиалга өгөх
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: calc(100vh - 80px);
}
.heroImg {
  filter: brightness(70%);
}
</style>

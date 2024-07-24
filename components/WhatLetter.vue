<template>
  <div
    class="what-letter my-6 flex flex-col items-center px-20 md:py-10 md:bg-white sm:pt-[30px] md:px-14 sm:px-10"
  >
    <h1 class="text-[35px] font-bold mt-[50px] text-[#312828] md:text-[20px]">
      Бид юу хүргэдэг вэ?
    </h1>
    <p
      class="text-[18px] text-[#312828] my-[10px] text-center px-[140px] md:px-10 md:text-[14px sm:px-[0]"
    >
      Deserunt nostrum, sint alias at placeat eveniet rerum totam dicta magnam
      dolorem nobis, ducimus amet commodi quos, id harum deleniti similique
      vitae.
    </p>
    <div
      class="answers text-center flex justify-evenly w-full py-6 md:block md:py-2"
    >
      <div
        class="answer1 bg-[#ffffff] p-[16px] pb-[16px] w-[28%] flex flex-col justify-center items-center shadow md:w-full md:my-4"
      >
        <!-- <img
          class="w-[60px] h-[60px] my-1 md:w-[40px] md:h-[40px]"
          src="file:///C:/Users/Swift%203/Documents/sellsMeat_ecommerce/frontend/assets/Vector%20(5).svg"
          alt=""
        /> -->
        <h1
          class="uppercase text-[15px] font-semibold my-2 md:text-[13px] sm:text-[12px]"
        >
          Хамгийн чанартай мах
        </h1>
        <p class="mb-3 md:text-[13px] sm:text-[10px]">
          100% өвсөөр тэжээгддэг үхрийн мах, чөлөөт органик тахиа, хүний
          ​​гараар өсгөсөн гахайн мах.
        </p>
      </div>
      <div
        class="answer2 bg-[#ffffff] p-[16px] pb-[16px] w-[28%] flex flex-col justify-center items-center shadow md:w-full md:my-3"
      >
        <!-- <img
          class="w-[60px] h-[60px] my-2 md:w-[40px] md:h-[40px]"
          src="file:///C:/Users/Swift%203/Downloads/Group.svg"
          alt=""
        /> -->
        <h1
          class="uppercase text-[15px] font-semibold my-2 md:text-[13px] sm:text-[12px]"
        >
          Боломжийн үнэ
        </h1>
        <p class="mb-3 md:text-[13px] sm:text-[10px]">
          Үхрийн махнаас эхлээд филе миньон хүртэлх өндөр чанартай зүсмэлүүдийг
          гайхалтай үнээр аваарай.
        </p>
      </div>
      <div
        class="answer3 bg-[#ffffff] p-[16px] pb-[16px] w-[28%] flex flex-col justify-center items-center shadow md:w-full md:my-3"
      >
        <!-- <img
          class="w-[60px] h-[60px] my-2 md:w-[40px] md:h-[40px]"
          src="file:///C:/Users/Swift%203/Documents/sellsMeat_ecommerce/frontend/assets/Vector%20(6).svg"
          alt=""
        /> -->
        <h1
          class="uppercase text-[15px] font-semibold my-2 md:text-[13px] sm:text-[12px]"
        >
          БҮРЭН УЯН хатан
        </h1>
        <p class="mb-3 md:text-[13px] sm:text-[10px]">
          Хүргэлт үргэлж ҮНЭГҮЙ, бид таны хуваарийн дагуу таны үүдэнд хүргэх ба
          та хүссэн үедээ цуцлах боломжтой.
        </p>
      </div>
    </div>
    <NuxtLink to="/Cart">
      <button
        class="text-[#ffffff] flex justify-center items-center w-[200px] h-[45px] bg-[#c53831] text-[16px] font-semibold mt-6 cursor-pointer rounded-[75px] hover:bg-[#862d28] hover:shadow-md transition duration-300 md:w-[160px] md:h-[35px] md:text-[10px]"
      >
        Карт үзэх
      </button>
    </NuxtLink>
  </div>
</template>

<template>
  <div
    className="loginsignup w-[100%] bg-[#ffffff] my-[70px] bg-opacity-85 md:my-[20px] md:px-20 sm:px-0"
  >
    <div
      className="loginsignup-container w-[680px] h-[600px] bg-white shadow-lg  m-auto py-[40px] px-[60px] md:w-full sm:w-full sm:px-[30px]"
    >
      <h1 class="my-[20px] mx-[0px] text-[30px] md:my-[15px] md:text-[25px] sm:my-[10px] sm:text-[20px]">Нэвтрэх</h1>
      <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px] sm:gap-[20px] sm:mt-[20px]">
        <!-- <input type="text" placeholder="Your Name" /> -->
        <input
          type="email"
          placeholder="И-Мэйл хаяг"
          class="h-[72px] w-full sm:h-[60px] pl-[20px] border outline-none text-[#5c5c5c] text-[18px] rounded-xl sm:text-[15px]"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          class="h-[72px] sm:h-[60px] sm:text-[15px] w-full pl-[20px] border outline-none text-[#5c5c5c] text-[18px] rounded-xl"
        />
      </div>
      <button
        class="w-full rounded-xl h-[72px] sm:h-[60px] sm:text-[20px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer hover:bg-[#c53831]"
      >
        Нэвтрэх
      </button>
      <p
        className="loginsignup-login mt-5 text-[#000000] text-[18px] font-medium"
      >
        Бүртгэл үүсгээгүй бол...
        <NuxtLink to="/Signup">
          <span
            class="text-[#ff4141] font-semibold hover:underline cursor-pointer hover:duration-500"
            >Бүртгүүлэх</span
          ></NuxtLink
        >
      </p>
      <div
        className="loginsignup-agree flex items-center mt-[25px] gap-5 text-[#000000] font-medium"
      >
        <input type="checkbox" name="" id="" />
        <p class="my-4">
          Үргэлжлүүлснээр би ашиглалтын нөхцөл, нууцлалын бодлогыг зөвшөөрч
          байна.
        </p>
      </div>
    </div>
  </div>
</template>

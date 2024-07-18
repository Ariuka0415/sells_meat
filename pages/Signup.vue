<template>
  <div
    className="loginsignup w-[100%] h-[105vh] bg-[#ffffff] bg-opacity-85 my-4 "
  >
    <div
      className="loginsignup-container w-[680px] h-[600px] bg-white shadow-lg m-auto py-[40px] px-[60px]"
    >
      <h1 class="font-semibold mx-[0px] text-[20px]">Бүртгүүлэх</h1>
      <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
        <input
          type="text"
          class="h-[60px] w-full pl-[20px] border outline-none text-[#5c5c5c] text-[18px] rounded-xl"
          placeholder="Your Name"
        />
        <input
          type="email"
          placeholder="И-Мэйл хаяг"
          class="h-[60px] w-full pl-[20px] border outline-none text-[#5c5c5c] text-[18px] rounded-xl"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          class="h-[60px] w-full pl-[20px] border outline-none text-[#5c5c5c] text-[18px] rounded-xl"
        />
      </div>
      <button
        class="w-full rounded-xl h-[60px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer hover:bg-[#c53831]"
      >
        Бүртгүүлэх
      </button>
      <p
        className="loginsignup-login mt-5 text-[#000000] text-[18px] font-medium"
      >
        Бүртгэлтэй бол ...
        <NuxtLink to="/Login">
          <span
            class="text-[#ff4141] font-semibold hover:underline cursor-pointer hover:duration-500 "
            >Нэвтрэх</span
          ></NuxtLink
        >
      </p>
      <div
        className="loginsignup-agree flex items-center mt-[25px] gap-5 text-[#000000] font-medium"
      >
        <input type="checkbox" name="" id="" />
        <p class="">
          Үргэлжлүүлснээр би ашиглалтын нөхцөл, нууцлалын бодлогыг зөвшөөрч
          байна.
        </p>
      </div>
    </div>
  </div>
</template>

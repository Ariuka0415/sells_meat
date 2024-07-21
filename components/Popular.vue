<template>
  <div
    class="popular flex flex-col items-center gap-[20px] my-[100px] xl:h-[70vh] lg:h-[60vh] md:h-[50vh] md:gap-[6px]  sm:h-[90vh]"
  >
    <h1
      class="text-[#312828] text-[50px] font-bold xl:text-[40px] lg:text-[30px] md:text-[20px]"
    >
      Хамгийн их зарагдсан
    </h1>
    <hr
      class="w-[200px] h-[2px] rounded-[10px] bg-[#312828] xl:w-[160px] xl:h-[4px] lg:w-[120px] lg:h-[3px] md:w-[100px]"
    />
    <div
      class="popular-item flex gap-6 mt-[50px] xl:gap-[20px] xl:mt-[30px] lg:gap-[15px] lg:mt-[20px] md:gap-[10px] sm:grid sm:grid-cols-2 sm:gap-5"
    >
      <!-- v-bind hiihgui bol ajildggun bnoo -->
      <Item
        v-for="(item, id) in data_product"
        :key="id"
        :data_product="data_product"
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :old_price="item.old_price"
        :new_price="item.new_price"
        :category="item.category"
      />
    </div>
  </div>
</template>
<script setup>
import Category from "~/pages/category/[category].vue";

const data_product = [
  {
    id: 1,
    name: "Үхрийн ястай мах",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx-oDBkOEi3Gmiuvone3Tuzih0oiGfry1CbOrhf9Gmc8k_c9ZA",
    new_price: 31,
    old_price: 39,
    category: "үхэр",
  },
  {
    id: 2,
    name: "Үхрийн стеакны мах",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ81zqqev5GLAatBVCFtoiK-hIfZbdUUuuRwGOzTF8Boz1Y3KDy",
    new_price: 29,
    old_price: 0,
    category: "үхэр",
  },
  {
    id: 3,
    name: "Үхрийн цул мах",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXlPXBu2-gIt_Zzl-nMRuXevLMkDLK7M6LLFWEqbSCVM-4bM6",
    new_price: 12,
    old_price: 14,
    category: "үхэр",
  },
  {
    id: 4,
    name: "Үхрийн хавтрганы мах",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ02CRSwbRG6ia0j6zMS_3yZgFIn5kB70WORDHaigsLUGEGq0tT",
    new_price: 72,
    old_price: 0,
    category: "үхэр",
  },
];
</script>

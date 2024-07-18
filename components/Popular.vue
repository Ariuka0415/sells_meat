<template>
  <div class="popular flex flex-col items-center gap-[20px] my-[100px] ">
    <h1 class="text-[#312828] text-[50px] font-bold">Хамгийн их зарагдсан</h1>
    <hr class="w-[200px] h-[2px] rounded-[10px] bg-[#312828]" />
    <div class="popular-item flex gap-6 mt-[50px]">
      <!-- v-bind hiihgui bol ajildggun bnoo -->
      <Item
        v-for="(item, id) in data_product"
        :key="id"
        :data_product="data_product"
        :image="item.image"
        :name="item.name"
        :old_price="item.old_price"
        :new_price="item.new_price"
      />
    </div>
  </div>
</template>
<script setup>
const data_product = [
  {
    id: 1,
    name: "Үхрийн ястай мах",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx-oDBkOEi3Gmiuvone3Tuzih0oiGfry1CbOrhf9Gmc8k_c9ZA",
    new_price: 31,
    old_price: 39,
  },
  {
    id: 2,
    name: "Үхрийн стеакны мах",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ81zqqev5GLAatBVCFtoiK-hIfZbdUUuuRwGOzTF8Boz1Y3KDy",
    new_price: 29,
    old_price: 0,
  },
  {
    id: 3,
    name: "Үхрийн цул мах",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXlPXBu2-gIt_Zzl-nMRuXevLMkDLK7M6LLFWEqbSCVM-4bM6",
    new_price: 12,
    old_price: 14,
  },
  {
    id: 4,
    name: "Үхрийн хавтрганы мах",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ02CRSwbRG6ia0j6zMS_3yZgFIn5kB70WORDHaigsLUGEGq0tT",
    new_price: 72,
    old_price: 0,
  },
];
</script>

<template>
  <div
    class="special-products flex flex-col items-center gap-[10px] my-[100px]"
  >
    <h1 class="text-[#312828] text-[50px] font-bold">Онцлох бүтээгдэхүүнүүд</h1>
    <hr class="w-[200px] h-[2px] rounded-[10px] bg-[#312828]" />
    <div class="products grid grid-cols-4 mt-[50px] gap-[30px]">
      <Item
        v-for="(item, i) in specialProducts"
        :key="i"
        :specialProducts="specialProducts"
        :category="item.category"
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :old_price="item.old_price"
        :new_price="item.new_price"
      />
    </div>
  </div>
</template>
<script setup>
const specialProducts = [
  {
    id: 21,
    name: "Хавирганы ясгүй шарсан мах",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/f52480cc-0f43-49d0-b414-37c1bad055d3/mt_rt_026b?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 149.9,
    old_price: 299.9,
  },
  {
    id: 22,
    name: "Утсан гахайн мах",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/58677a6c-d92f-4b78-85fb-9d06b9afbd70/mt_rb_062a?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 100.9,
    old_price: 169.9,
  },
  {
    id: 23,
    name: "Бүрэн чанасан үхрийн шарсан мах",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/c9ab37ed-e86e-40ee-ba8b-2a9593f171fa/mt_rt_095d?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 100.9,
    old_price: 169.9,
  },
  {
    id: 24,
    name: "Үхрийн ясгүй богино хавирга",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/e7acd4b1-76d7-4f10-9c54-eeab63ed8b4a/mt_rb_015d?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 100.9,
    old_price: 169.9,
  },
  {
    id: 25,
    name: "Үхрийн стеакны мах",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/2a96a649-14a0-4c4e-a0ab-f933031d2d2d/s_ts_205c?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 80.9,
    old_price: 100.9,
  },
  {
    id: 26,
    name: "Ястай хавирганы шарсан мах",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/51c9f6fc-2600-4952-a007-a3c59f5ff404/mt_rt_030a?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 70.9,
    old_price: 89.9,
  },
  {
    id: 27,
    name: "Үхрийн махны богино хавиргатай яс",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/ffd63771-19c3-4945-837a-3bf944527671/mt_rb_011a?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 50.9,
    old_price: 80.9,
  },
  {
    id: 28,
    name: "Гахайн нурууны хавирга",
    category: "бусад",
    image:
      "https://assets.omahasteaks.com/transform/7747cfce-85e6-45a3-90ca-814d1a6e9d70/mt_rb_025a?io=transform:fill,width:1086,height:465,gravity:center",
    new_price: 69.9,
    old_price: 100.9,
  },
];
</script>

<template>
  <div class="item w-[250px] hover:scale-105 hover:duration-[0.6s]">
    <NuxtLink :to="`/category/${category1}/${id}`">
      <img class="w-[250px] h-[250px] object-cover" :src="image" alt="" />
      <p class="my-[6px] mx-[0px] text-[#312828] font-semibold">{{ name }}</p>
      <div class="item-prices flex gap-[20px] text-[18px]">
        <div class="item-price-new text-[#312828] font-bold">
          ${{ new_price }}
        </div>
        <div
          class="item-price-old text-[#312828] font-medium line-through"
          v-if="old_price"
        >
          ${{ old_price }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  image: String,
  name: String,
  new_price: Number,
  old_price: String,
  category: String,
});
const category1 = props.category;
console.log(category1);
</script>

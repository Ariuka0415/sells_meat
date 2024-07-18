<template>
  <div class="item w-[250px] hover:scale-105 hover:duration-[0.6s]">
    <img class="w-[250px]" :src="image" alt="" />
    <p class="my-[6px] mx-[0px] text-[#312828] font-semibold">{{ name }}</p>
    <div class="item-prices flex gap-[20px] text-[18px]">
      <div class="item-price-new text-[#312828] font-bold">
        ${{ new_price }}
      </div>
      <div class="item-price-old text-[#312828] font-medium line-through">
        ${{ old_price }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { image, name, new_price, old_price } = defineProps([
  "image",
  "name",
  "new_price",
  "old_price",
]);
</script>

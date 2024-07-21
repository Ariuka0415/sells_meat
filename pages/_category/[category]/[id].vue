<template>
  <div class="my-10">
    <div
      class="crum flex items-center gap-[8px] text-[#3d4142] text-[16px] font-bold my-[30px] mx-[80px]"
    >
      ГЭР
      <Icon name="material-symbols:arrow-forward-ios" style="color: black" />
      МАХ
      <Icon name="material-symbols:arrow-forward-ios" style="color: black" />
      <span class="capitalize"> {{ category }}</span>
      <Icon name="material-symbols:arrow-forward-ios" style="color: black" />
      <span v-if="currenProduct" class="capitalize">{{
        currenProduct.name
      }}</span>
    </div>
    <div class="display flex my-0 mx-[100px]">
      <div class="display-left gap-[15px]">
        <div class="mainImg w-[540px] object-cover">
          <img
            class="h-[550px] object-cover"
            v-if="currenProduct.category === 'үхэр'"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Figg3bjkkud0%2FRibeye_Beef_Product_Grain_1.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Boneless%20Ribeye%20Steak&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=1f2283bc7fccf835ae547285f320fe99"
            alt=""
          />
          <img
            v-else-if="currenProduct.category === 'гахай'"
            class="h-[550px] object-cover"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Fijhd1ezdr3k%2Fproduct_TrueStory_FullCrop_BonelessPorkChop_RawStyled_.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Kurobuta%20Boneless%20Pork%20Chop&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=020da7e75a8024c3fdda901e2b5be1dd"
            alt=""
          />
          <img
            v-else-if="currenProduct.category === 'хонь'"
            class="h-[550px] object-cover"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Fidvczlfpepg%2Fculotte_w_cap_Wagyu_Cross_Product_Mishima-Edit.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Picanha&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=2347987a3934eb06e8d4b441d3867029"
            alt=""
          />
          <img
            v-else-if="currenProduct.category === 'ямаа'"
            class="h-[550px] object-cover"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Fiw9kpnxhv7o%2FBone-in_ribeye_Wagyu_Cross_Product_Mishima.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Wagyu%20Bone-in%20Ribeye%20Steak&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=bd81f2bc874df7e9244b09d681c2fb56"
            alt=""
          />
          <img
            v-else-if="currenProduct.category === 'тахиа'"
            class="h-[550px] object-cover"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Fie30cgsxkth%2FThighs_Chicken_Product_Pasture_Raised.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Heirloom%20Chicken%20Thighs&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=ede5fe3f5ac0dbf4eed5fc7e8eda9406"
            alt=""
          />
          <img
            v-else-if="currenProduct.category === 'бусад'"
            class="h-[550px] w-[586px] object-cover"
            src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-uploads.imgix.net%2Fpicture%2Fproduction%2Ficcwkm6dygp%2FSteak-Lover-Box.jpg?ixlib=rails-2.1.4&fit=crop&alt=Image%20of%20Steak%20Lover%20Box&data=%7B%22product-detail--image-switcher-target%22%3D%3E%22mainImage%22%7D&auto=compress%2Cformat&cs=srgb&w=720&h=720&s=177851ca197da45870b2fd91e107840d"
            alt=""
          />
        </div>
        <div class="img-list flex gap-[10px] my-3 justify-center items-center">
          <img
            class="h-[100px] w-[100px] object-cover"
            :src="currenProduct.image"
            alt=""
          />
          <img
            class="h-[100px] w-[100px] object-cover"
            :src="currenProduct.image"
            alt=""
          />
          <img
            class="h-[100px] w-[100px] object-cover"
            :src="currenProduct.image"
            alt=""
          />
          <img
            class="h-[100px] w-[100px] object-cover"
            :src="currenProduct.image"
            alt=""
          />
          <img
            class="h-[100px] w-[100px] object-cover"
            :src="currenProduct.image"
            alt=""
          />
        </div>
      </div>
      <div class="diplay-right flex flex-col my-0 mx-[70px]">
        <h1 class="text-[#3d3d3d] text-[40px] font-bold">
          {{ currenProduct.name }}
        </h1>
        <div
          class="stars flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]"
        >
          <Icon name="ic:sharp-star-purple500" style="color: #c53831" />
          <Icon name="ic:sharp-star-purple500" style="color: #c53831" />
          <Icon name="ic:sharp-star-purple500" style="color: #c53831" />
          <Icon name="ic:sharp-star-purple500" style="color: #c53831" />
          <Icon name="ic:sharp-star-purple500" style="color: #c53831" />
          <p>(54)</p>
        </div>
        <div
          class="prices flex my-[10px] mx-0 gap-[20px] text-[20px] font-bold"
        >
          <div>${{ currenProduct.new_price }}</div>
          <div
            class="text-[#c53831] line-through"
            v-if="currenProduct.old_price"
          >
            ${{ currenProduct.old_price }}
          </div>
        </div>
        <div class="description my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, amet
          fugiat praesentium impedit earum mollitia delectus quisquam neque,
          repellat unde, minus ut sequi voluptate labore atque aperiam quibusdam
          eligendi sint!
        </div>
        <h1 class="text-[#3d3d3d] my-[10px] gap-5 text-[24px] font-bold">
          Жин: <span class="ml-14 font-medium">1кг</span>
        </h1>
        <h1 class="text-[#3d3d3d] my-[10px] gap-5 text-[24px] font-bold">
          Ангилал:
          <span class="ml-14 font-medium capitalize">{{
            currenProduct.category
          }}</span>
        </h1>
        <div class="addCart flex justify-between items-center">
          <h6 class="text-[24px] font-bold my-[20px]">
            Нийт үнэ: ${{ parseInt(currenProduct.new_price * value) }}
          </h6>
          <div class="flex items-center">
            <button
              @click="value--"
              class="rounded-full w-[30px] flex items-center justify-center h-[30px] bg-[#ede9e8] mx-[10px] hover:bg-[#e1e4ea]"
            >
              <Icon name="ic:round-minus" style="color: black" />
            </button>
            <span class="text-[20px] font-semibold">{{ value }}</span>
            <button
              @click="value++"
              class="rounded-full w-[30px] flex items-center justify-center h-[30px] bg-[#ede9e8] mx-[10px] hover:bg-[#e1e4ea]"
            >
              <Icon name="material-symbols:add-rounded" style="color: black" />
            </button>
          </div>
        </div>
        <button
          class="text-[#ffffff] flex justify-center items-center w-[160px] mx-[5px] h-[45px] bg-[#c53831] text-[16px] font-semibold my-3 cursor-pointer hover:bg-[#862d28] hover:shadow-md transition duration-300"
        >
          Картанд хийх
        </button>

        <div
          class="giftBox flex my-5 justify-start items-center text-[25px] font-semibold text-[#3d3d3d]"
        >
          <Icon name="flowbite:gift-box-solid" style="color: black" />
          <h1 class="ml-2">Бэлгийн багц руу хийх</h1>
        </div>
      </div>
    </div>
    <div
      v-if="currenProduct.category != 'бусад'"
      class="relatedProducts h-[80vh] my-10 flex flex-col justify-center"
    >
      <h1 class="text-[30px] font-bold mx-[80px] my-6">
        Холбоотой бүтээгдэхүүн
      </h1>
      <div class="products mt-5 mb-10 mx-[100px] grid grid-cols-4 gap-6">
        <Item
          v-for="(item, id) in filteredProducts"
          :key="id"
          :id="item.id"
          :image="item.image"
          :name="item.name"
          :old_price="item.old_price"
          :new_price="item.new_price"
          :category="item.category"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const category = route.params.category;
const id = Number(route.params.id);
const value = ref(0);

const all_product = [
  {
    id: 1,
    name: "Үхрийн ястай мах",
    category: "үхэр",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx-oDBkOEi3Gmiuvone3Tuzih0oiGfry1CbOrhf9Gmc8k_c9ZA",
    new_price: 31,
    old_price: 39,
  },
  {
    id: 2,
    name: "Үхрийн стеакны мах",
    category: "үхэр",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ81zqqev5GLAatBVCFtoiK-hIfZbdUUuuRwGOzTF8Boz1Y3KDy",
    new_price: 29,
    old_price: "",
  },
  {
    id: 3,
    name: "Үхрийн цул мах",
    category: "үхэр",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXlPXBu2-gIt_Zzl-nMRuXevLMkDLK7M6LLFWEqbSCVM-4bM6",
    new_price: 12,
    old_price: 14,
  },
  {
    id: 4,
    name: "Үхрийн хавтрганы мах",
    category: "үхэр",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ02CRSwbRG6ia0j6zMS_3yZgFIn5kB70WORDHaigsLUGEGq0tT",
    new_price: 72,
    old_price: "",
  },
  {
    id: 5,
    name: "Хонины гуя",
    category: "хонь",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0DqFOHnFe0TpoQm1JCEn-h9GTCzilXIxzw&s",
    new_price: 31.9,
    old_price: 39.5,
  },
  {
    id: 6,
    name: "Хонины цул мах",
    category: "хонь",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJE8a5X9CxHb4C8ZjMLkTPd6GOY8woM83_Q&s",
    new_price: 40.9,
    old_price: 42.9,
  },
  {
    id: 7,
    name: "Хонины хавирга",
    category: "хонь",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEuE4WtFuFaLcdr0klbx2Ut6yGd14kauqmg&s",
    new_price: 35.5,
    old_price: 39.9,
  },
  {
    id: 8,
    name: "Хонины гулууз",
    category: "хонь",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJJ7NSI-Y5Bo9GY8EXBenexarlSCkRD61dg&s",
    new_price: 112.5,
    old_price: 119.9,
  },
  {
    id: 9,
    name: "Бүтэн тахиа",
    category: "тахиа",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoSIuREqGDxu8gBhZSYcdsLN72ss-AkUObyezSGNsaWSAidnY",
    new_price: 42,
    old_price: "",
  },
  {
    id: 10,
    name: "Тахианы гуя",
    category: "тахиа",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9Te8UimuLRRA9mto9By2GomHy8ulX-3Okhx0gJkZY6ZWbXEOn",
    new_price: 7,
    old_price: 9.9,
  },
  {
    id: 11,
    name: "Тахианы жижиглэсэн мах",
    category: "тахиа",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTi5_aCsDtb1KAGmagTfNt8DGuVNkZO33LrIw8IYXVPc0vctvn8",
    new_price: 10,
    old_price: "",
  },
  {
    id: 12,
    name: "Тахианы ясны шөл",
    category: "тахиа",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvQmEXpQ0wu3HySEv4iHaORZI_CqnnBJ7r5D44rVu4chsu5kA2",
    new_price: 12.5,
    old_price: 14.5,
  },
  {
    id: 13,
    name: "Ястай гахайн мах",
    category: "гахай",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR49fo_Y7-6DmZ_5gJsMnliUyFrTGSFKoD_li1B0qVEdrJR_F_7",
    new_price: 11,
    old_price: "",
  },
  {
    id: 14,
    name: "Ясгүй гахайн мах",
    category: "гахай",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1Tlg8PCjtnBTEGJpfFoJLvyLRJKR17LRHmD78uC6clVecry3x",
    new_price: 9,
    old_price: 11,
  },
  {
    id: 15,
    name: "Гахайн баветт",
    category: "гахай",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtwfZrFP0yzkBgOwOOiKzJaQ9Ueop9PMgdjR62rKQ7a9GcgA2Y",
    new_price: 10,
    old_price: "",
  },
  {
    id: 16,
    name: "Татсан гахайн мах",
    category: "гахай",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI4EMFRt0IyXXsPISACFdT2OzkCdblSAYIQ7altyyzKBWkDBH",
    new_price: 9,
    old_price: "",
  },
  {
    id: 17,
    name: "Ямааны гуя",
    category: "ямаа",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ981o9c40022NMjiVB1B7pUN1XYO3uz7oUzg&s",
    new_price: 20.5,
    old_price: 24,
  },
  {
    id: 18,
    name: "Ямааны гулууз",
    category: "ямаа",
    image:
      "https://t3.ftcdn.net/jpg/05/29/62/38/360_F_529623896_VZ1Kg506mZ9pvPuUBiIHOtkSE035cgj6.jpg",
    new_price: 90.6,
    old_price: 100.9,
  },
  {
    id: 19,
    name: "Ямааны жижиглэсэн мах",
    category: "ямаа",
    image:
      "https://www.goatshop.co.za/wp-content/uploads/2017/01/1688495609020.jpg",
    new_price: 15,
    old_price: "",
  },
  {
    id: 20,
    name: "Ямааны ястай мах",
    category: "ямаа",
    image:
      "https://www.redbankfarmshop.co.uk/wp-content/uploads/2024/02/img_2856.jpeg",
    new_price: 14.9,
    old_price: "",
  },
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

const currenProduct = computed(() => {
  return all_product.find((product) => product.id === id);
});
console.log(currenProduct.new_price);
console.log(value);
// const totalPrice = computed(() => {
//   return currenProduct.new_price.value * value.value;
// });

const filteredProducts = computed(() => {
  return all_product.filter((item) => item.category === category);
});
</script>

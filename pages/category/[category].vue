<template>
  <div class="meat-category">
    <div class="tagAndText">
      <img
        class="category-img w-full block object-cover"
        :src="banner"
        alt=""
      />
      <div class="back uppercase flex justify-center items-center my-5">
        <nav class="flex items-center space-x-4 font-medium text-[#3d4142]">
          <NuxtLink to="/" class="border-r border-gray-400 pr-4 cursor-pointer">
            <a class="hover:underline hover:text-[#c96167]">HOME</a>
          </NuxtLink>
          <NuxtLink
            to="/Cart"
            class="border-r border-gray-400 pr-4 cursor-pointer"
          >
            <a class="hover:underline hover:text-[#c96167]">КАРТны хэсэг</a>
          </NuxtLink>
          <NuxtLink to="/Login">
            <a class="hover:underline hover:text-[#c96167] cursor-pointer"
              >НЭВТРЭХ</a
            >
          </NuxtLink>
        </nav>
      </div>
      <h1
        class="flex justify-center items-center uppercase font-semibold text-[25px] text-[#3d4142] my-12"
      >
        хамгийн чанартайг манайхаас
        <span class="font-bold mx-2"> "{{ category }}"</span>
      </h1>
    </div>
    <div
      class="indexSort flex my-[0px] mx-[100px] justify-between items-center text-[20px] text-[#3d4142]"
    >
      <p><span class="font-semibold">Нийт бүтээгдэхүүнээс </span>Үзэлтэд 1-4</p>
      <div
        class="sort py-[10px] px-5 rounded-[40px] border-[1px solid #888] flex justify-center items-center"
      >
        Эрэмбэлэх
        <Icon name="material-symbols:arrow-drop-down" style="color: black" />
      </div>
    </div>

    <div class="products mt-5 mb-20 mx-[100px] grid grid-cols-4 gap-6">
      <Item
        v-for="(item, id) in filteredProducts"
        :key="id"
        :image="item.image"
        :name="item.name"
        :old_price="item.old_price"
        :new_price="item.new_price"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const category = route.params.category;

const banners = {
  хонь: "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw3825e093/Lamb_Category_Banner.jpg",
  үхэр: "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw131e943d/catPageBanner/beef_category_evergreen.jpg",
  ямаа: "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw28137b9e/Duck_Category_Banner_New.jpg",
  тахиа:
    "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw4f115daa/catPageBanner/chicken_category.jpg",
  гахай:
    "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw877fe14c/Pork_Category_Banner2.jpg",
  бусад:
    "https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-Library/default/dw24799da0/catPageBanner/venison_category.jpg",
};

const banner = banners[category];
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
const filteredProducts = computed(() => {
  return all_product.filter((item) => item.category === category);
});
</script>

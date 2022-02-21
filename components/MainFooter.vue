<template>
  <footer class="w-full text-white bg-black">
    <div class="container flex flex-col px-4 mx-auto">
      <div class="flex flex-col py-12">
        <HeadingDefault :left="true" class="mb-12">Kontakt</HeadingDefault>
        <div class="flex flex-col gap-5 mb-5">
          <div v-for="item in contact.info" :key="item.id" class="flex items-center uppercase font-extralight">
            <span class="mr-4">icon</span>
            <span class="pl-4 border-l border-white">{{ item.key }}</span>
            <span class="mr-1">:</span>
            <a :href="item.link">{{ item.value }}</a>
          </div>
        </div>
        <!-- Social media -->
        <div class="flex items-center gap-5 text-black">
          <div class="flex items-center justify-center h-12 text-center bg-white w-7">F</div>
          <div class="flex items-center justify-center h-12 text-center bg-white w-7">G</div>
        </div>
      </div>
      <div class="flex items-center justify-end h-12 text-left font-extralight">
        <p class="text-xs">
          <a href="#">Wojciech Skirło</a>
          copy 2022. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      contact: {
        info: [
          {
            id: 1,
            icon: "icon",
            key: "Email",
            value: "wojciechskiro@gmail.com",
            link: "",
          },
          {
            id: 2,
            icon: "icon",
            key: "Nr tel",
            value: "+48 733-789-494",
            link: "",
          },
        ],
        socialMedia: [],
      },
    };
  },
};
</script>
<template>
  <div class="antialiased">
    <Html lang="en-US">
      <Head>
        <Title>Woytek | Portfolio</Title>
        <Meta name="description" :content="`My page's description`" />
      </Head>
    </Html>
    <MainHeader />
    <SectionHello />
    <SectionAboutMe />
    <SectionPortfolio />
    <MainFooter />
    <transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      leave-to-class="opacity-0"
      enter-from-class="opacity-0"
    >
      <ToUp v-if="isToUp" />
    </transition>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      counter: 0,
      isToUp: false,
    };
  },
  mounted() {
    window.pageYOffset > 400 ? (this.isToUp = true) : (this.isToUp = false);
    window.addEventListener("scroll", () => {
      window.pageYOffset > 400 ? (this.isToUp = true) : (this.isToUp = false);
    });
  },
};
</script>
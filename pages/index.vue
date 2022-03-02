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
    <ToUp />
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
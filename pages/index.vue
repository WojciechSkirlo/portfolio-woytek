<template>
  <div class="antialiased" @mouseenter="changePosition" @mousemove="changePosition">
    <Html lang="pl-PL">
      <Head>
        <Title>Woytek | Portfolio</Title>
        <Meta
          name="description"
          link="asdasd"
          :content="`Tak właściwie to nazywam się Skirło Wojciech. Mam 20 lat. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                      Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                      Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`"
        />
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
};
</script>
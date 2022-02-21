<template>
  <section class="flex flex-col w-full h-screen hello-bg">
    <div class="container flex flex-col items-center flex-1 px-5 mx-auto">
      <div class="flex items-center justify-start w-full h-16">
        <a href="#" class="text-2xl font-medium uppercase text-accent">Wojciech Skirło</a>
      </div>
      <div class="flex flex-col items-center justify-center flex-1 px-8 text-center">
        <h1 class="mb-10 text-6xl font-thin leading-tight">Cześć! Jestem <span class="uppercase">Woytek</span></h1>
        <div class="px-6 py-2 text-white uppercase bg-black font-extralight">Cieszę się, że jesteś tutaj!</div>
      </div>
      <div class="flex items-center h-16">
        <div class="flex flex-col items-center animate-bounce">
          <span class="uppercase font-extralight mb-1.5">scroll me</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -4.5 24 24" width="16" fill="currentColor">
            <path
              d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.hello-bg {
  background: linear-gradient(to left, rgba(61, 193, 211, 0.65), rgba(61, 193, 211, 0.3));
}
</style>

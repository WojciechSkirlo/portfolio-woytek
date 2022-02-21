export default defineNuxtPlugin(nuxtApp => {
  // nuxtApp.hook('app:beforeMount', (el, binding) => {
  //   console.log(el);
  //   el.clickOutsideEvent = event => {
  //     if (!(el == event.target || el.contains(event.target))) {
  //       binding.value();
  //     }
  //   };
  //   document.addEventListener("click", el.clickOutsideEvent);
  // })
})

// const clickOutside = {
//   beforeMount: (el, binding) => {
//     el.clickOutsideEvent = event => {
//       // here I check that click was outside the el and his children
//       if (!(el == event.target || el.contains(event.target))) {
//         // and if it did, call method provided in attribute value
//         binding.value();
//       }
//     };
//     document.addEventListener("click", el.clickOutsideEvent);
//   },
//   unmounted: el => {
//     document.removeEventListener("click", el.clickOutsideEvent);
//   },
// };

// createApp(App)
//   .directive("click-outside", clickOutside)
//   .mount("#app");
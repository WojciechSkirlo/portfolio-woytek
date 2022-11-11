export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    beforeMount(el, binding) {
      el.clickOutSideEvent = (event) => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutSideEvent);
    },
    unmounted: (el) => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  });
});

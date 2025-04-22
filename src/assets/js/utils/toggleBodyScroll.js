export function toggleBodyScroll(value) {
  document.body.style.overflow = value ? "hidden" : "";
  document.body.style.touchAction = value ? "none" : ""; // для safari
  // if (disableScroll) {
  //   // Блокируем скролл
  //   document.body.style.overflow = "hidden";
  //   document.body.style.touchAction = "none";
  //   document.body.style.position = "fixed";
  //   document.body.style.width = "100%";
  //   document.body.style.height = "100%";
  //   document.body.style.top = `-${window.scrollY}px`; // Сохраняем позицию скролла
  // } else {
  //   // Разблокируем скролл
  //   const scrollY = document.body.style.top;
  //   document.body.style.overflow = "";
  //   document.body.style.touchAction = "";
  //   document.body.style.position = "";
  //   document.body.style.width = "";
  //   document.body.style.height = "";
  //   document.body.style.top = "";

  //   // Восстанавливаем позицию скролла
  //   if (scrollY) {
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   }
  // }
}
